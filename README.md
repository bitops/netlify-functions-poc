## Simple Netlify Function

Invoke with:

```
SUBDOMAIN="your-site-here"
curl -X POST -d '' "https://$SUBDOMAIN.netlify.app/.netlify/functions/echo"
```

Response:

```
{"message":"post received"}
```
