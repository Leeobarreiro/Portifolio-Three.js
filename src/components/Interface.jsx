const Section = (props) => {
    const {children} = props;

    return ( <section className={`
    h-screen w-screen p-8 max-w-screen-2x1 mx-auto
    flex flex-col items-start justify-center`}>{children}
    
    </section>
    );
};

export const Interface = () => {

    return (
    <div className="flex flex-col items-center w-screen">
    <AboutSection />
    
    <Section>
        <h1>Skills</h1>
    </Section>

    <Section>
        <h1>Projetos</h1>
    </Section>
    
    <Section>
        <h1>Contato</h1>
    </Section>
    
    </div>
    
    );

};

const AboutSection =() => {
    return(

        <Section>
            <h1 className="text-6x1 font-extrabold leading-snug">
                Olá, eu sou
                <br />
                <span />

            </h1>

        </Section>

    )
}