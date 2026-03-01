import { test, expect } from '@playwright/test';

test.describe('Next.js Security Header Verification', () => {
    // We'll hit the localhost production server to verify the headers injected by next.config.ts
    const targetUrl = 'http://localhost:3001';

    test('should enforce strict security headers on the root document', async ({ request }) => {
        const response = await request.get(targetUrl);
        expect(response.status()).toBe(200);

        const headers = response.headers();

        // 1. Clickjacking Protection
        expect(headers['x-frame-options']).toBe('SAMEORIGIN');

        // 2. MIME-Sniffing Prevention
        expect(headers['x-content-type-options']).toBe('nosniff');

        // 3. Strict Referrer Policy (Crucial for Google Maps API Key protection)
        expect(headers['referrer-policy']).toBe('strict-origin-when-cross-origin');

        console.log('✅ Security Headers Verified Successfully');

        console.log('✅ Security Headers Verified Successfully');
    });

    test('should not leak sensitive environment variables to the client', async ({ page }) => {
        await page.goto(targetUrl);

        // Grab the entire HTML content of the page to check for leaks
        const content = await page.content();

        // The Sanity Read Token should NEVER be present in the public HTML
        // We expect this token to only be used server-side
        const leakedToken = content.includes('SANITY_API_READ_TOKEN');
        expect(leakedToken).toBe(false);

        console.log('✅ Environment Leak Check Passed');
    });
});

test.describe('Runtime Error Analysis', () => {
    test('should load the homepage without any unexpected console errors', async ({ page }) => {
        const errors: string[] = [];

        // Listen to console errors thrown during hydration or runtime
        page.on('pageerror', (err) => {
            errors.push(err.message);
        });

        page.on('console', (msg) => {
            if (msg.type() === 'error') {
                errors.push(msg.text());
            }
        });

        await page.goto('http://localhost:3001', { waitUntil: 'domcontentloaded' });

        // We expect the array of captured errors to be completely empty
        expect(errors).toEqual([]);
        console.log('✅ Zero Client-Side Runtime Errors Detected');
    });
});
