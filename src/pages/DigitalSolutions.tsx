import React, { useEffect } from 'react';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import './DigitalSolutions.css';
import computer from '../assets/Computer.svg';
import rocket from '../assets/rocket.svg';
import laptop from '../assets/Laptop.svg';
import pig from '../assets/Pig.svg';
import {Helmet} from "react-helmet";

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
const badgecheck = <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 12 2 2 5-5m4.5 5.3 1-.9a2 2 0 0 0 0-2.8l-1-.9a2 2 0 0 1-.6-1.4V7a2 2 0 0 0-2-2h-1.2a2 2 0 0 1-1.4-.5l-.9-1a2 2 0 0 0-2.8 0l-.9 1a2 2 0 0 1-1.4.6H7a2 2 0 0 0-2 2v1.2c0 .5-.2 1-.5 1.4l-1 .9a2 2 0 0 0 0 2.8l1 .9c.3.4.6.9.6 1.4V17a2 2 0 0 0 2 2h1.2c.5 0 1 .2 1.4.5l.9 1a2 2 0 0 0 2.8 0l.9-1a2 2 0 0 1 1.4-.6H17a2 2 0 0 0 2-2v-1.2c0-.5.2-1 .5-1.4Z"/>
</svg>
const question = <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.5 10a2.5 2.5 0 1 1 5 .2 2.4 2.4 0 0 1-2.5 2.4V14m0 3h0m9-5a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
</svg>

