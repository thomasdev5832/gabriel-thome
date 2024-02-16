import React from 'react';
import './DigitalSolutions.css';
import computer from '../assets/Computer.svg';
import rocket from '../assets/rocket.svg';
import laptop from '../assets/Laptop.svg';

const arrow = <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16.2 19 4.8-7-4.8-7H3l4.8 7L3 19h13.2Z"/>
</svg>
const mobile = <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
<path fill-rule="evenodd" d="M5 4c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z" clip-rule="evenodd"/>
</svg>
const cart = <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.8-3H7.4M11 7H6.3M17 4v6m-3-3h6"/>
</svg>
const pen = <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
<path fill-rule="evenodd" d="M14 4.2a4.1 4.1 0 0 1 5.8 0 4 4 0 0 1 0 5.7l-1.3 1.3-5.8-5.7L14 4.2Zm-2.7 2.7-5.1 5.2 2.2 2.2 5-5.2-2.1-2.2ZM5 14l-2 5.8c0 .3 0 .7.3 1 .3.3.7.4 1 .2l6-1.9L5 13.8Zm7 4 5-5.2-2.1-2.2-5.1 5.2 2.2 2.1Z" clip-rule="evenodd"/>
</svg>
const ads = <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 9H5a1 1 0 0 0-1 1v4c0 .6.4 1 1 1h6m0-6v6m0-6 5.4-3.9A1 1 0 0 1 18 6v12.2a1 1 0 0 1-1.6.8L11 15m7 0a3 3 0 0 0 0-6M6 15h3v5H6v-5Z"/>
</svg>
const lock = <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.5 11H5a1 1 0 0 0-1 1v7c0 .6.4 1 1 1h4.5M7 11V7a3 3 0 0 1 6 0v1.5m2.5 5.5v1.5l1 1m3.5-1a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"/>
</svg>
const chevrondown = <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 7 4 4 4-4m-8 6 4 4 4-4"/>
</svg>

const DigitalSolutions: React.FC = () => {
  return (
    <div className='main-site'>
      <div className='top-bar'>
        <p>Tecnologia de alta performance</p>
      </div>
      <section className='hero-wrap'>
        <div className='subhero-wrap-one'>
          <div>
              <img src={computer} alt="" />
          </div>
          <div className='subhero-wrap-two'>
            <h1>Aumente as vendas do seu negócio com um <span>site de alta performance.</span></h1>
              <p>Use o poder da internet para destacar sua empresa e conquistar novos clientes.</p>
              
              <a href="">
                  <button>Eu quero 🚀</button>
              </a>
          </div>
        
            
        </div>
      </section>

      <section className='vantagens-wrap'>
        
        <div className="vantagens-container">
        
          <h2>Vantagens de um site de <span>alta performance</span></h2>
          <ul>
            <li>{arrow} Atrair mais pessoas para o seu negócio todos os dias</li>
            <li>{arrow} Ter uma vitrine virtual no maior espaço de vendas do mundo</li>
            <li>{arrow} Divulgar seus serviços de um jeito prático</li>
            
            <li>{arrow} Criar interesse pelo seu produto ou serviço em poucos minutos</li>
            <li>{arrow} Mostrar os benefícios, resultados e diferenciais e comprovar sua expertise</li>
            <li>{arrow} Vender mais e de maneira recorrente para os milhões de brasileiros</li>
          </ul>
        </div>
      </section>

        <section className='feature-wrap'>
            <h2>Funcionalidades de um <span>site profissional</span></h2>
         <div className="container-wrap">
            <div className="service">
                {mobile}
                <h3>Responsivo</h3>
                <p>Site totalmente responsivo, garantindo uma experiência de usuário consistente em qualquer dispositivo.</p>
            </div>
            <div className="service">
                {cart}
                <h3>Alta Conversão</h3>
                <p>Poderosa ferramenta de conversão, projetada para transformar visitantes em leads e clientes potenciais de forma eficaz.</p>
            </div>
            <div className="service">
              {pen}
                <h3>Design Personalizado</h3>
                <p>Layout exclusivo e personalizado, alinhado com a identidade visual e mensagem do seu serviço ou produto.</p>
            </div>
            <div className="service">
              {ads}
                <h3>Otimização para Anúncios</h3>
                <p>Otimizado para campanhas de anúncios, garantindo que alcance o público-alvo de maneira precisa e aumente suas taxas de conversão.</p>
            </div>
            <div className="service">
              {lock}
                <h3>Velocidade e Segurança Garantidas</h3>
                <p>Tempo de carregamento rápido e segurança certificada, proporcionando uma experiência fluida e segura para seus visitantes.</p>
            </div>
            </div>
      </section>
    </div>
  );
};

export default DigitalSolutions;
