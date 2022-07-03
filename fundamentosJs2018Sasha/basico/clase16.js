// Condicional multiple: switch

var signo = prompt("Cual es tu signo?");

switch (signo.toLowerCase()) {
  case "tauro":
    console.log(
      `Tauro, puedes llegar a solucionar un conflicto surgido en el trabajo con un buen acuerdo. Pondrás ilusión en tu quehacer diario, y eso te va a compensar al final del día. Vas a tener el apoyo y la ayuda necesaria de tus compañeros. Tienes algunos problemillas de dinero, pero se pasarán muy pronto, ánimo.`
    );
    break;

  case "aries":
    console.log(
      "Estás ahorrando correctamente, y no te va mal con el dinero, Aries, pero disfruta un poco. Vas a ponerte a prueba buscando nuevos retos en el trabajo, te saldrá muy bien. Las labores en equipo te pueden resolver muchos problemas en este momento."
    );
    break;

  case "geminis":
  case "géminis":
    console.log(
      "Ten muy claro el orden de prioridades a la hora de equilibrar tu presupuesto, Géminis. En lo referente a la economía, debes tomarte las cosas con paciencia. Ten cuidado, porque tienes el riesgo de embarcarte en gastos problemáticos. En el trabajo, tendrás que hacer grandes esfuerzos, pero todo saldrá muy bien. Conocerás a personas que te propondrán un nuevo modo o estilo de vida. Pídele a tu pareja que respete tu espacio y tu intimidad, tienes derecho."
    );
    break;

  case "cancer":
    console.log(
      "Es posible que un compañero de trabajo quiera implicarte en algo extraño, Cáncer. Esta época, es muy propicia para conseguir créditos, subvenciones y ayudas. Si estás buscando empleo, ten cuidado, no aceptes las ofertas poco claras."
    );
    break;

  case "leo":
    console.log(
      "Puede surgirte una entrada económica inesperada, Leo, estás de suerte en este nivel. Te va a costar callarte ciertas cosas que verás en el trabajo, pero te conviene hacerlo. Podrías tener noticias por correo o por teléfono, de un ingreso inesperado. Ten cuidado con lo que digas, lo pueden malinterpretar."
    );
    break;

  case "virgo":
    console.log(
      "Vas a ir alcanzando los objetivos profesionales que te habías propuesto, Virgo. Gracias a la política de ahorro que llevas, saldrás muy bien adelante. Tienes la sensación de que se te han cerrado muchas puertas en el trabajo, pero es temporal. "
    );
    break;

  case "libra":
    console.log(
      "Libra, tu dinero puede darte beneficios a medio y largo plazo, adminístrate bien. Últimamente, han aumentado tus gastos, pero todavía lo puedes controlar. Es el momento de empatizar con los compañeros de trabajo, te vendrá muy bien."
    );
    break;

  case "escorpio":
    console.log(
      "s un momento muy bueno para que pongas en marcha esa idea que tanto te atrae, Escorpio. Todo el dinero que inviertas para mejorar en tu profesión, te beneficiará mucho. Tus recursos económicos van a aumentar de una manera lenta, pero constante. Si estabas buscando un trabajo extra, ahora tienes posibilidades de encontrarlo."
    );
    break;

  case "sagitario":
    console.log(
      "Este es un momento excelente para mover tu dinero e invertirlo con posibilidades, Sagitario. Tu popularidad aumentará mucho en estos próximos días en tu lugar de trabajo. Si andabas detrás de un ascenso, ahora van a aumentar tus posibilidades. Las cosas te serán muy favorables laboralmente, podrás hacer lo que quieras."
    );
    break;

  case "capricornio":
    console.log(
      "No te conviene pedir préstamos, Capricornio, espera un poco y estarás mucho mejor. Trata de evitar los gastos prescindibles, lo que ahorres te servirá de mucho. Si tu trabajo es para una empresa, vas a recibir noticias muy favorables para ti. Prueba a sorprender a tus conocidos con un cambio de look, necesitas renovarte. Serás muy popular entre los demás, gracias a tu generosidad y tu carisma. Si quieres disfrutar del amor, comparte tu tiempo con tu pareja, hoy lo pasarás muy bien en su compañía. Si tienes pareja, estaréis muy bien este día, disfrútalo al máximo. En la salud estás bien, pero con los nervios de punta, trata de calmarte en lo posible. Los problemas familiares están consumiendo tu energía. No pretendas resolver todos los problemas de los demás, piensa más en ti. Te encuentras bien y con ganas de viajar a donde sea para animarte."
    );
    break;

  case "acuario":
    console.log(
      "Acuario, ahora podrás empezar a plantearte una nueva compra o proyecto importante. En el trabajo harás algunas cosas nuevas que te tendrán bastante entretenido. Vas a actuar con mucha diplomacia y eso es algo que van a valorar. Pide consejo a un experto si quieres realizar inversiones, ganarás mucho. Recurrirás a tu ingenio para mejorar tu situación y acertarás de pleno. "
    );
    break;

  case "piscis":
    console.log(
      "Te ahorrarás problemas si te haces un presupuesto realista, Piscis, algo fácil para ti. Harás tu trabajo con agrado y con interés, y tu esfuerzo será reconocido. Podrías tener problemas laborales al exponer tus ideas, pero debes persistir. Si actúas con serenidad solucionarás ese problema que te preocupa. Deberías ocuparte de algo importante que estás dejando un poco de lado. "
    );
    break;

  default:
    console.log("No es un signo zodiacal, burro!!!");
    break;
}
