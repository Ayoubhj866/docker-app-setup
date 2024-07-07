import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

export default defineConfig({
    server: {
        hmr: {
            host: 'myapp.com',
            port: 5173,
        }
    },
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
        // tailwindcss(),
    ],

});
