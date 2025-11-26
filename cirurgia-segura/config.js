// Configurações do Site - Corretor Cirurgia Segura
// Edite este arquivo para personalizar o site

const SITE_CONFIG = {
    // Informações da Empresa
    company: {
        name: "Cirurgia Segura",
        phone: "(92) 98291-0122",
        email: "aiag.gurgel@gmail.com",
        address: "SHS QD 02 - Bloco J - Sl. 101/102",
        city: "Brasília - DF",
        cep: "70322-901",
        cnpj: "00.000.000/0000-00"
    },

    // Informações do Corretor
    broker: {
        name: "Gurgel",
        phone: "(92) 98291-0122",
        email: "aiag.gurgel@gmail.com",
        whatsapp: "5592982910122", // Número do WhatsApp com código do país
        creci: "000000-F" // Se aplicável
    },

    // Redes Sociais
    social: {
        facebook: "#",
        instagram: "https://www.instagram.com/cirurgia_segura_rep.oficial",
        linkedin: "https://www.linkedin.com/in/nelson-gurgel-aa564a182"
    },

    // Configurações do Site
    site: {
        title: "Corretor Cirurgia Segura - Proteção Financeira para Cirurgias",
        description: "Corretor especializado em Cirurgia Segura. Proteção financeira de até R$ 150 mil para cirurgias. Atendimento personalizado 24h.",
        keywords: "cirurgia segura, proteção cirúrgica, seguro cirúrgico, intercorrências cirúrgicas, corretor cirurgia segura",
        author: "Aia Gurgel"
    },

    // Dados do Produto
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

    // Depoimentos
    testimonials: [
        {
            text: "O Cirurgia Segura me deu tranquilidade durante minha cirurgia plástica. Saber que estava protegida financeiramente fez toda a diferença.",
            author: "Maria Silva",
            role: "Paciente - Cirurgia Plástica",
            rating: 5
        },
        {
            text: "Excelente serviço! O processo foi muito simples e a equipe foi muito atenciosa. Recomendo para todos que vão fazer cirurgia.",
            author: "João Santos", 
            role: "Paciente - Cirurgia Geral",
            rating: 5
        },
        {
            text: "Como médico, recomendo o Cirurgia Segura para meus pacientes. É uma proteção essencial que traz segurança para todos.",
            author: "Dr. Carlos Oliveira",
            role: "Cirurgião Plástico",
            rating: 5
        }
    ],

    // Configurações de Contato
    contact: {
        formTitle: "Fale Conosco",
        formSubtitle: "Entre em contato para uma consultoria personalizada",
        successMessage: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
        errorMessage: "Erro ao enviar mensagem. Tente novamente."
    },

    // Configurações de Animações
    animations: {
        enabled: true,
        duration: 600,
        delay: 100
    },

    // Configurações de Analytics
    analytics: {
        googleAnalytics: "", // ID do Google Analytics
        facebookPixel: "", // ID do Facebook Pixel
        hotjar: "" // ID do Hotjar
    },

    // Configurações de SEO
    seo: {
        ogImage: "https://exemplo.com/og-image.jpg",
        twitterCard: "summary_large_image",
        canonicalUrl: "https://exemplo.com"
    },

    // Configurações de Performance
    performance: {
        lazyLoading: true,
        preloadFonts: true,
        minifyCSS: false, // true para produção
        minifyJS: false   // true para produção
    }
};

