# Sample Snack app

Open the `App.js` file to start writing some code. You can preview the changes directly on your phone or tablet by scanning the **QR code** or use the iOS or Android emulators. When you're done, click **Save** and share the link!

When you're ready to see everything that Expo provides (or if you want to use your own editor) you can **Download** your project and use it with [expo cli](https://docs.expo.dev/get-started/installation/#expo-cli)).

All projects created in Snack are publicly available, so you can easily share the link to this project via link, or embed it on a web page with the `<>` button.

If you're having problems, you can tweet to us [@expo](https://twitter.com/expo) or ask in our [forums](https://forums.expo.dev/c/expo-dev-tools/61) or [Discord](https://chat.expo.dev/).

Snack is Open Source. You can find the code on the [GitHub repo](https://github.com/expo/snack).

SIGN-UP API:
Request:
{
  "name": "Caleb",
  "email": "caleb@gmail.com",
  "password": "12345678",
  "mobile": "2348105651726"
}
Response:
{
  "user": {
    "name": "Caleb",
    "email": "caleb@gmail.com",
    "phone": "2348105651726"
  }
}

Login API:

response:
{
  "data":{
        "profile":{"id":"6634b5a79523f8b4f7581217","name":"Caleb","email":"caleb@gmail.com","role":"patient","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjM0YjVhNzk1MjNmOGI0Zjc1ODEyMTciLCJyb2xlIjoicGF0aWVudCIsImlhdCI6MTcxNDc0NjIyMn0.lG2UO5TZJqfrWnwdpk6vAE_7ngZbgZ9U2kceEI1G5dc"}
       },
  "status":200,
  "headers":{"access-control-allow-origin":"*","connection":"Keep-Alive","content-length":"290","content-type":"application/json; charset=utf-8","date":"Fri, 03 May 2024 14:23:42 GMT","etag":"W/\"122-oSp43Y3Qr7VPWju5/XKMjRvFdqg\"","keep-alive":"timeout=5, max=100","server":"Apache/2.4.52 (Ubuntu)","x-powered-by":"Express"},"config":{"transitional":{"silentJSONParsing":true,"forcedJSONParsing":true,"clarifyTimeoutError":false},"adapter":["xhr","http"],"transformRequest":[null],"transformResponse":[null],"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"maxBodyLength":-1,"env":{},"headers":{"Accept":"application/json, text/plain, */*","Content-Type":"application/json"},"baseURL":"http://52.201.214.200/","withCredentials":true,"method":"post","url":"/auth/sign-in","data":"{\"email\":\"caleb@gmail.com\",\"password\":\"12345678\"}"},
  
  "request":{"UNSENT":0,"OPENED":1,"HEADERS_RECEIVED":2,"LOADING":3,"DONE":4,"readyState":4,"status":200,"timeout":0,"withCredentials":true,"upload":{},"_aborted":false,"_hasError":false,"_method":"POST","_perfKey":"network_XMLHttpRequest_http://52.201.214.200/auth/sign-in","_response":"{\"profile\":{\"id\":\"6634b5a79523f8b4f7581217\",\"name\":\"Caleb\",\"email\":\"caleb@gmail.com\",\"role\":\"patient\",\"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjM0YjVhNzk1MjNmOGI0Zjc1ODEyMTciLCJyb2xlIjoicGF0aWVudCIsImlhdCI6MTcxNDc0NjIyMn0.lG2UO5TZJqfrWnwdpk6vAE_7ngZbgZ9U2kceEI1G5dc\"}}",
  
  "_url":"http://52.201.214.200/auth/sign-in",
  "_timedOut":false,
  "_trackingName":"unknown",
  "_incrementalEvents":false,
  "_performanceLogger":{"_timespans":{"network_XMLHttpRequest_http://52.201.214.200/auth/sign-in":{"startTime":100275493.372528,"endTime":100276423.5381,"totalTime":930.1655720025301}},"_extras":{},"_points":{"initializeCore_start":100250405.06311,"initializeCore_end":100250708.592121},"_pointExtras":{},"_closed":false,"_isGlobalLogger":true},"responseHeaders":{"Access-Control-Allow-Origin":"*","Content-Length":"290","ETag":"W/\"122-oSp43Y3Qr7VPWju5/XKMjRvFdqg\"","Date":"Fri, 03 May 2024 14:23:42 GMT","X-Powered-By":"Express","Content-Type":"application/json; charset=utf-8","Connection":"Keep-Alive","Server":"Apache/2.4.52 (Ubuntu)","Keep-Alive":"timeout=5, max=100"},"_requestId":null,"_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json"},"_responseType":"","_sent":true,"_lowerCaseResponseHeaders":{"access-control-allow-origin":"*","content-length":"290","etag":"W/\"122-oSp43Y3Qr7VPWju5/XKMjRvFdqg\"","date":"Fri, 03 May 2024 14:23:42 GMT","x-powered-by":"Express","content-type":"application/json; charset=utf-8","connection":"Keep-Alive","server":"Apache/2.4.52 (Ubuntu)","keep-alive":"timeout=5, max=100"},"_subscriptions":[],"responseURL":"http://52.201.214.200/auth/sign-in"}}

