const Section = (props) => {
    const {children} = props;

    return ( <section className={`
    h-screen w-screen p-8 max-w-screen-2x1 mx-auto
    flex flex-col items-start justify-center`}>
        {children}
    
    </section>
    );
};

export const Interface = () => {

    return (
   <div className="flex flex-col items-center w-screen">
    <AboutSection />

    <SkillsSection />

    <Section>
        <h1>Projetos</h1>
    </Section>
    
    <ContactSection />
    
    </div>
    );

};

const AboutSection =() => {
    return(

        <Section>
            <h1 className="text-6xl font-extrabold leading-snug">
                Olá, eu sou
                <br />
                <span className="bg-white px-1 italic">Leonardo</span>
            </h1>
            <p className="text-lg text-gray-600 mt-4">
                Trabalho como Desenvolvedor Front-End
                <br />
                Também me aventuro pelo mundo Back-End
            </p>
            <button
            className={` bg-indigo-600 text-white py-4 px-8 
            rounded-lg font-bold text-lg mt-16`}>
                Entre em contato
            </button>
        </Section>

    )
}

const skills = [
    {
        title: "CSS",
        level: 70,
    },
    {
        title: "Javascript",
        level: 60,
    },
    {
        title: "React",
        level: 50,
    },
    {
        title: "PHP",
        level: 80,
    },
    {
        title: "Nodejs",
        level: 50,
    },
   
];

const languages = [

    {
        title: "Português",
        level: 100,
    },
    {
        title: "Inglês",
        level: 60,
    },
    {
        title: "Espanhol",
        level: 20,
    },

]


const SkillsSection = () =>{
return(
    <Section>
        <div>
            <h2 className="text-5xl font-bold">Skills</h2>
            <div className=" mt-8 space-y-4">
                {skills.map((skill, index) => (
                    <div className="w-64" key={index}>
                      <h3 className="text-xl font-bold text-gray-800">{skill.title}</h3> 
                      <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                        <div 
                        className="h-full bg-indigo-500 rounded-full"
                        style={{ width: `${skill.level}%`}} />
                        </div>
                        </div>
                ))}
            </div>
        <div>
            <h2 className="text-5xl font-bold mt-10">Linguagens</h2>
            <div className=" mt-8 space-y-4">
                {languages.map((lng, index) => (
                <div className="w-64" key={index}>
                    <h3 className="text-xl font-bold text-gray-800">{lng.title}</h3>
                    <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                        <div 
                        className="h-full bg-indigo-500 rounded-full"
                        style={{ width: `${lng.level}%` }} />
            </div>
            </div>             
                ))}
            </div>
            </div>
            </div>
            
                

    </Section>
);
};

const ContactSection = () => {

    return(
        <Section>
            <h2 className="text-5xl font-bold">Entre em contato</h2>
            <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
                <form>
                    <label for="name" className="font-medium text-gray-900 block mb-1">
                        Name
                    </label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder: text-lg" />
                    <label
                    for="email"
                    className="font-medium text-gray-900 block mb-1 mt-8">
                        Email
                    </label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder: text-lg" />
                    <label
                    for="email"
                    className="font-medium text-gray-900 block mb-1 mt-8">
                        Mensagem
                    </label>
                    <textarea
                    name="message"
                    id="message"
                    className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder: text-lg" />
                    <button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg m-16">
                        Enviar
                    </button>
                </form>
            </div>
        </Section>


    )

}