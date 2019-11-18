import uuid from "uuid";

export default [
  {
    "id": uuid.v4(),
    "name": "iPhone XR, XS Max",
    "width": 414,
    "height": 896,
    "visible": true,
    'userAgent':'iPhone'
  },
  {
    "id": uuid.v4(),
    "name": "iPhone XS, X",
    "width": 375,
    "height": 812,
    "visible": true,
    'userAgent':'iPhone'
  },
  {
    "id": uuid.v4(),
    "name": "iPhone 8 Plus, 7 Plus, 6S Plus",
    "width": 414,
    "height": 736,
    "visible": false,
    'userAgent':'iPhone'
  },
  {
    "id": uuid.v4(),
    "name": "iPhone 8, 7, 6S, 6",
    "width": 375,
    "height": 667,
    "visible": false,
    'userAgent':'iPhone'
  },
  {
    "id": uuid.v4(),
    "name": "Galaxy S9 Plus, S8 Plus",
    "width": 412,
    "height": 846,
    "visible": true,
    "userAgent": "Samsung Phone"
  },
  {
    "id": uuid.v4(),
    "name": "Galaxy S9, Note 8, S8",
    "width": 360,
    "height": 740,
    "visible": true,
    "userAgent": "Samsung Phone"
  },
  {
    "id":uuid.v4(),
    "name": "Pixel 3, 3 XL",
    "width": 393,
    "height": 786,
    "visible": true,
    "userAgent": "Google Pixel"
  },
  {
    "id": uuid.v4(),
    "name": "Medium Screen",
    "width": 1024,
    "height": 800,
    "visible": true,
    userAgent: "Google Chrome"
  },
  {
    "id": uuid.v4(),
    "name": "Large Screen",
    "width": 1280,
    "height": 800,
    "visible": true,
    userAgent: "Google Chrome"
  },
]