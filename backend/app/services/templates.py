def registration_template(name, logo_url, calendar_url):
    return f"""
    <html>
    <body>
        <h1>¡Bienvenido/a a NestAi! {name} 💚</h1><br>
        <p>Queríamos darte la bienvenida a la familia de NestAi.</p>
        <p>¡Es un honor que hayas decidido sumarte a esta comunidad! 🙌 Gracias a ti, hoy estamos un paso más cerca de hacer una diferencia en la vida de personas que realmente lo necesitan.</p>
        <p>En NestAi, creemos en el poder de las personas como tú para cambiar el mundo, un acto de generosidad a la vez. Prepárate, porque tenemos grandes cosas por delante, y nos emociona mucho tenerte a bordo.</p>
        <p>Estamos aquí para cualquier cosa que necesites.</p>
        <p>¡Gracias por estar con nosotros y por confiar en esta misión! 💌</p>
        <p>Con tu bienvenida, puedes ver nuestro calendario anual, diseñado especialmente para ti. ¡Esperamos que te guste!</p>
        <img src="{calendar_url}">
        <p>Con cariño,</p>
        <p>El equipo de NestAi</p>
        <img src="{logo_url}" width="100px" heigth="100px">
    </html>
    </body>
    """
    
def donation_template(name, amount, logo_url):
    return f"""
    <html>
    <body>
        <h1>Querido/a {name}!</h1><br>
        <p>¡Gracias de corazón por tu donación de <strong>{amount}$</strong>! 💚.</p>
        <p>Con tu apoyo, estás ayudando a transformar vidas y a construir un futuro lleno de esperanza para quienes más lo necesitan. Eres parte de algo grande, y no podemos estar más agradecidos por tenerte con nosotros. 🌟</p>
        <p>Con mucho cariño,</p>
        <p>El equipo de NestAi 💜</p>
        <img src="{logo_url}" width="250px" heigth="100px">
    </body>
    </html>
    """
    
def inactivity_template(name, video_url, logo_url):
    return f"""
    <html>
    <body>
        <h1>Tu apoyo cambia vidas: una historia especial para ti 💫</h1><br>
        <p>¡Hola <strong>{name}</strong>! 🌈</p>
        <p>Esperamos que estés bien. Hoy queríamos compartir algo especial contigo… 💌 A veces, las palabras no bastan para expresar lo que tu apoyo ha significado, así que te contamos una historia de vida que tú has ayudado a cambiar:</p>
    <blockquote>
        <p><strong>Aminata</strong>, una mujer inmigrante de origen africano, llegó a este país enfrentando grandes barreras de racismo y exclusión social. Sin embargo, gracias al apoyo de NestAi y a personas increíbles como tú, Aminata encontró un empleo digno y estable, lo que le permitió superar estas dificultades y construir una nueva vida llena de oportunidades.</p>
    </blockquote>
        <p>Ahora queremos mostrarte cómo está Aminata hoy. Ella nos envió este video desde su lugar de trabajo para agradecerte por tu apoyo. ¡Mira cómo su vida ha cambiado gracias a personas como tú! 🎥</p>
        <video controls style="width: 300px">
        <source src="{video_url}" type="video/mp4">
        Tu navegador no soporta la reproducción de videos.
        </video>
        <p>Con cariño y gratitud,</p>
        <p>El equipo de NestAi</p>
        <img src="{logo_url}" width="250px" heigth="100px">
    </body>
    </html>
    """
    
def anniversary_template(name, logo_url):
    return f"""
    <html>
    <body>
        <h1>¡Feliz aniversario con NestAi! 🎉</h1><br>
        <p>¡Hola <strong>{{ donor_name }}</strong>! 🎂</p>
        <p>¡Hoy estamos celebrando un año desde que decidiste formar parte de NestAi! 🎈 Gracias a tu generosidad, muchas vidas han cambiado, y no podríamos estar más agradecidos.<p><br>
        <p>¡Eres increíble!<p>
        <p>Para agradecerte, nuestros amigos de <strong>Talkual Foods</strong>, una empresa dedicada a salvar frutas y verduras, quieren ayudarte a apoyar nuestra misión. Usa el código <strong>TALKUAL2</strong> en tu próxima compra y recibirás <strong>2€ de descuento</strong>. Además, esos 2€ serán destinados a nuestra campaña de pobreza y exclusión social. 🌟</p>
        <p><a href="https://www.talkualfoods.com/" target="_blank">Haz clic aquí para usar tu descuento</a></p>
        <p>¡Gracias por seguir creyendo en nuestra misión! Esperamos seguir contando contigo para lograr más magia juntos. 💚</p>
        <p><img src="../static/img/" alt="><br></p>
        <p>Ve al siguiente enlace para conocer más sobre nuestra campaña de pobreza y exclusión social:<a href="https://www.nestai.com" target="_blank">www.nestai.com</a></p><br>
        <p>Con todo el cariño del mundo,</p>
        <p>El equipo de NestAi</p>
        <img src="{logo_url}" width="250px" heigth="100px">
</body>
</html>
    """
    
    