// Função para aplicar configurações
function applyConfig() {
    // Aplicar título e meta tags
    document.title = SITE_CONFIG.site.title;
    
    // Aplicar informações de contato
    const phoneElements = document.querySelectorAll('.contact-info span, .contact-details p');
    phoneElements.forEach(el => {
        if (el.textContent.includes('Atendimento 24h')) {
            el.textContent = `Atendimento 24h - ${SITE_CONFIG.company.phone}`;
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

// Função para adicionar meta tags dinamicamente
function addMetaTags() {
    const head = document.head;
    
    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        head.appendChild(metaDesc);
    }
    metaDesc.content = SITE_CONFIG.site.description;

    // Meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        head.appendChild(metaKeywords);
    }
    metaKeywords.content = SITE_CONFIG.site.keywords;

    // Meta author
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
        metaAuthor = document.createElement('meta');
        metaAuthor.name = 'author';
        head.appendChild(metaAuthor);
    }
    metaAuthor.content = SITE_CONFIG.site.author;

    // Open Graph tags
    const ogTags = [
        { property: 'og:title', content: SITE_CONFIG.site.title },
        { property: 'og:description', content: SITE_CONFIG.site.description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: SITE_CONFIG.seo.canonicalUrl },
        { property: 'og:image', content: SITE_CONFIG.seo.ogImage }
    ];

    ogTags.forEach(tag => {
        let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
        if (!metaTag) {
            metaTag = document.createElement('meta');
            metaTag.setAttribute('property', tag.property);
            head.appendChild(metaTag);
        }
        metaTag.content = tag.content;
    });

    // Twitter Card tags
    const twitterTags = [
        { name: 'twitter:card', content: SITE_CONFIG.seo.twitterCard },
        { name: 'twitter:title', content: SITE_CONFIG.site.title },
        { name: 'twitter:description', content: SITE_CONFIG.site.description },
        { name: 'twitter:image', content: SITE_CONFIG.seo.ogImage }
    ];

    twitterTags.forEach(tag => {
        let metaTag = document.querySelector(`meta[name="${tag.name}"]`);
        if (!metaTag) {
            metaTag = document.createElement('meta');
            metaTag.name = tag.name;
            head.appendChild(metaTag);
        }
        metaTag.content = tag.content;
    });
}

// Função para adicionar analytics
function addAnalytics() {
    if (SITE_CONFIG.analytics.googleAnalytics) {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${SITE_CONFIG.analytics.googleAnalytics}`;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', SITE_CONFIG.analytics.googleAnalytics);
    }

    if (SITE_CONFIG.analytics.facebookPixel) {
        const script = document.createElement('script');
        script.innerHTML = `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${SITE_CONFIG.analytics.facebookPixel}');
            fbq('track', 'PageView');
        `;
        document.head.appendChild(script);
    }
}

// Função para configurar formulário
function configureForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obter dados do formulário
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Validar campos obrigatórios (sem exigir especialidade)
            if (!data.name || !data.email || !data.phone) {
                showNotification('Por favor, preencha todos os campos obrigatórios.', 'error');
                return;
            }
            
            // Formatar mensagem para WhatsApp
            const message = formatWhatsAppMessage(data);
            
            // Enviar para WhatsApp
            sendToWhatsApp(message);
            
            // Mostrar notificação de sucesso
            showNotification('Redirecionando para WhatsApp...', 'success');
            
            // Resetar formulário
            this.reset();
        });
    }
}

// Função para formatar mensagem do WhatsApp
function formatWhatsAppMessage(data) {
    const specialtyMap = {
        'plastica': 'Cirurgia Plástica',
        'oftalmologia': 'Oftalmologia',
        'geral': 'Cirurgia Geral',
        'ortopedia': 'Ortopedia',
        'vascular': 'Vascular',
        'ginecologia': 'Ginecologia',
        'otorrino': 'Otorrinolaringologia',
        'urologia': 'Urologia',
        'coloprocto': 'Colo-Proctologia',
        'nefrologia': 'Nefrologia'
    };
    
    const specialty = data.specialty ? (specialtyMap[data.specialty] || data.specialty) : '';
    
    let message = `*NOVA SOLICITAÇÃO - CIRURGIA SEGURA* 🏥\n\n`;
    message += `*Nome:* ${data.name}\n`;
    message += `*E-mail:* ${data.email}\n`;
    message += `*Telefone:* ${data.phone}\n`;
    if (specialty) {
        message += `*Especialidade:* ${specialty}\n`;
    }
    
    if (data.message && data.message.trim()) {
        message += `*Mensagem:* ${data.message}\n`;
    }
    
    message += `\n*Data:* ${new Date().toLocaleDateString('pt-BR')}\n`;
    message += `*Hora:* ${new Date().toLocaleTimeString('pt-BR')}\n\n`;
    message += `_Mensagem enviada através do site_ 📱`;
    
    return encodeURIComponent(message);
}

// Função para enviar para WhatsApp
function sendToWhatsApp(message) {
    const phone = SITE_CONFIG && SITE_CONFIG.broker && SITE_CONFIG.broker.whatsapp ? SITE_CONFIG.broker.whatsapp : '5592982910122';
    const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
    
    // Abrir WhatsApp em nova aba
    window.open(whatsappUrl, '_blank');
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
