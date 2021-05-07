class RequestData {
  // with typescript we need to specify our fields here and their type
  method: string;
  uri: string;
  message: string;
  response: string;
  fulfilled: boolean;

  constructor(
    method: string,
    uri: string,
    message: string,
    response: string = '',
    fulfilled: boolean = false
  ) {
    this.method = method;
    this.uri = uri;
    this.message = message;
    this.response = response;
    this.fulfilled = fulfilled;
  }
}

const myData = new RequestData('GET', 'http://google.com', '');
console.log(myData);

class ReqData {
  // alternative syntax is instead of specifying the fields in the class to specify them in the constructor
  constructor(public method: string, public uri: string) {
    this.method = method;
    this.uri = uri;
  }
}

const moreData = new ReqData('POST', 'http://google.com');
console.log(moreData);
