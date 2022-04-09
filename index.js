function exec() {
  const PING_PE = "https://ping.pe"

  const render = (node, container) => {
    container.appendChild(node)
  }

  const createIFrame = ({ src }) => {
    const iframe = document.createElement("iframe")
    iframe.setAttribute("src", src)
    iframe.setAttribute("id", "pingPeIframe")

    iframe.setAttribute(
      "sandbox",
      "allow-scripts allow-same-origin allow-top-navigation allow-forms allow-popups allow-pointer-lock allow-popups-to-escape-sandbox"
    )

    //     iframe.setAttribute(
    //       "srcdoc",
    //       `<html>
    //         <body>
    //     	  <script>
    // 	      document.cookie = 'cross-site-cookie2=noneCookie; SameSite=None; Secure';
    //     	  </script>
    //     	</body>
    //        </html>`
    //     )
    return iframe
  }
  const appContainer = document.getElementById("container")
  const spawnFrameButton = document.getElementById("spawn-frame-button")

  document.cookie = "SameSite=lax"
  document.cookie = "Secure=true"

  spawnFrameButton.addEventListener("click", () => {
    const iframe = createIFrame({ src: PING_PE })

    render(iframe, appContainer)
  })
}

document.addEventListener("DOMContentLoaded", exec)
