class RequestData {
  method: string;
  uri: string;
  version: string;
  message: string;
  response: string;
  fulfilled: boolean;

  constructor(
    method: string,
    uri: string,
    version: string,
    message: string,
    response: string = '',
    fulfilled: boolean = false
  ) {
    this.method = method;
    this.uri = uri;
    this.version = version;
    this.message = message;
    this.response = response;
    this.fulfilled = fulfilled;
  }
}

const myData = new RequestData('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);
