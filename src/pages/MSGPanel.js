import { useEffect, useState } from "react";
import style from "./MSGPanel.module.css";
import Button from "../Components/Button";
// import InputBox from "../Components/InputBox";

export default function Panel() {
  const [allowed, setAllowed] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.title = "2M Produções | Painel de Mensagens";
  }, []);

  const [messages, setMessages] = useState([
    {
      id: Math.random(),
      name: "João",
      message: "Gostei do WebSite",
      readed: false,
    },
    {
      id: Math.random(),
      name: "Aurelio",
      message: "Esta pagina ficilita o meu trabalho",
      readed: true,
    },
    {
      id: Math.random(),
      name: "Aurelio",
      message: "Esta pagina ficilita o meu trabalho",
      readed: false,
    },
    {
      id: Math.random(),
      name: "Aurelio",
      message: "Esta pagina ficilita o meu trabalho",
      readed: false,
    },
    {
      id: Math.random(),
      name: "Aurelio",
      message: "Esta pagina ficilita o meu trabalho",
      readed: false,
    },
  ]);

  const handleCheck = (n, p) => {
    if (user === "teste" && password === "teste") {
      return setAllowed(true);
    }
    return window.alert("Acesso Negado");
  };

  return (
    <div className={style.container}>
      {!allowed ? (
        <div>
          <form className={style.form} onSubmit={(e) => e.preventDefault()}>
            <h3>Digite as Credenciais</h3>
            <div>
              <input
                type="text"
                placeholder="Nome"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <br />
              <input
                type="password"
                placeholder="Palavra Passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button
              text="entrar"
              onClick={(e) => handleCheck(user, password)}
            />
          </form>
        </div>
      ) : (
        <div>
          <h1>Mensagens</h1>
          <Button text="voltar" href="/"/>
          <div className={style.panel}>
            {messages.some((sms) => sms.readed === false) && (
              <>
                <h2>Não Lidas</h2>
                <div className={style.naoLidas}>
                  {messages
                    .filter((sms) => sms.readed === false)
                    .map((sms, index) => {
                      return (
                        <div key={index} data-readed={sms.readed}>
                          <p className={style.name}>{sms.name}</p>
                          <p className={style.message}>{sms.message}</p>
                          <div className={style.reactions}>
                            <button
                              onClick={() => {
                                setMessages(() => {
                                  const novaLista = messages.map((message) =>
                                    message.id === sms.id
                                      ? { ...message, readed: true }
                                      : message
                                  );
                                  return novaLista;
                                });
                              }}
                            >
                              Marcar como lida
                            </button>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </>
            )}
            {messages.some((sms) => sms.readed === true) && (
              <>
                <h2>lidas</h2>
                <div className={style.lidas}>
                  {messages
                    .filter((sms) => sms.readed === true)
                    .map((sms, index) => {
                      return (
                        <div key={index}>
                          <p className={style.name}>{sms.name}</p>
                          <p className={style.message}>{sms.message}</p>
                          <div className={style.reactions}>
                            <button
                              onClick={() => {
                                setMessages(() => {
                                  const novaLista = messages.map((message) =>
                                    message.id === sms.id
                                      ? { ...message, readed: false }
                                      : message
                                  );
                                  return novaLista;
                                });
                              }}
                            >
                              Marcar como não lida
                            </button>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
