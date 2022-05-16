  const formulario = document.getElementById('form');
  const nome = formulario.elements['nome'].value;
  const email = formulario.elements['email'].value;
  const nascimento = formulario.elements['nascimento'].value;
  const rg = formulario.elements['rg'].value;
  const cpf = formulario.elements['cpf'].value;
  const cep = formulario.elements['cep'].value;
  const rua = formulario.elements['rua'].value;
  const num = formulario.elements['numero'].value;
  const celular = formulario.elements['celular'].value;
  //radio buttom
  const ra = formulario.elements['ra'].value;
  const senha = formulario.elements['senha'].value;
  const confsenha = formulario.elements['confsenha'].value;
  const ano = ra.substring(0, 4);

  //Validar nome
 class Nome{
    let inputNome = document.querySelector("nome");
    inputNome.addEventListener("keydown", function (e) {
      if (e.key > "0" && e.key < "9") {
        e.preventDefault();
      }
    });
  }


  function Cadastrar() {
    if (ra.length == 9 && Number.isInteger(parseInt(ra))) {
      if (1999 <= parseInt(ano) && parseInt(ano) <= 2021) {
        if (validarCampos()) {
          if (separarNome(nome)) {
            if (email.includes("@")) {
              if (senha.length >= 10) {
                var dados = {
                  'Nome': nome,
                  'Email': email,
                  'Data de Nascimento': nascimento,
                  'RG': rg,
                  'CPF': cpf,
                  'CEP': cep,
                  'Rua': rua,
                  'Número': num,
                  'Celular': celular,
                  'Número de Identificação': ra,
                  'Senha': senha,
                  'Confirmação de senha': confsenha,
                };
                console.log(JSON.stringify(dados));
                alert("Dados enviados com sucesso!")
                Limpar();
              } else {
                alert("Por favor insira uma senha com 10 ou mais caracteres.");
              }
            } else {
              alert("Por favor insira um e-mail válido.");
            }
          } else {
            alert("Por favor insira seu nome completo.");
          }
        } else {
          alert("Por favor preencha todos os campos do formulário.");
        }
      } else {
        alert("Por favor cheque se os 4 primeiros dígitos do seu RA estão entre 1999 e 2021.");
      }
    } else {
      alert("Por favor cheque se seu RA possui 9 caracteres numéricos.");
    }
  }

  function validarCampos() {
    var formulario = document.getElementById('form');

    for (i = 0; i < formulario.length; i++) {
      if (formulario[i].type == 'text') {
        if (formulario[i].value == '') {
          return false;
        }
      }
    }
    return true;
  }

  function separarNome(nome) {

    var nomeSeparado = nome.split(" ");

    if (nomeSeparado.length >= 2) {
      return true;
    } else {
      return false;
    }
  }

  function Limpar() {
    document.getElementById("form").reset();
  }

  function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;
    // Elimina CPFs invalidos conhecidos	
    if (cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999")
      return false;
    // Valida 1o digito	
    add = 0;
    for (i = 0; i < 9; i++)
      add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
      rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
      return false;
    // Valida 2o digito	
    add = 0;
    for (i = 0; i < 10; i++)
      add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
      rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
      return false;
    return true;
  }

  function Funcionario() {}