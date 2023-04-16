const Side = () => {
  return (
    <div>
      {/* JSX content */}

      <div className="left and right">
        <div
          className="right "
          style={{
            backgroundColor: "rgb(251,137,72)",
            background:
              "linear-gradient(180deg, rgba(251,137,72,1) 0%, rgba(180,104,61,0.22454919467787116) 100%)",
            width: "2px",
            position: "fixed",
            top: 580,
            bottom: 0,
            right: 50,
          }}
        >
          <div
            style={{
              backgroundColor: "rgb(251,137,72)",
              background:
                "linear-gradient(0deg, rgba(251,137,72,1) 0%, rgba(180,104,61,0.22454919467787116) 100%)",
              width: "2px",
              position: "fixed",
              top: 100,
              bottom: 500,
              right: 50,
            }}
          ></div>
          <div
            style={{
              transform: "rotate(-90deg)",
              transformOrigin: "top left",
              position: "absolute",
              top: -16,
              left: -13,
              textAlign: "center",
            }}
          >
            <span style={{ position: "relative", color: "#f5773d" }}>
              Adopt.Me@gmail.com
              <style>
                {`
        span:hover {
          color: #D66712 !important;
          animation: glowing2 2s infinite; /* Add animation with desired duration */


        }
        span:hover::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -0.5rem;
          width: 100%;
          height: 1px;
          background-color: #f78b4e;
        }

        @keyframes glowing2 {
			0% {
				filter: drop-shadow(0 0 5px rgba(255, 87, 34, 0.8)) drop-shadow(0 0 10px rgba(255, 87, 34, 0.8)) drop-shadow(0 0 15px rgba(255, 87, 34, 0.8)) drop-shadow(0 0 20px rgba(255, 87, 34, 0.8));
			  }
			  50% {
				filter: drop-shadow(0 0 10px rgba(216, 67, 21, 0.8)) drop-shadow(0 0 20px rgba(216, 67, 21, 0.8)) drop-shadow(0 0 30px rgba(216, 67, 21, 0.8)) drop-shadow(0 0 40px rgba(216, 67, 21, 0.8));
			  }
			  100% {
				filter: drop-shadow(0 0 12.5px rgba(255, 87, 34, 0.8)) drop-shadow(0 0 50px rgba(255, 87, 34, 0.8)) drop-shadow(0 0 15px rgba(255, 87, 34, 0.8)) drop-shadow(0 0 20px rgba(255, 87, 34, 0.8));
			  }
        
        }
      `}
              </style>
            </span>
          </div>
        </div>

        <div
          className="left "
          style={{
            background:
              "linear-gradient(180deg, rgba(251,137,72,1) 0%, rgba(180,104,61,0.22454919467787116) 100%)",
            width: "2px",
            position: "fixed",
            top: 570,
            bottom: 0,
            left: 50,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -130,
              left: -8,
            }}
          >
            <div
              style={{
                writingMode: "vertical-rl",
                textOrientation: "upright",
                textAlign: "center",
              }}
            >
              <a href="https://www.linkedin.com/in/fadwa-aljaoui-5846b523b/"  target="_blank" rel="noopener noreferrer">

              <img
                className="glow-img"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAAAAAAAAPlDu38AAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQfnBBAKAQfo5FHxAAAEGElEQVRIx7VTfUzVZRR+zu/3u1cuFwLuqMWHEExwkVMMJbJ7udcZMNyEudYfxDc2qaWWhBdGflRiAyxLsdlKFLyL1Gg05leG4/JhKej6QikapiBMN+Mi/rgEF97TH3nJaG20wfPPu7PnnOd9znnfQ7gPZ2RRh/H0wYP8JfxhzMlBKD6i1bKM2cINvMSnJicRyndopKpKr69Y3vpofr40ai2yPvN1SAh/Apm+ysqSnldOUVdYmMtFxGwwuE+cRiIfGxujHEqm92Jjp/NKiFhI8yIj3fdNfiB1aMP8/d28VI0DfCE8HJdIRllurrPb2m3m4GBFNHOQZF65Eo/AC0fb23VXdr3SGtvXB99/NjBSV5RgBDBRLtZPJg8P+/pWdJ//3eFw82pGYcaKxRoNAUGyD+Bdoj137ojDQfQWAUIAABIcjpH4okWmpsuXRTApIs5ikSiEKrHMYiG7tI7q7PZZG/l/gL7DFXbY7VIyIvhNi0ViE55AbHy82Cu2ktzcPNcG+DiXUpXdzs/hNfiZzRJ8cAMtgYH8KW5x1s2b/yoQOzjquFaLKITDW1FkI32Bqx4e0/PkHLZwtU73wKNlJvzwYHxfb4kSI53o78d8bKaqoCAJ6XQXaY2NcgSN8NM5OdMLnAWjrQZderp7K+gNbpWXpaVNzxPnFSHr09Pd8ehD8tDY2oyM6XlSxsRuEZeVRW9zOG9oaiK1zFpgCl+1ijaSBkGNjbiEfYi5eJFOoh1XVZX1+JYr4+LwE3pIKS2lYWzCiS1bOJFH8GNXF/nRq3jW5cIFLOaIpUtZwzLtKS+HF+2FvaSEvBHJv7S3czx+pm16Pbx4AGcDA8VJNFBiUpIiuWDA9nv3sB4F2Dg0JNZxPWorK+k37ORtPj5SGD3GvXl5urryiraE3l41o7B/xeJDhyhVbpNqU1PxJBZJKZLESaJH6klL09ftrmuuvXXrrzWz2fAiVU2qa9ZgATfT4fHxiVBX53hnfb3P9vezL8wfHIRzp7XUVB0b6wwqajG9c/v2XH/CkXeLHzf65+Wx2MFm9vJSZlqoTlgzjXsyM2mQ9tGdmhroUYZWor+VUQwTMxt4E/tnZ3spFba2Apttug59zA/TkrKy0dHRXaKms3PGBiiKVEQHBBBQjYgzZ6S1RNyyYcPUJ6znanp5/36AVPwaEDBT3RkbcINTOB/dqupRXu7Z1nbt2tQACq1OU7eqooFaQDPXk/6vgdmGAhuOiNeFwHJcl4wazd3PN38T12cwcNS8BiWNeSpzXGzBWZ0OA5SKw1rt0NbiYqPRz2+Kv86peEGrhZWPIlenG9IWL3yQp6tjKROfEeFDRCNKo4EN0eJ7IYh5B8fEeHo6nX885bm6pQXASthjYuas5QEc4wMdHZ4LxmsnfMzmPwF8qb2C1W+FhQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wNC0xNlQxMDowMTowNyswMDowML/R0DEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDQtMTZUMTA6MDE6MDcrMDA6MDDOjGiNAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTA0LTE2VDEwOjAxOjA3KzAwOjAwmZlJUgAAAABJRU5ErkJggg=="
                alt="tiktok"
                style={{ width: "20px", height: "20px", margin: "0 2px 20px" }}
              ></img>

              <img
                className="glow-img"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAAAAAAAAPlDu38AAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQfnBBAJLRBQQAHBAAAC30lEQVRIx72TXUiTYRTH/2f5lROkD0WoLkochWlZBml7XRthQqYYShG76KKgIPoy33ctLZZUW8qSvkioEDUw6aIuAkltzK2ytDIwSOkmZAVFRbnNmvKcLmoL1OFS6393OM9zzo//OQeYofzVphSpobHR51MUSWL2fVC+SGYhmE+yjuPipvqvminABKlhhYvo+8ofN0VPcfH/B/gtYeBU5FdXDz8/9l47nJT03wFgxR1kpKWpLggd7XG7/T6Tot1QVvb10eFH64fmzw8+i/pnAEFdRgk8Gg2DQarW1qhVMXejdwIsTrKOo6Nn34FebMfa0VFysQGBmhp0oQdHAoFwz8MCjKQr6dLT3FxfqTyoHW5p8e1SNNKOgQH/BcUobWxqCgvgx1HomOMLzm12PZFl6o3i0exlyygFr8izdy8KYeaGujoQ4CQhJozAp1FKtA9kWThwA3esVqjJSuVEAEoAABYYMXdoCEDzpADxqIWTCMAaAIivOu3oXuLx/ErW18OBRKQCoHEOjMiKvKFdq8V9LKTA2bPBc4IPJkjMcCAdp7q7sZtjeV5f32xNLOQA92C1qrKyEkl4iRiVCh/xGceFwFtY0VZUpC602Vz6e/cmVEjkTWggCsVqnPntQET6swOZvA27c3KCIV3BAdgdDrXOZnPVTdI4nOJRw13TAGCJHvKW2NhQfIaKkDMyMmWFTjRzY3JyCPw8rmLA6/17Bz6hjzKePQvF7bwUq/PzvZmyRjdHrx//MXglXIVSKjYYQol5MJK5tzdSgNAOUBp14JrdzuBM2HNzkYd1sMfEkI0gbre1+Q8q+6Tszk5+jBfwjo2JfhxCfUEBVuAWEqL+7NJylZ6E3R4pwIRZ+QflQe322lpeRNfpXXn5lBWCVwIWLCwWdfK5BW6rxTJtgKC8RpOUl2gwqF6LVj5RUYE3tIlTs7JQhkIsjotjM13CN6eT+7EfVRcvJmy12twPOzoibRzUTwzOGNWMfybjAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTA0LTE2VDA5OjQ1OjE2KzAwOjAwdqTjfQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0wNC0xNlQwOTo0NToxNiswMDowMAf5W8EAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjMtMDQtMTZUMDk6NDU6MTYrMDA6MDBQ7HoeAAAAAElFTkSuQmCC"
                alt="tiktok"
                style={{ width: "20px", height: "20px", margin: "0 2px 20px" }}
              ></img>
              <img
                className="glow-img"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAAAAAAAAPlDu38AAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQfnBBAJAhvVjuAkAAADtUlEQVRIx72VUUxbZRTHz7ntKKuUNaDRIcy4xS5G1JlopbZXIo4YV3xiHRQjzQwEFw0bc+sF62BdglkpUDAajeGla9KJjGzLNh+MwgptqfVh6mAud8Fs0jES0zUFekeh3OMLlwfiDQwT/48n3/f9/ud85zsfwoqS4aZwyVRentKremvLvbY2OEEPQKisRDfNwy2NBu7gR3B5eRk2qqfoC6hQKOgQfk77ZmfhU+iFzsHBpT58D35xOrXa06eDwURiFSwctC+x5okJ4Wfuiinsdgs6u86YX1CwYaCMpHME3s6bqjo7BQvnZr8cH0/QYSolrRZTDc0aNtrbi+/Tt5RZXFS/6jIHXzt+/D+DNVzF6zsbGugq+Sjb4aAXoZHqHA7cgXYs3rMHdsMO2sUwSqnUUEZNVKnXbzQj+JrZxfQZDDAlVmOACNqhfdkXiaj5Dj4Un54mCzxKd2pqcJwpo8mREbRSLSqsVjikbFyC+nqyZN5WMpEIg074mHJycqSNa4EktlEpKZWpN7ikadLjoSH8kxmMRslPB2nmwAEaxa3i7qoqKZ563r7Emru7GS/zF042N0MdtaJXEGge9opZLS3qE+3DkaK7d7EL4nBPowHhXU5gNYmEXMYSOBXg5tgj58/Hr7SR/lZu7tp19+Ocfe+b27alfuXK2ccvXEgVcNfZH7q6ZCu5wmXWLbUP8nHKYlmYz85Jf2iz5ZudGH1mdnbt+rx8V8ePPyWT6SJ4SVVss8EERCFQXZ0KfHKbPbJ9uxxH1sDqHZ8EP/0RCsmB5YxAO1mhLBTC25kAgsHw8Ab+J8kb+ECcFOvGxuAk1OCzRqN0x+sdKL1vcOBZGDIa6RJdQk84/NAGVl+FHq7BYn+/agqupce9XjkjUjzrfrZNvHnmDPLwBJn9/kfOuc8FcGZGjqMENThpGBEAAF7+FyOx7GKmnOOEwoVu0edyqSYgmg7cuJGq474z7Q8GQUsVqEMEBs6mh4xG5KGUEn7/1ley9ykMLS2ypVrhYirGKdmrsRiW0U6xUq+XmweSpK7GEbGE+kpKpDj9tmxSzI2NrZexwNv5UiospDl4THwuHMbUfu5JU1NPD35GwzCdyah1Hbpg/7Fj63bPJiUNKojjTThMpJR+p6x6uIjW0VGBt/MmAID+LQ2ZTo9HmlybBa5mXAlPixVHj2IR/E215eXp3xeKFeUsi9JCqXuzXlBlxIrWVhhAD31jseBX1Ijf5+Zu+juuhQfgSSbhHYxBz8BA+jr4VK5Tp6R58Q/4m/lz6aNPegAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wNC0xNlQwOTowMjoyNyswMDowMAxZh9EAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDQtMTZUMDk6MDI6MjcrMDA6MDB9BD9tAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTA0LTE2VDA5OjAyOjI3KzAwOjAwKhEesgAAAABJRU5ErkJggg=="
                alt="instagram"
                style={{ width: "20px", height: "20px", margin: "0  2px 20px" }}
              ></img></a>{" "}
              <style>
                {`
   
   .glow-img:hover {
    color: #D66712 !important;
    animation: glowing 2s infinite; /* Add animation with desired duration */
    filter: drop-shadow(0 0 5px rgba(255, 87, 34, 0.8)) drop-shadow(0 0 10px rgba(255, 87, 34, 0.8)) drop-shadow(0 0 20px rgba(255, 87, 34, 0.8)) drop-shadow(0 0 30px rgba(255, 87, 34, 0.8));
    transform: translateY(-3px); /* Add negative translateY value to move image up */

    
  }

  .glow-img {
    position: relative; /* Add relative positioning to create a reference for absolute positioning */
  }
  
  .glow-img:hover::after {
    content: '';
    position: absolute;
    left: -5px; /* Add left offset to position the vertical line */
    top: 0;
    bottom: 0;
    width: 1px; /* Set width to 1px for the vertical line */
    background-color: #f78b4e;
  }

  @keyframes glowing {
    0% {
      filter: drop-shadow(0 0 5px rgba(255, 87, 34, 0.8)) drop-shadow(0 0 10px rgba(255, 87, 34, 0.8)) drop-shadow(0 0 15px rgba(255, 87, 34, 0.8)) drop-shadow(0 0 20px rgba(255, 87, 34, 0.8));
    }
    50% {
      filter: drop-shadow(0 0 10px rgba(216, 67, 21, 0.8)) drop-shadow(0 0 20px rgba(216, 67, 21, 0.8)) drop-shadow(0 0 30px rgba(216, 67, 21, 0.8)) drop-shadow(0 0 40px rgba(216, 67, 21, 0.8));
    }
    100% {
      filter: drop-shadow(0 0 12.5px rgba(255, 87, 34, 0.8)) drop-shadow(0 0 50px rgba(255, 87, 34, 0.8)) drop-shadow(0 0 15px rgba(255, 87, 34, 0.8)) drop-shadow(0 0 20px rgba(255, 87, 34, 0.8));
    }
      }
    `}
              </style>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "rgb(251,137,72)",
              background:
                "linear-gradient(0deg, rgba(251,137,72,1) 0%, rgba(180,104,61,0.22454919467787116) 100%)",
              width: "2px",
              position: "fixed",
              top: 100,
              bottom: 480,
              left: 50,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Side;
