document.addEventListener('DOMContentLoaded', function () {
  const schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best way to back up my business data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Using a cloud-based backup solution like IT Lasso's Data Trunk ensures your data is encrypted, secure, and available anytime."
      }
    },
    {
      "@type": "Question",
      "name": "Does IT Lasso offer cloud hosting for small businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer affordable managed cloud hosting plans using AWS Lightsail, tailored for small businesses."
      }
    },
    {
      "@type": "Question",
      "name": "How can I move my WordPress website to AWS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We handle the entire migration process for you \u2014 from database transfer to DNS setup \u2014 with zero downtime."
      }
    },
    {
      "@type": "Question",
      "name": "Can I host a church website on the cloud?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We host church websites with livestream support, donation forms, and event calendars."
      }
    },
    {
      "@type": "Question",
      "name": "What makes IT Lasso's web hosting different?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our hosting is fast, secure, and comes with personalized support and daily backups \u2014 no generic control panels."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to develop a Drupal website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Drupal site pricing starts around $1,500 depending on features, but we offer flexible packages for any budget."
      }
    },
    {
      "@type": "Question",
      "name": "Does IT Lasso provide support for website maintenance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer monthly and annual maintenance plans that include updates, backups, and security monitoring."
      }
    },
    {
      "@type": "Question",
      "name": "Can I schedule a free consultation with IT Lasso?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, visit itlasso.com/contact or call 234-215-2150 to book your free consultation."
      }
    },
    {
      "@type": "Question",
      "name": "What is the most secure hosting option for nonprofits?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our managed AWS hosting with SSL, firewall protection, and daily backups is ideal for nonprofit organizations."
      }
    },
    {
      "@type": "Question",
      "name": "Does IT Lasso help with domain registration and setup?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we can register your domain, configure DNS, and connect it to your website and email systems."
      }
    },
    {
      "@type": "Question",
      "name": "What services does IT Lasso offer in Tbilisi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide website development, cloud hosting, Synology backup services, and IT support for local businesses."
      }
    },
    {
      "@type": "Question",
      "name": "How fast is IT Lasso\u2019s managed AWS Lightsail hosting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our sites load in under 2 seconds with global reach and CDN support when needed."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use IT Lasso for Synology or NAS backup solutions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our Data Trunk service supports on-premise NAS systems like Synology and TrueNAS."
      }
    },
    {
      "@type": "Question",
      "name": "Does IT Lasso install and configure Bitdefender antivirus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide installation, configuration, and license support for Bitdefender across devices."
      }
    },
    {
      "@type": "Question",
      "name": "Can I keep my existing email if I change hosting providers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we help you migrate or preserve email while changing your web host \u2014 no disruption."
      }
    }
  ]
  };
  
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schemaData);
  document.head.appendChild(script);
});

