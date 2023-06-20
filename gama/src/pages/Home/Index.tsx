import Header from "../../Components/Header/Index";
import Box from "../../Components/Box/Index";
import "../../style/global.css";

function Home() {
  const sendEmail = () =>{
    alert("Email enviado com sucesso");
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Box background="claro" >
          <div>
            <h1>Educação Financeira é tudo de bom</h1>
            <p>Vem comigo que te mostro por onde começar</p>
            <button className="button" onClick={sendEmail}>quero saber mais</button>
          </div>
          <div>
            <img src=""/>
          </div>
        </Box>
        <Box background="escuro">
          <h1>Educação Financeira é tudo de bom</h1>
        </Box>
      </main>
    </div>
  );
}

export default Home;
