// import { JSEncrypt } from 'jsencrypt'


// const encryptMessage = () => {

//     const pub_key = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2SltMmGXqUh/GMPUlvtHMZmfCWsADRIq6TIXhvnoF/J4kN4F8weZYdAealuOOkDLQ1S9iwsFah4womI+2HGxXatJ8XgaCsYWGuNmUsaWOc+O/g0HDqVvUoYc/0L/Lvf5oKxI5YfE486b5cgVFQ2l67fuwZKx6CFtLpolzrRQ2fQ4WYs1XZul2W0vQPtKrTL7qJsFMLLvetBhK0nUfhJkXOFCFYUd3+TvLq1WFpI0TSXxW7NSHwzmCAstXRPHXTOYL6Jog/k6MnVeo+pkIAjaT4Wjh7zgsfmQpESk/BGWJEwwJjpVHh3tPgm1mC5QZ0VQD3RFx61/JkHjHxx4GM5onwIDAQAB'

//     const priv_key = 'MIIEpAIBAAKCAQEA2SltMmGXqUh/GMPUlvtHMZmfCWsADRIq6TIXhvnoF/J4kN4F8weZYdAealuOOkDLQ1S9iwsFah4womI+2HGxXatJ8XgaCsYWGuNmUsaWOc+O/g0HDqVvUoYc/0L/Lvf5oKxI5YfE486b5cgVFQ2l67fuwZKx6CFtLpolzrRQ2fQ4WYs1XZul2W0vQPtKrTL7qJsFMLLvetBhK0nUfhJkXOFCFYUd3+TvLq1WFpI0TSXxW7NSHwzmCAstXRPHXTOYL6Jog/k6MnVeo+pkIAjaT4Wjh7zgsfmQpESk/BGWJEwwJjpVHh3tPgm1mC5QZ0VQD3RFx61/JkHjHxx4GM5onwIDAQABAoIBAQCSVLDpLwvkHR7PkD3zUvUhPhQFY52QMTrLEl76K/GyGUgWzhUSM3+ugm/MWU9Yf4q4HyTtyYpnfFpnQW55qPrMVHyqArUBp4MDsVGk234lDHCdTigAPYfrAsYNV5bejmgeVZl1WWxZ2UIBrzZNjnnMgY+XzoKlGckZivOI+sY0Znd/5uTdr9DQfvUxxhvuYpNR04Kfv1PpdEdJFeYClEh1dpqC3bE02a7pUEDr0oW4UUM14Socc0LysmvzAFjPqhQ3qpvQ96dD+m73h2hkYHwGHTMG7bQqagNaLieXE/LRjfJibnc10VGWdiOhjf4bokagZrSpIz5h0cd4yAMhrDOBAoGBAPWTIcV/Bwi20XGfNzAKJFmgYWC/8ZbJ3x+EiNqwEvpHz6XsdoFHKoxfGUSOeH/lhya52boFzWZe7UlOCmQU+Go/7x/UWvbQpDxSqt2yaRJ2wYCUJdKFqF6X3mXtYqb2AAb8UICgl36kYLAA3NafKbPBkW3Y7XogOxMYobF96HLfAoGBAOJhgey7mnu1Qu1apyBv1QqwNHgFxzt7RGRuXB0fcwF4vdUT/tltRk2TmhuJaeuHchx5GFitG/SEJDwbQUWOIzE4CTKx2+I3Ja1o/AyAdY8aP1gyKgOI9R+i2dzHrFIKGkLFxYgPujnBns6aUUZXbg8yPoWvpRKBxgqWvvjMDIJBAoGARe29wiVn9V1JytcRugZJT5RR5mECBHQ7qxfseImG/eoRASiSnkGLpik2YsVHHvRXRfnKPCSG1s3VN/iXEOS/0FGgYCnyNTI4ck0ABt1U+kMC2wBUvNv+k+EfHVs5ql2GqHaU3evc990LA1Nbj2oHT/6g0OziwtIGwGtVL9uwo3UCgYAboy3aefjdO37lPVkEA8Mtn993+7ScFWt/G14RjCJdPqFmXx+Q6d9YXznEPN16jLmosjv/r3qnOm62C9nHJRg0zROKZd5jWro11ohW+mPfyaOMH+uzLMhISXhxlMr75RHZrw1zk//3RyUdMgfUH55nKoophg0QGlnUNx0vgLHSQQKBgQC8vCZpWpmBT1TO6RR2KUWEsDb4d+pSs2jCR3l6AwWXQwZfzrUP2g21gs5joQFcHnLlOSXsIHOnqpEpULSS78uWMgB7nlJ4XssUPtiCTPQ3XdkNv4kuaEElBVsKcc2ybgZR4/cMmn9GBfdNJNHmINjwmS7XIZkwSVhU8ASAhYfp/Q=='



//     const encrypt = new JSEncrypt()
//     encrypt.setPublicKey(pub_key)

//     let params = {
//       account: this.account.value,
//       password: this.password.value,
//       date: new Date(),
//       random:Math.random(5),
//     }
//     console.log(params)
//     let encryptedLoginData = encrypt.encrypt(JSON.stringify(params))
//     console.log('sendToServer', encryptedLoginData)

//     // now on Server
//     const decrypt = new JSEncrypt()
//     decrypt.setPrivateKey(priv_key)
//     let serverGetData = decrypt.decrypt(encryptedLoginData)
//     console.log('serverGetData',JSON.parse(serverGetData) )
//   }
// export default encryptMessage;
