const Footer = () => {
  return (
    <div>
      <footer
        style={{
          paddingTop: "10rem",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            zIndex: "-1",
          }}
        >
          <div style={{ paddingTop: "1rem" }}>
            <img
              src="data:image/png;base64,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AQIECBAgQIAAAQIEricgoF/PzV4ECBAgQIAAAQIECBAgQGCrAgL6VjkNRoAAAQIECBAgQIAAAQIEricgoF/PzV4ECFQt4NWAq26vyREgQIAAAQIEChUQ0AttjLIIECBAgAABAgQIECBAoC0BAb2tfpstAQIECBAgQIAAgR0KuCpth9gOVYGAgF5BE02BAAECBAgQIECAAAECBKYvIKBPv4dmQIAAAQLNCHgkqplWmygBAgQINCkgoDfZdpMmQIAAAQIECBAgQIAAgdIEBPTSOqIeAgQIECBAgAABAgQIEGhSQEBfse0uKlwRymYECBAgQIAAAQIECBAgcC0BAf1abHYiQIAAAQIECBAgQIAAAQLbFRDQt+tpNAIECBAgQIAAAQIECBAgcC0BAf1abHYiQIAAAQIECBAgQIAAAQLbFRDQt+tpNAIECBAgQIAAAQIECBAgcC0BAf1abHYiQIAAAQIECBAgQIAAAQLbFRDQt+tpNAIECBAgQIAAAQIECBAgcC0BAf1abHYiQIAAAQIECBAgQIAAAQLbFRDQt+tpNAIECBAgQIAAAQIECBAgcC0BAf1abHYiQIAAAQIECBAgQKApgSE55aZmbLJ7EBDQ94DukAQIECBAgAABAgQIECBA4EUBAd2aIECAAAECBAgQIECAAAECBQgI6AU0QQkECBAgQIAAAQIECBAgQEBAtwYIECBAgAABAgQIECBAgEABAgJ6AU1QAgECBAgQIECAAAECBAgQENCtAQIECBAgQIAAAQIECBAgUICAgF5AE5RAgAABAgQIECBAgAABAgQEdGuAAAECBAgQIECAAAECBAgUICCgF9AEJRAgQIAAAQIECBAgQIAAAQHdGiBAgAABAgQIECBAgAABAgUICOgFNEEJBNYWGP7n5rX3sgMBAgQIECBAgAABAgULCOgFN0dpBAgQIECAAAECBAgQINCOgIDeTq/NlAABAgQIECBAgAABAgQKFhDQC26O0ggQIECAAAECBAgQIECgHQEBvZ1emykBAgQIECBAgAABAgQIFCwgoBfcHKURIECAAAECBAgQIECAQDsCAno7vZ7uTL1i+XR7p3ICBAgQIECAAAECBFYWENBXprIhAQIECBAgQIAAAQIEpiDgEa4pdOllNQroU+1c8XX7oVB8ixRIgMBqAn6creZkqwkJWNQTapZSCRBoTEBAb6zhpkuAAAECBAgQIECAAAECZQoI6GX2RVUECBAgQIAAAQIECBAg8IJA7dcACeiWPAECBAgQIECAAAECBAgQKEBAQC+gCUogQIAAAQIECBAgQIAAAQICujVAgAABAgQIECBAgAABAgQKEBDQC2iCEggQIECAAAECBAgQIECAgIBuDRAgQIAAAQIECBAgQIAAgQIEBPQCmqAEAgQKF6j95UIL51ceAQIECBAgQKAVAQG9lU6bJwECBAgQIECAAAECBAgULSCgF90exREgQIBAMQKupCimFQohQIAAAQK1CgjotXbWvBoVkCAabbxpEyBAgAABAgQIVCAgoFfQRFMgUJ+AEw319dSMCBAgQIAAAQIErhIQ0K8S8n0CBAgQIECAAIHiBZzaLb5FCiRAYAUBAX0FJJsQIECAAAECBAgQIECAAIGxBQT0sYWNT4AAAQIECBAgQIAAAQIEVhAQ0FdAsgmBkgRcwrebbnDejbOjECBAgAABAgT2JVDi33sC+r5Wg+MSIEBgGwIl/mbZxryMQYAAAQIECBBoUEBAb7DppkyAQBkCsnUZfVAFAQIECBAgQKAUAQG9lE6ogwABAgQIECCwYwEnCncM7nAECBC4QkBAt0QIECBAgAABAgQIECBAgEABAgJ6AU1QAgECBAgQIECAAIHdCbh2YnfWjkRgPQEBfT0vWxMgQGA1AX/7rOZkKwIECBAgQIAAgQsBAd1iIECAAAECBAgQIECAAAECBQgI6AU0QQkECBAgQIDACgKuTFkBySYECBAgMGUBAX3K3VM7AQIECBAgQIAAAQIECFQjIKBX00oTIUCAAAECBAgQIECAAIEpCwjoU+6e2gkQIECAAAECBAgQIECgGgEBvZpWmggBAgQIECBAgAABAgQITFlAQJ9y99Ren4AXQKqvp2ZEgAABAgQIECBAYEUBAX1FKJsR2KmAoL5TbgcjQIAAAQIECBAgUIKAgF5CF9RAgAABAgQIECBAgAABAs0LCOjNLwEABAgQIECAAAECBAgQIFCCgIBeQhfUQIAAAQIECBAgQIAAAQLNCwjozS8BAAQIECBAgAABAgQIECBQgoCAXkIX1ECAAAECBAhMQMAreE6gSUrcloDlvi1J4xBYS0BAX4vLxgQIECBAgACB/QnITPuzd2QCBAjsQkBA34WyYxAgQIAAAQIECBAgsBcBJ7b2wu6g1xQQ0K8JZzcCBAgQIECAAAECBAgQILBNAQF9m5rGIkCAAAECBAgQIECAAAEC1xQQ0K8JZzcCBAgQIECAAAECBAgQILBNAQH9Kk1PWrlKyPcJEGhKwA/FptptsgQIECBAgMBOBQT0nXI7GAECBAgQIECAAAECBAgQeLmAgG5lECBAgAABAgQIECBAgACBAgQE9AKaoAQCBAgQIECAAAECBAgQICCgWwMECBAgQIAAAQIVC3jtjIqba2oEqhMQ0KtrqQkRILCRgL/jNuKzMwECBAgQIECAwPUFBPTr29mTAAECBAgQIECAAAECBAhsTUBA3xqlgQgQIECAAAECBAgQIECAwPUFBPTr29mTAAECBAgQIECAAAECBAhsTUBA3xqlgQgQIECAAAECBAgQIECAwPUFBPTr29mTAAECBAgQIECAAAECBAhsTUBA3xqlgQgQIECAAAECBAgQIECAwPUFBPTr29mTAAECBAgQIECAAAECBAoTmPJdcwX0whaTcggQIECAAAECBAgQIECgTQEBvc2+mzUBAgQIECBAgAABAgQIFCYgoBfWEOUQIECAAAECBAgQIECAQJsCAnqbfTdrAgQIECBAgAABAgQIEChMQEAvrCHKIUCAAAECBAi0JDDlF3NqqU/mSoDAbgQE9N04OwoBAgQuBPwxajEQIECAAAEC0xPwF8wueiag70K5oWP4b9tQs02VAAECBAgQIECAAIGtCgjoW+U0GAECBAgQIFCjgBPQNXbVnAgQIFCegIBeXk9URKBMAX+dltkXVREgQIAAAQIECFQjIKBX00oTIUCAAAECBAgQIECAAIEpCwjoU+6e2gkQIECAAAECBAgQIECgGgEBvZpWmggBAgSuI+C5C9dRsw8BAgQIECCwH4Ha/3IR0PezrhyVAAECBAg0IVD7H1JNNNEkCRAgQGBnAgL6zqgdiAABAgQIEPgqAWHe+iBAgACB1gUE9NZXgPkTIECAAAECBAgQIECAQBECAnoRbVAEAQIECBAgQIAAAQIECLQuIKC3vgLMnwABAgQIECBQi4DnSdTSSfMg0KyAgN5s602cAAECBAgQIECAAAECBEoSENBL6oZaCBAgQIAAAQIECBAgQKBZAQG92dabOAECBAgQIECAAAECBAiUJCCgl9QNtRAgQIAAAQIECBAgQIBAswICerOtf/XEvb6KRUGAAAECBAgQIECAAIHdCwjouzd3RAIECBAgQIAAAQIECBAg8CUBAd2i2J6Ah963Z2kkAgQIECBAgAABAgSaExDQm2u5CRMgQIAAgRcEnGC1JAgQIECAQBECAnoRbVAEAQIECBAgQIAAAQIECLQuIKC3vgLMnwABAgQIECBAgAABAgSKEBDQi2iDIggQIECAAAECBAgQIECgdQEBvfUVYP4ECBAgQIAAAQIECBAgUISAgF5EGxRBgAABAgQIECBAgAABAq0LCOitrwDzJ0CAAAECBAgQIECAAIEiBAT0ItqgCAIECBAgQIAAAQIECBBoXUBAb30FmD8BAgQIECBAgAABAgQIFCEgoBfRBkUQIECAAAECBAgQIECAQOsCAnrrK8D8CRAgQIAAAQIECBAgQKAIAQG9iDYoggABAgQIECBAgAABAgRaFxDQW18B5k+AAAECBAgQIECAAAECRQgI6EW0QRHXEhhWb77WnnYiQIAAAQIECBAgQIBAcQICenEtURABAgQIECBAgAABAgQItCggoLfYdXMmQIAAAQIECBAgQIAAgeIEBPTiWqIgAgQIECBAgAABAgQIEGhRQEBvsevmTOBFAc/ntyYIECBAgAABAgQI7F1AQN97CxRAgAABAgQIECBAgAABAgQiBHSrgAABAgQIECBAgAABAgQIFCAgoBfQBCUQIECAwDQEPBtkGn1SJQECBAgQmKqAgD7VzqmbAAECBAgQIECAAAECBKoSENCraqfJECBAgAABAgQIECBAgMBUBQT0qXZO3QQIECBAgAABAgQIECBQlYCAXlU7TYYAAQIECBAgQIAAAQIEpiogoE+1c+omQIAAAQIECBAgQIAAgaoEBPSq2mkyBAiUL+B1wMvvkQoJECCwvoCf7uub2YPA+ALT+58poI+/KhyBAAECBAgQ2JXA9P4W25WM4xAgQIDABAQE9Ak0SYkECBAgQIAAAQIECBAgUL+AgF5/j82QAAECBAgQIECAAAECBCYgIKBPoEkXJbpsb0rdUisBAgQIECBAgAABAgTWEhDQ1+KyMQECBAhUI+CkZzWtNBECBAgQIFCLwBoB3V8ytTTdPAgQIECAAAECBAgQIECgPIE1Anp5xauIAAECBAgQIECAAAECBAjUIiCg19JJ8yBAgAABAgQIECBAgACBSQsI6JNun+IJECBAgAABAgQIECBAoBYBAb2WTpoH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IECAAAECBAg0LOBlHhpuvqkTGEdAQB/H1agECBCoQMBfnhU00RQIECBAgACBCQkI6BNqVvGl+lu++BZNrUBLamodUy8BAgQIXEfA77vrqNmHQJ0CAnqdfTUrAgQIECBAgAABAgQIEJiYgIA+sYYplwABAgQIECDQmoBHmFvruPkSaFdAQG+392ZOgAABAgQIECBAgAABAgUJCOgFNUMpBAgQIECAAAECBAgQINCugIDebu/NnAABAgQIECBAgAABAgQKEhDQC2qGUggQIECAAAECBAgQIECgXQEBvd3emzkBAgQIECBAgAABAgQIFCQgoBfUDKUQIECAAAECBAgQIECAQLsCAnpVvXcTkqraaTIECBAgQIAAAQIECDQlIKA31W6TJUCAAAECJQs40Vxyd9RGgAABAuMLCOjjGzsCAQIECBAgQIAAAQIECBC4UkBAv5LIBgQIECBAgAABAgQIECBAYHwBAX18Y0cgQIAAAQIECBAgQIAAAQJXCgjoVxLZgAABAgQIECBAgAABAgQIjC8goI9v7AgECBAgQIAAAQIECBAgQOBKAQH9SiIbECBAgAABAgQIECBAgACB8QUE9PGNHYEAAQIECBAgQIAAAQIECFwpIKBfSWQDAgQIECBAgAABAgQIECAwvoCAPr6xIxAgQIAAAQIEChUY/hTMhdamLAIECLQnIKC313MzJkCAAAECBAgQIECAAIECBQT0ApuiJAIECBAgQIAAAQIECBBoT0BAb6/nZkyAAAECBAgQIECAAAECBQoI6AU2RUkECBAgQIAAAQIECBAgsKHABF9mQ0DfsOd2J0CAAAECBAgQIECAAAEC2xAQ0LehaAwCBAgQIECAAAECBAgQILChgIC+IaDdCRAgQIAAAQIECBAgQKBOgV1fJS+g17mOzIoAAQIECBAgQIAAAQIEJiYgoE+sYcolQIAAAQIECBAgQIAAgToFBPQ6+2pWBAgQIECAAAECBAgQIDAxAQF9Yg1TLgECBAgQIECAAAECBAjUKSCg19lXsyJAgAABAgQIECBAgACBiQkI6BNrmHIJECBAgAABAgQIECBAoE4BAb3OvpoVAQIECBAgQIAAAQIECExMQECfWMOUS6ANgV3fcbINVbMkQIAAAQIECBAoW0BAL7s/qiNAgAABAgQIECBAgACBRgQE9EYabZoECBAgQIAAAQIECBAgULaAgF52f7ZXnSuGt2dpJAIECBAgQIAAAQIECIwgIKCPgGpIAgQIECBAgAABAgQIECCwroCAvq6Y7QkQIECAAAECBAgQIECAwAgCAvoIqIYkQIAAAQIECBAgQIAAAQLrCgjo64rZngABAgQIECBAgAABAgQIjCAgoI+AakgCBAgQIECAAAECBAgQILCugIC+rpjtCRAgQIAAAQIECBD4SgE3ELJACFxPQEC/npu9CBAgQIAAAQIECBAgQGBlAadtVqES0FdRsg0BAgQIECBAgAABAgQIEBhZQEAfGdjwBAgQIECAAAECBAgQIEBgFQEBfRUl2xAgQIAAAQIECBAgQIAAgZEFBPSRgQ1PgAABAgQIECBAgAABAgRWERDQV1GyDQECBAgQIECAAAECBAgQGFlAQB8Z2PAECBAgQIAAAQIECBAgQGAVAQF9FSXbECBAgAABAgQIECBAgACBkQUE9JGBDU+AAAECBAgQIECAAAECBFYRENBXUbINAQIECBAgQIAAAQIECBAYWUBAHxnY8AQIECBAgAABAgQIECBAYBUBAX0VJdsQIECAAAECBAgQIECAAIGRBQT0kYENT4AAAQIECBAgQIAAAQIEVhEQ0FdRsg0BAgQIECBAgAABAgQ2FBjCV95wDLvXLSCg191fsyNAgAABAgQIECBAgACBiQgI6BNplDIJECBAgMBSwOMvVgIBAgQIEKhVQECvtbPmRYAAAQIECBAgQIAAAQKTEhDQJ9UuxVYn4IGw6lpqQgQIEGhCwO+vJtpskgQI7F5AQN+9uSMSIECAAAECBAgQIECAAIEvCQjoFgUBAgQIECBAgAABAgQIEChAQEAvoAlKIECAAAECBAgQIECAAAECAro1QIAAAQIECBAgQIAAAQIEChAQ0AtoghIIECBAgAABAgQIECBAgICAbg0QIECAAAECBAgQIECAAIECBAT0ApqgBAIECBAgQIAAAQIECBAgIKBbAwQIECBAgAABAgQIECBAoAABAb2AJiiBAAECBAgQIECAAAECBAgI6NYAAQIECBAgQIAAAQIECBAoQEBAL6AJSiBAgAABAgQIECBAgAABAgK6NUCAAAECBAgQIECAAAECZQkMSTWXVdIuqhHQd6HsGAQIECBAgAABAgQIECBA4AoBAd0SIUCAAAECBAgQIECAAAECBQgI6AU0QQkECBAgQIAAAQIECBAgQEBAtwYIECBAgAABAgQIECBAgEABAgJ6AU1QAgECBAgQIECAAAECBAgQENCtAQIEtiiwhZfb3MIQW5yQoQgQIECAAAECBAjsTEBA3xm1AxEgQIAAAQIECBAgQIAAgVcLCOhWBwECBAgQIECAAAECBAgQKEBAQC+gCUogQGBaAq7Cn1a/VEuAAAECBAgQmIqAgD6VTqmTAAECBAgQIECAAAECBKoWENCrbq/JESBAgAABAgQIECBAgMBUBAT0qXRKnQQIECBAgAABAgQIECBQtYCAXnV7TY4AAQIECBAgQIAAAQIEpiIgoE+lU+okQIAAAQIECBAgQIAAgaoFBPSq22tyBAgQIECAAAECBAgQIDAVAQF9Kp1SJwECBAgQIECAAAECBPYq4GazY/ML6GMLG58AAQIECBAgQIAAAQIECKwgIKCvgGQTAgQIECBAgAABAgQIECAwtoCAPraw8QkQIECAAAECBAgQIECAwAoCAvoKSDYhQIAAAQIECBAgQIAAAQJjCwjoYwsbnwABAgQIECBAgAABAgQIrCBQWED3qoAr9MwmBAgQIECAAAECBAgQIFChQGEBvUJhUyJAgAABAgQIECBAYC8CHv7bC7uDbiAgoG+AZ1cCBAgQIECAAAECBAgQILAtAQF9W5LGIUCAAAECBAgQIECAwAQEXFlQbpME9HJ7ozICBAgQIECAAAECBAgQaEhAQG+o2aZKgAABAgQIECBAgAABAuUKCOjl9kZlBAgQIECAAAECBAgQINCQgIDeULNNlQABAgQIECBAgAABAgTKFRDQy+2NyggQIECAAAECBAgQIECgIQEBvaFmmyoBAgQIECBAgAABAgQIlCsgoJfbG5URIECAwF4E3HxmL+wOSoAAAQIECISAbhEQIECAAAECBAgQIECAAIECBAT0ApqgBAIECBAgQIAAAQIECBAgIKBbAwQIECBAgAABAgQIECBAoAABAb2AJiiBAAECBAgQIECAAAECBAgI6NYAAQJFCHhZriLaoAgCRQr4+VBkWxRFgAABAiMICOgjoFY5pL+OqmyrSREgQIAAAQIECBAgUI6AgF5OL1QysoBzDCMDG54AAQIECBAgQIAAgY0EBPSN+OxMgAABAgQIECBAgAABAgS2IyCgb8fRKARWFvBI/spUNiRAgAABAgQIECDQlICA3lS7TZYAAQIE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"
              alt="footer"
              style={{ width: "100%", display: "block" }}
            />
          </div>
        </div>
        <style>
  {`
    .link {
    

    .link:hover {
      color: #ff6b6b;
    }
  `}
</style>

        <div
          style={{
            padding: "0.57rem",
            textAlign: "center",
            position: "relative",
            fontFamily: "lucida sans unicode", // Specify the web-safe font family
            color: "#8B4513",
          }}
        >
          Designed & Built by
				
					<a href="https://github.com/successfulfadwa"  style={{ color: "#BF2020", textDecoration: "none" }}    className="link" // Apply the "link" class to the link element
>  Fadwa Aljaoui</a> 
        </div>
        {/* Footer content */}
      </footer>
    </div>
  );
};
export default Footer;
