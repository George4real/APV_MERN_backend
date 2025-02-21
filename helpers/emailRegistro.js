import nodemailer from "nodemailer";
const emailRegistro = async (datos) => {
  var transporter = nodemailer.createTransport({
    host: process.env.Email_HOST,
    port: process.env.Email_PORT,
    auth: {
      user: process.env.Email_USER,
      pass: process.env.Email_PASS,
    },
  });

  const {email, nombre, token } = datos

  // Enviar email
  try {
    const info = await transporter.sendMail({
      from: 'APV - Administrador de Pacientes de Veterinaria',
      to: email,
      subject: 'Comprueba tu cuenta en APV',
      text: 'Comprueba tu cuenta en APV',
      html: `<p>Hola: ${nombre}, comprueba tu cuenta en APV.</p>
          <p>Tu cuenta ya esta lista, solo debes comprobarla en el siguiente enlace:
          <a href="${process.env.FRONTEND_URL}/confirmar/${token}"> Comprobar tu cuenta</a> </p>
      
          <p>Si tu no creaste esta cuenta ignora este mensaje</p>
      `
    })
  
    console.log("Mensaje enviado: %s", info.messageId)
  } catch(error) {
    console.log(error)
  }
  
};

export default emailRegistro;
