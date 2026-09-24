# Google Search Console Setup

## 1. Add Property

1. Go to https://search.google.com/search-console
2. Sign in with your Google account (the one you use for Gmail/analytics)
3. Click "Add property" → "URL prefix"
4. Enter `https://ventriee.in`

## 2. Verify Ownership

Choose **HTML tag** method:

- Copy the meta tag string (looks like `google-site-verification=abc123...`)
- Set it as `NEXT_PUBLIC_GSC_VERIFICATION` in Vercel env vars
- Deploy → GSC will detect it automatically

## 3. Submit Sitemap

1. In GSC → Sitemaps tab
2. Enter `https://ventriee.in/sitemap.xml`
3. Click Submit
4. Check for errors after 24 hours

## 4. Next Steps

- **Monitor Indexing**: Check "Pages" tab weekly
- **Request Indexing**: After publishing each blog post
- **Google Analytics**: Set `NEXT_PUBLIC_GA_ID` in Vercel env vars (get ID from https://analytics.google.com)
