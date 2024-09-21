import nodemailer from "nodemailer";

const emailOlvidePassword = async (datos) => {
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
  const info = await transporter.sendMail({
    from: 'APV - Administrador de Pacientes de Veterinaria',
    to: email,
    subject: 'Restablece tu Password',
    text: 'Restablece tu Password',
    html: `<p>Hola: ${nombre}, ha solicitado restablecer tu password.</p>
        <p>Sigue el siguiente enlace para generar un nuevo password:
        <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Restablecer Passsword</a> </p>
    
        <p>Si tu no creaste esta cuenta ignora este mensaje</p>
    `
  })

  console.log("Mensaje enviado: %s", info.messageId)
};

export default emailOlvidePassword;
