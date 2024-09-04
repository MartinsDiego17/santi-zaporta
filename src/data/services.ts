import trainer from "../../public/images/services/trainer.webp";
import nutricion from "../../public/images/services/nutricion.webp";
import group from "../../public/images/services/group.webp";

export const services = [
    {
        img: trainer.src,
        icon: 1,
        title: "Entrenamiento personalizado",
        description: "Planes de entrenamiento diseñados exclusivamente para vos",
        features: [
            "Planes personalizados",
            "Seguimiento constante",
            "Entrenadores certificados",
            "Rutinas adaptadas",
            "Consejos motivacionales"
        ]
    },
    {
        img: nutricion.src,
        icon: 2,
        title: "Asesoría nutricional",
        description: "Optimiza tu dieta para obtener los mejores resultados",
        features: [
            "Evaluación nutricional",
            "Plan personalizado",
            "Consejos dietéticos",
            "Soporte constante",
            "Educación alimentaria"
        ]
    },
    {
        img: group.src,
        icon: 3,
        title: "Clases grupales",
        description: "Entrena con otros y alcanza tus metas en equipo",
        features: [
            "Ambiente motivador",
            "Clases variadas",
            "Instructores energéticos",
            "Rutinas dinámicas",
            "Socialización activa"
        ]
    }
];
