import { useState } from "react";
import { IoArrowUpCircleSharp, IoClose } from "react-icons/io5";
import { VscChromeMinimize } from "react-icons/vsc";
import { createUseStyles } from "react-jss";

function App() {
  const useStyles = createUseStyles({
    wrapper: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "400px",
      height: "700px",
      overflow: "hidden",
      border: "1px solid #ccc",
      borderRadius: "10px",
      position: "absolute",
      bottom: "10px",
      right: "10px",
      zIndex: "2",
      fontFamily: "Open Sans, sans-serif",
      boxShadow:
        "0 2px 48px rgba(19, 33, 68, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.04)",
    },
    header: {
      backgroundColor: "black",
      display: "flex",
      justifyContent: "space-between",
      color: "white",
      alignItems: "center",
      height: "60px",
    },
    headerLeft: {
      display: "flex",
      alignItems: "center",
      color: "white",
      gap: "10px",
      fontSize: "1.2rem",
      padding: "10px",
    },
    headerLeftImg: {
      width: "50px",
      marginRight: "10px",
      backgroundColor: "white",
      border: "1px solid #ccc",
      borderRadius: "10%",
    },
    headerRight: {
      display: "flex",
      gap: "10px",
      padding: "10px",
      justifyContent: "center",
      alignItems: "center",
    },
    headerRightSvg: {
      width: "25px",
      height: "25px",
      cursor: "pointer",
    },
    input: {
      padding: "13px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      width: "100%",
      position: "relative",
    },
    inputSvg: {
      position: "absolute",
      right: "20px",
      top: "23px",
      width: "25px",
      height: "25px",
    },
    footer: {
      position: "absolute",
      bottom: "0",
      right: "0",
      left: "0",
      display: "flex",
      padding: "15px",
      margin: "0",
			backgroundColor: "white",
    },
    body: {
      overflowY: "scroll",
      scrollbarWidth: "thin",
      height: "100%",
      padding: "20px",
      backgroundColor: "white",
      paddingBottom: "100px",
    },
    bodyTop: {
      fontSize: "0.8rem",
      display: "flex",
      justifyContent: "center",
      color: "#737376",
    },
    bodyChat: {
      display: "flex",
      flexDirection: "column",
    },
    fromAi: {
      display: "flex",
      marginTop: "20px",
      fontSize: "0.8rem",
    },
    fromAiRight: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      maxWidth: "60%",
    },
    fromAiRightMessageBalloon: {
      backgroundColor: "#f1f0f0",
      padding: "10px",
      borderRadius: "10px",
    },
    fromMe: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: "20px",
      fontSize: "0.8rem",
    },
    fromMeMessageBalloon: {
      backgroundColor: "black",
      color: "white",
      padding: "10px",
      borderRadius: "10px",
    },
    ball: {
      position: "fixed",
      backgroundColor: "black",
      color: "white",
      borderRadius: "50%",
      width: "60px",
      height: "60px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "1rem",
      fontWeight: "bold",
      bottom: "10px",
      fontFamily: "Open Sans, sans-serif",
      right: "90px",
      cursor: "pointer",
    },
  });
  const classes = useStyles();
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [messages, setMessages] = useState([
    {
      who: "ai",
      message: "Merhaba, ben Elitnet yardımcı asistanıyım!",
    },
    {
      who: "ai",
      message: "Nasıl yardımcı olabilirim?",
    },
    {
      who: "me",
      message: "Merhaba",
    },
    {
      who: "ai",
      message: "Merhaba, ben Elitnet yardımcı asistanıyım!",
    },
    {
      who: "ai",
      message: "Nasıl yardımcı olabilirim?",
    },
  ]);
  const [message, setMessage] = useState("");
  const handleMessage = (e) => {
    e?.preventDefault();
    if (message === "") return;
    setMessages((prev) => [...prev, { who: "me", message }]);
    setMessage("");
    setTimeout(() => {
      document
        ?.getElementById("messagesBody")
        ?.scrollTo(0, document?.getElementById("messagesBody")?.scrollHeight);
    }, 300);
  };
  return (
    <>
      <div
        onClick={() => setIsChatVisible(!isChatVisible)}
        className={classes.ball}
      >
        <span>Chat</span>
      </div>
      <div
        style={{ display: isChatVisible ? "flex" : "none" }}
        className={classes.wrapper}
      >
        <div
          onClick={() => setIsChatVisible(!isChatVisible)}
          className={classes.header}
        >
          <div className={classes.headerLeft}>
            <img
              className={classes.headerLeftImg}
              src="https://crm.elitnet.net.tr/assets/img/logos/logo/elitLogo.svg"
              alt=""
            />
            <h5 style={{ fontWeight: "semiBold" }}>Elitnet Asistan</h5>
          </div>
          <div className={classes.headerRight}>
            <VscChromeMinimize className={classes.headerRightSvg} />
            <IoClose className={classes.headerRightSvg} />
          </div>
        </div>
        <div id="messagesBody" className={classes.body}>
          <div className={classes.bodyTop}>
            <span>Bugün</span>
          </div>
          <div className={classes.bodyChat}>
            {messages?.map((message, index) =>
              message?.who === "ai" ? (
                <div key={index} className={classes.fromAi}>
                  <div className={classes.fromAiLeft}>
                    <img
                      style={{ maxWidth: "70%" }}
                      className={classes.headerLeftImg}
                      src="https://crm.elitnet.net.tr/assets/img/logos/logo/elitLogo.svg"
                      alt=""
                    />
                  </div>
                  <div className={classes.fromAiRight}>
                    <div className={classes.fromAiRightMessageBalloon}>
                      {message.message}
                    </div>
                  </div>
                </div>
              ) : (
                <div key={index} className={classes.fromMe}>
                  <div className={classes.fromMeMessageBalloon}>
                    {message?.message}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <form onSubmit={handleMessage} className={classes.footer}>
          <input
            className={classes.input}
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Mesajınızı yazın..."
          />
          <IoArrowUpCircleSharp
            onClick={handleMessage}
            className={classes.inputSvg}
          />
        </form>
      </div>
    </>
  );
}

export default App;