const DigitalSolutions: React.FC = () => {
  return (
    
    <div className='main-site'>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Sites de Alta Performance</title>
                <meta name="description" content="Criação de sites profissionais de alta performance." />
                <meta name="keywords" content="sites, landing pages, seo, lojas virtuais, ecommerce" />
                <meta name="author" content="Gabriel Thome" />
      </Helmet>
      <div className='top-bar'>
        <p>Tecnologia focada em resultados🏆</p>
      </div>
      <section className='hero-wrap'>
        <div className='subhero-wrap-one'>
          <div>
              <img src={computer} alt="" />
          </div>
          <div className='subhero-wrap-two'>
            <h1>Aumente as vendas do seu negócio com um <span>site profissional de alta performance.</span></h1>
              <p>Use o poder da internet para destacar sua empresa e conquistar novos clientes.</p>
              
              <a className='cta-button' href="https://wa.link/n336tc">
                  <button>Quero um site profissional 🚀</button>
              </a>
          </div>
        
            
        </div>
      </section>

      <section className='vantagens-wrap'>
        
        <div className="vantagens-container">
        
          <h2>Vantagens de um <span>site profissional</span></h2>
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

      <section className='grow-wrap'>
        <img src={rocket} alt="" />
        <h2>Eleve o seu negócio para o próximo nível e estabeleça uma estrutura de vendas ágil e eficiente.</h2>
        <a className='cta-button' href="https://wa.link/n336tc">
                  <button>Quero um site profissional 🚀</button>
              </a>
      </section>
      
      <section className='feature-wrap'>
            <h2>Funcionalidades de um <span>site de alta performance</span></h2>
         <div className="container-wrap">
            <div className="service">
                {mobile}
                <h3>Responsividade</h3>
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
                <h3>Velocidade e Segurança</h3>
                <p>Tempo de carregamento rápido e segurança certificada, proporcionando uma experiência fluida e segura para seus visitantes.</p>
            </div>
            </div>
      </section>

      <section className='todo-wrap'>
        <h2>Para quem são os <span>sites de alta performance?</span></h2>
        <div>
          <p><span>Empreendedores</span><br /> que buscam se inserir no mercado digital, fazendo deste meio um canal de vendas mais forte e lucrativo.</p>
        </div>
        <div>
          <p><span>Prestadores de serviço</span><br /> que desejam criar páginas para atrair clientes e mostrar de forma mais atrativa os benefícios dos seus serviços.</p>
        </div>
        <div>
          <p><span>Infoprodutores</span><br /> que desejam ter páginas rápidas, bonitas e otimizadas para seus lançamentos e perpétuos.</p>
        </div>
        <div>
          <p><span>Lojas Físicas</span><br /> que querem marcar presença no digital e se destacar da concorrência, mesmo vendendo um produto físico.</p>
        </div>
        <div>
          <p><span>E-commerces</span><br /> que desejam construir lojas virtuais otimizadas, eficientes e que facilitem a jornada de compra dos clientes;</p>
        </div>
      </section>

      <section className='grow-wrap'>
        <img src={pig} alt="" />
        <h2>Sites otimizados conquistam mais clientes e vendem muito mais.</h2>
        <p>A otimização é um recurso importante para todo site profissional.<br /><br />Mesmo que não pareça importante, sua influência na performance da página não deve ser ignorada.</p>
        <a className='cta-button' href="https://wa.link/n336tc">
                  <button>Quero um site profissional 🚀</button>
              </a>
      </section>

      <section className='about-wrap'>
        <div>
          {badgecheck}
          <h2>Experiência Profissional</h2>
          <p>Com mais de 15 anos de experiência em tecnologia e desenvolvimento web, dedicação à excelência técnica e incessante busca pela alta qualidade, aliados a uma abordagem centrada no cliente e à habilidade de transformar requisitos complexos em soluções eficazes. <br /><br /> O foco principal é trazer resultados tangíveis e significativos para cada cliente.
            </p>
        </div>
      </section>

      

      <section className='faq-wrap'>
        {question}
        <h2>Dúvidas Frequentes</h2>
        <Accordion>
          <AccordionItem header="Quais são as etapas para ter um site profissional?">
          <h4>Fluxo de Desenvolvimento</h4>
            <ol>
                <li>
                    <div>
                        <h5>1. Reunião e Briefing</h5>
                        <p>Descreve qual tipo de site ou serviço deseja, onde são esclarecidas quais as necessidades do cliente.</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h5>2. Orçamento e Pagamento</h5>
                        <p>Com base nas informações da reunião, é fornecido um orçamento transparente e detalhado para o desenvolvimento.</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h5>3. Layout e Desenvolvimento</h5>
                        <p>Após o pagamento, o layout aprovado é transformado em um site funcional, implementando recursos e funcionalidades conforme necessário.</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h5>4. Aprovação</h5>
                        <p>O cliente revisa o site em desenvolvimento e fornece feedback para ajustes finais antes do lançamento.</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h5>5. Lançamento</h5>
                        <p>Após a aprovação final, o site é lançado oficialmente, pronto para ser descoberto pelo público-alvo.</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h5>6. Suporte</h5>
                        <p>O suporte técnico está disponível para garantir que o site funcione perfeitamente e oferecer assistência contínua conforme necessário.</p>
                    </div>
                </li>
            </ol>
          </AccordionItem>

          <AccordionItem header="Qual o prazo de entrega?">
            <p>O prazo de cada projeto varia de acordo com o tamanho e complexidade do site.
            <br /><br />
            Em média os sites tendem a ser totalmente desenvolvidos em torno de 14 dias úteis, porém pode ser em menos tempo ou em mais tempo, dependendo também da cooperação do cliente e de outros fatores de implementação do projeto.</p>
          </AccordionItem>

          <AccordionItem header="Como funciona e quais as formas de pagamento?">
            <p>O pagamento dos serviços poderá ser feito por:
            <br /><br />
              - PIX, boleto ou transferência bancária
              <br />
              - Cartão de crédito em até 12x com juros
              <br />
              - Criptomoedas específicas
              <br /><br />
              O valor total será pago 50 % antes de iniciar e 50% quando finalizar o projeto.</p>
          </AccordionItem>

          <AccordionItem header="Qual segurança eu tenho?">
            <p>Na fase inicial do projeto, você receberá um contrato para assinatura digital (com validade jurídica) onde estará descrito prazos, valores, direitos e obrigações referentes ao serviço de criação de websites.</p>
          </AccordionItem>
      </Accordion>
      </section>

      <section className='grow-wrap'>
        <img src={laptop} alt="" />
        <h2>Aumente o potencial do seu negócio com uma presença online profissional</h2>
        <p>Um site profissional é a ferramenta que você precisa para se destacar da concorrência, consolidar sua marca e facilitar a interação com seus clientes.</p>
        <a className='cta-button' href="https://wa.link/n336tc">
                  <button>Quero um site profissional 🚀</button>
              </a>
      </section>

      <section className='footer-wrap'>
        <a href="">Política de Privacidade </a>©
        <a href=""> Termnos de Uso</a>
      </section>


    </div>
  );
};

export default DigitalSolutions;
