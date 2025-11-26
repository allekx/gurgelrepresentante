// EXEMPLO DE CONFIGURAÇÃO REAL - Site Corretor Cirurgia Segura
// Este é um exemplo de como configurar o site com dados reais
// Copie este arquivo para config.js e edite com suas informações

const SITE_CONFIG = {
    // Informações da Empresa
    company: {
        name: "Cirurgia Segura",
        phone: "0800 61 3333",
        email: "contato@cirurgiasegura.com",
        address: "SHS QD 02 - Bloco J - Sl. 101/102",
        city: "Brasília - DF",
        cep: "70322-901",
        cnpj: "00.000.000/0000-00"
    },

    // EXEMPLO: Informações do Corretor (EDITE ESTAS INFORMAÇÕES)
    broker: {
        name: "João Silva Santos",
        phone: "(11) 99999-8888",
        email: "joao.silva@cirurgiasegura.com",
        whatsapp: "5511999998888", // Número do WhatsApp com código do país (55 = Brasil)
        creci: "123456-F", // Seu CRECI (se aplicável)
        region: "São Paulo - SP"
    },

    // EXEMPLO: Redes Sociais (EDITE ESTAS INFORMAÇÕES)
    social: {
        facebook: "https://facebook.com/joaosilvacorretor",
        instagram: "https://instagram.com/joaosilvacorretor",
        linkedin: "https://linkedin.com/in/joaosilvacorretor"
    },

    // EXEMPLO: Configurações do Site (EDITE ESTAS INFORMAÇÕES)
    site: {
        title: "João Silva Santos - Corretor Cirurgia Segura em São Paulo",
        description: "Corretor especializado em Cirurgia Segura em São Paulo. Proteção financeira de até R$ 150 mil para cirurgias. Atendimento personalizado 24h. Agende sua consultoria gratuita!",
        keywords: "cirurgia segura, corretor cirurgia segura, são paulo, proteção cirúrgica, seguro cirúrgico, intercorrências cirúrgicas, cirurgia plástica seguro",
        author: "João Silva Santos"
    },

    // Dados do Produto (MANTENHA ESTES DADOS)
    product: {
        coverage: "R$ 150.000",
        specialties: 11,
        reimbursed: "R$ 30 milhões",
        specialtiesList: [
            "Cirurgia Plástica",
            "Oftalmologia", 
            "Cirurgia Geral",
            "Ortopedia",
            "Vascular",
            "Ginecologia",
            "Otorrinolaringologia",
            "Urologia",
            "Colo-Proctologia",
            "Nefrologia"
        ]
    },

    // EXEMPLO: Depoimentos Reais (EDITE COM DEPOIMENTOS REAIS)
    testimonials: [
        {
            text: "O João foi fundamental na contratação do meu Cirurgia Segura. Profissional muito competente e atencioso. Recomendo para todos!",
            author: "Maria Aparecida Silva",
            role: "Paciente - Cirurgia Plástica",
            rating: 5
        },
        {
            text: "Excelente atendimento! O João explicou tudo detalhadamente e me ajudou a escolher a melhor opção para minha cirurgia.",
            author: "Carlos Eduardo Oliveira",
            role: "Paciente - Cirurgia Geral",
            rating: 5
        },
        {
            text: "Como médico, recomendo o João para meus pacientes. É um corretor sério e confiável do Cirurgia Segura.",
            author: "Dr. Roberto Mendes",
            role: "Cirurgião Plástico - Hospital Albert Einstein",
            rating: 5
        },
        {
            text: "Atendimento excepcional! O João foi muito paciente e esclareceu todas as minhas dúvidas sobre a proteção cirúrgica.",
            author: "Ana Paula Costa",
            role: "Paciente - Cirurgia Oftalmológica",
            rating: 5
        }
    ],

    // Configurações de Contato
    contact: {
        formTitle: "Fale com o João Silva",
        formSubtitle: "Agende sua consultoria gratuita e tire todas as suas dúvidas",
        successMessage: "Mensagem enviada com sucesso! O João entrará em contato em até 2 horas.",
        errorMessage: "Erro ao enviar mensagem. Tente novamente ou ligue diretamente."
    },

    // Configurações de Animações
    animations: {
        enabled: true,
        duration: 600,
        delay: 100
    },

    // EXEMPLO: Analytics (ADICIONE SEUS IDs REAIS)
    analytics: {
        googleAnalytics: "G-XXXXXXXXXX", // Substitua pelo seu ID do Google Analytics
        facebookPixel: "123456789", // Substitua pelo seu ID do Facebook Pixel
        hotjar: "1234567" // Substitua pelo seu ID do Hotjar
    },

    // EXEMPLO: SEO (EDITE COM SUAS INFORMAÇÕES)
    seo: {
        ogImage: "https://seusite.com/images/joao-silva-corretor.jpg", // Imagem para redes sociais
        twitterCard: "summary_large_image",
        canonicalUrl: "https://seusite.com" // URL do seu site
    },

    // Configurações de Performance
    performance: {
        lazyLoading: true,
        preloadFonts: true,
        minifyCSS: false, // true para produção
        minifyJS: false   // true para produção
    }
};

// ========================================
// INSTRUÇÕES DE USO:
// ========================================

/*
1. COPIE ESTE ARQUIVO:
   - Renomeie este arquivo para "config.js"
   - Substitua o arquivo config.js existente

2. EDITE AS INFORMAÇÕES:
   - Seu nome completo
   - Seu telefone
   - Seu email
   - Seu WhatsApp (com código do país)
   - Suas redes sociais
   - Seus depoimentos reais
   - Seus IDs de analytics

3. EXEMPLOS DE PERSONALIZAÇÃO:

   // Para um corretor em outra cidade:
   broker: {
       name: "Maria Santos",
       phone: "(21) 98888-7777",
       email: "maria.santos@cirurgiasegura.com",
       whatsapp: "5521988887777", // 55 = Brasil, 21 = DDD Rio
       region: "Rio de Janeiro - RJ"
   }

   // Para um corretor com especialização:
   broker: {
       name: "Dr. Pedro Costa",
       phone: "(31) 97777-6666",
       email: "pedro.costa@cirurgiasegura.com",
       whatsapp: "5531977776666",
       region: "Belo Horizonte - MG",
       specialization: "Especialista em Cirurgia Plástica"
   }

4. DEPOIMENTOS REAIS:
   - Colete depoimentos de clientes reais
   - Peça autorização para usar nomes
   - Mantenha depoimentos autênticos
   - Inclua diferentes especialidades

5. ANALYTICS:
   - Crie conta no Google Analytics
   - Configure Facebook Pixel
   - Adicione Hotjar para insights
   - Monitore conversões

6. SEO:
   - Use palavras-chave relevantes
   - Inclua sua cidade/região
   - Otimize para buscas locais
   - Crie conteúdo único

7. TESTE:
   - Verifique se todos os links funcionam
   - Teste o formulário de contato
   - Confirme responsividade
   - Valide em diferentes navegadores
*/

// Função para aplicar configurações (mantida igual)
function applyConfig() {
    // Aplicar título e meta tags
    document.title = SITE_CONFIG.site.title;
    
    // Aplicar informações de contato
    const phoneElements = document.querySelectorAll('.contact-info span, .contact-details p');
    phoneElements.forEach(el => {
        if (el.textContent.includes('0800')) {
            el.textContent = `Atendimento 24h - Ligue ${SITE_CONFIG.company.phone}`;
        }
    });

    // Aplicar WhatsApp
    const whatsappLink = document.querySelector('.whatsapp-float a');
    if (whatsappLink) {
        whatsappLink.href = `https://wa.me/${SITE_CONFIG.broker.whatsapp}`;
    }

    // Aplicar redes sociais
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        const icon = link.querySelector('i');
        if (icon.classList.contains('fa-facebook-f')) {
            link.href = SITE_CONFIG.social.facebook;
        } else if (icon.classList.contains('fa-instagram')) {
            link.href = SITE_CONFIG.social.instagram;
        } else if (icon.classList.contains('fa-linkedin-in')) {
            link.href = SITE_CONFIG.social.linkedin;
        }
    });

    // Aplicar cobertura
    const coverageElements = document.querySelectorAll('.highlight-text');
    coverageElements.forEach(el => {
        if (el.textContent.includes('R$ 150')) {
            el.textContent = SITE_CONFIG.product.coverage;
        }
    });

    // Aplicar número de especialidades
    const specialtyElements = document.querySelectorAll('.feature-number');
    specialtyElements.forEach(el => {
        if (el.textContent === '11') {
            el.textContent = SITE_CONFIG.product.specialties;
        }
    });

    // Aplicar valor reembolsado
    const reimbursedElements = document.querySelectorAll('.hero-subtitle');
    reimbursedElements.forEach(el => {
        if (el.textContent.includes('R$ 30')) {
            el.textContent = `+ de ${SITE_CONFIG.product.reimbursed} reembolsados em todo Brasil`;
        }
    });
}

// Inicializar configurações quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    applyConfig();
    addMetaTags();
    addAnalytics();
    configureForm();
});

// Exportar configurações para uso global
window.SITE_CONFIG = SITE_CONFIG;

