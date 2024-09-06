let APIs = [
    {
        título: "Fine-Tuning",
        descrição: "Fine-Tuning é o processo de ajustar um modelo de aprendizado de máquina pré-treinado em um conjunto de dados específico, aprimorando seu desempenho para uma tarefa particular sem a necessidade de treinar o modelo do zero.",
        link: "https://www.assemblyai.com/blog/fine-tuning-how-to-train-your-machine-learning-models/",
        tags: "Inteligência Artificial"
    },
    {
        título: "JSON",
        descrição: "JSON (JavaScript Object Notation) é um formato leve de intercâmbio de dados. Ele é fácil de ler e escrever para humanos, e simples de analisar e gerar para máquinas.",
        link: "https://www.json.org/json-en.html",
        tags: "Inteligência Artificial"
    },
    {
        título: "Endpoint",
        descrição: "Endpoint refere-se a um ponto de conexão de uma API, onde os clientes podem enviar solicitações e receber respostas de um servidor. É a URL que identifica recursos em um serviço web.",
        link: "https://www.techtarget.com/searchcloudcomputing/definition/API-endpoint",
        tags: "APIs"
    },
    {
        título: "REST",
        descrição: "REST (Representational State Transfer) é uma arquitetura de software utilizada para construir APIs que seguem princípios simples como separação entre cliente e servidor e operações CRUD. É amplamente utilizado na web.",
        link: "https://www.redhat.com/en/topics/api/what-is-a-rest-api",
        tags: "APIs"
    },
    {
        título: "SOAP",
        descrição: "SOAP (Simple Object Access Protocol) é um protocolo de comunicação utilizado para a troca de informações estruturadas em serviços web. Utiliza XML e é conhecido por ser mais rigoroso que REST.",
        link: "https://www.redhat.com/en/topics/integration/what-is-soap",
        tags: "APIs"
    },
    {
        título: "GET",
        descrição: "GET é um método HTTP utilizado para solicitar dados de um servidor. Ele é amplamente utilizado em APIs REST para obter informações de um endpoint específico sem modificar o estado do recurso.",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET",
        tags: "APIs"
    },
    {
        título: "POST",
        descrição: "POST é um método HTTP utilizado para enviar dados ao servidor, criando ou modificando recursos. É geralmente utilizado para enviar informações de formulários ou realizar operações de gravação em APIs.",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST",
        tags: "APIs"
    },
    {
        título: "PUT",
        descrição: "PUT é um método HTTP que permite atualizar um recurso em um servidor. Diferente de POST, que geralmente cria novos recursos, PUT substitui ou modifica completamente um recurso existente.",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT",
        tags: "APIs"
    },
    {
        título: "DELETE",
        descrição: "DELETE é um método HTTP utilizado para remover um recurso do servidor. Ele é comum em APIs REST, permitindo a exclusão de dados de forma remota e controlada.",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE",
        tags: "APIs"
    },
    {
        título: "gRPC",
        descrição: "gRPC é um framework de código aberto que facilita a comunicação entre serviços, permitindo chamadas de procedimento remoto (RPC). Ele suporta vários idiomas e é mais eficiente que REST em certos contextos.",
        link: "https://grpc.io/",
        tags: "APIs"
    }
]

let inteligenciaartificial = [
    {
        título: "Reranking",
        descrição: "Reranking é o processo de reordenar uma lista de resultados iniciais de busca ou recuperação de informações com base em critérios adicionais, como relevância, semântica ou pontuações ajustadas por modelos mais sofisticados, como Transformers.",
        link: "https://en.wikipedia.org/wiki/Learning_to_rank",
        tags: "Inteligência Artificial"
    },
    {
        título: "Embedding",
        descrição: "Embedding é uma técnica utilizada em Inteligência Artificial para mapear palavras ou entidades em vetores de alta dimensão, preservando informações semânticas e relacionais.",
        link: "https://en.wikipedia.org/wiki/Word_embedding",
        tags: "Inteligência Artificial"
    },
    {
        título: "RAG",
        descrição: "RAG (Retrieval Augmented Generation) é uma técnica que combina a recuperação de informações com a geração de texto.",
        link: "https://www.assemblyai.com/blog/what-is-rag-retrieval-augmented-generation/",
        tags: "Inteligência Artificial"
    },
    {
        título: "LLM",
        descrição: "LLM (Large Language Model) refere-se a grandes modelos de linguagem treinados em vastos conjuntos de dados.",
        link: "https://en.wikipedia.org/wiki/Large_language_model",
        tags: "Inteligência Artificial"
    },
    {
        título: "Deep Learning",
        descrição: "Deep Learning é um subcampo do aprendizado de máquina que utiliza redes neurais profundas para modelar padrões complexos em grandes quantidades de dados.",
        link: "https://www.ibm.com/cloud/learn/deep-learning",
        tags: "Inteligência Artificial"
    },
    {
        título: "Machine Learning",
        descrição: "Machine Learning é uma área da IA que envolve o desenvolvimento de algoritmos que permitem que as máquinas aprendam com dados e tomem decisões sem serem explicitamente programadas.",
        link: "https://www.expert.ai/blog/machine-learning-definition/",
        tags: "Inteligência Artificial"
    },
    {
        título: "Redes Neurais",
        descrição: "Redes Neurais são sistemas computacionais inspirados no funcionamento do cérebro humano, compostos por nós (neurônios) conectados em camadas.",
        link: "https://towardsdatascience.com/a-gentle-introduction-to-neural-networks-series-part-1-2b90b87795bc",
        tags: "Inteligência Artificial"
    },
    {
        título: "AGI (Artificial General Intelligence)",
        descrição: "AGI (Artificial General Intelligence) refere-se ao conceito de uma IA capaz de executar qualquer tarefa cognitiva que um ser humano pode realizar.",
        link: "https://www.techtarget.com/whatis/definition/AGI-Artificial-General-Intelligence",
        tags: "Inteligência Artificial"
    },
    {
        título: "Prompt",
        descrição: "Um prompt é uma instrução ou comando fornecido a um modelo de linguagem, como o ChatGPT, para direcionar a geração de uma resposta ou a realização de uma tarefa específica.",
        link: "https://www.ibm.com/cloud/learn/deep-learning",
        tags: "Inteligência Artificial"
    }
]
let outros = [
    {
        título: "MIT Technology Review",
        descrição: "Publicação sobre inovações tecnológicas e seu impacto no mundo.",
        link: "https://www.technologyreview.com",
        tags: "Outros Revistas e Livros"
    },
    {
        título: "Wired",
        descrição: "Revista que explora como a tecnologia impacta cultura, economia e política.",
        link: "https://www.wired.com",
        tags: "Outros Revistas e Livros"
    },
    {
        título: "IEEE Spectrum",
        descrição: "Revista sobre engenharia e as últimas tendências tecnológicas.",
        link: "https://spectrum.ieee.org",
        tags: "Outros Revistas e Livros"
    },
    {
        título: "Journal of Artificial Intelligence Research",
        descrição: "Jornal focado em pesquisas sobre inteligência artificial.",
        link: "https://www.jair.org",
        tags: "Outros Revistas e Livros"
    },
    {
        título: "Artificial Intelligence Review",
        descrição: "Publicação acadêmica sobre avanços em inteligência artificial.",
        link: "https://link.springer.com/journal/146",
        tags: "Outros Revistas e Livros"
    },
    {
        título: "Nature Scientific Reports",
        descrição: "Publicação científica com relatórios sobre descobertas tecnológicas e científicas.",
        link: "https://www.nature.com/srep",
        tags: "Outros Revistas e Livros"
    },
    {
        título: "Silicon Valley Product Group",
        descrição: "Artigos sobre inovação e desenvolvimento de produtos no Vale do Silício.",
        link: "https://www.svpg.com/articles",
        tags: "Outros Revistas e Livros"
    },
    {
        título: "Product Management Today",
        descrição: "Publicação focada em tendências e práticas de gerenciamento de produtos.",
        link: "https://www.productmanagementtoday.com",
        tags: "Outros Revistas e Livros"
    },
    {
        título: "AI Magazine",
        descrição: "Revista que discute o avanço e aplicações da inteligência artificial.",
        link: "https://www.aaai.org/ai-magazine",
        tags: "Outros Revistas e Livros"
    },
    {
        título: "Popular Mechanics",
        descrição: "Revista que explora avanços em engenharia, ciência e tecnologia.",
        link: "https://www.popularmechanics.com",
        tags: "Outros Revistas e Livros"
    },
    {
        título: "Ars Technica",
        descrição: "Site que cobre notícias sobre tecnologia, ciência, e cultura.",
        link: "https://arstechnica.com",
        tags: "Outros Revistas e Livros"
    },
    {
        título: "Gizmodo",
        descrição: "Site que aborda gadgets, ciência, design e cultura.",
        link: "https://www.gizmodo.com",
        tags: "Outros Revistas e Livros"
    },
    {
        título: "Fast Company",
        descrição: "Revista focada em negócios, inovação e tecnologia.",
        link: "https://www.fastcompany.com",
        tags: "Outros Revistas e Livros"
    },
    {
        título: "TechCrunch",
        descrição: "Site de notícias especializado em startups e tecnologia.",
        link: "https://www.techcrunch.com",
        tags: "Outros Revistas e Livros"
    },
    {
        título: "PCMag",
        descrição: "Revista online que publica análises e notícias sobre tecnologia.",
        link: "https://www.pcmag.com",
        tags: "Outros Revistas e Livros"
    },
    {
        título: "AsiaTechDaily",
        descrição: "Site de notícias focado em startups e tecnologia na Ásia.",
        link: "https://www.asiatechdaily.com",
        tags: "Outros Revistas e Livros"
    },
    {
        título: "TechNode",
        descrição: "Publicação que cobre o ecossistema de startups e tecnologia na China.",
        link: "https://www.technode.com",
        tags: "Outros Revistas e Livros"
    },
    {
        título: "Relatec",
        descrição: "Revista de tecnologia educacional e comunicação da Espanha.",
        link: "https://relatec.unex.es",
        tags: "Outros Revistas e Livros"
    },
    {
        título: "Revista de Tecnología e Innovación",
        descrição: "Revista acadêmica que aborda inovações tecnológicas na Bolívia.",
        link: "https://www.ecorfan.org/bolivia/rj_tecnologia_innovacion",
        tags: "Outros Revistas e Livros"
    },
    {
        título: "Revista Brasileira de Ensino de Ciência e Tecnologia",
        descrição: "Publicação científica brasileira focada em ciência e tecnologia.",
        link: "https://periodicos.utfpr.edu.br/rbect",
        tags: "Outros Revistas e Livros"
    },
    {
        título: "Revue d'Intelligence Artificielle",
        descrição: "Revista acadêmica francesa que trata de inteligência artificial.",
        link: "https://www.iieta.org/Journals/RIA",
        tags: "Outros Revistas e Livros"
    },
    {
        título: "Revista Digital de Tecnologias Cognitivas",
        descrição: "Revista brasileira sobre IA e tecnologias cognitivas.",
        link: "https://revistas.pucsp.br/teccogs",
        tags: "Outros Revistas e Livros"
    },
    {
        título: "ChatGPT para o Dia a Dia",
        descrição: "Livro prático sobre o uso do ChatGPT em atividades cotidianas.",
        link: "https://www.casadocodigo.com.br/products/livro-chatgpt?_pos=1&_sid=bb546753b&_ss=r",
        tags: "Outros Revistas e Livros"
    },
    {
        título: "Inteligência Artificial e ChatGPT",
        descrição: "Livro que explora o funcionamento de IA e o ChatGPT.",
        link: "https://www.casadocodigo.com.br/products/livro-inteligencia-artificial-chatgpt?_pos=2&_sid=bb546753b&_ss=r",
        tags: "Outros Revistas e Livros"
    },
    {
        título: "Engenharia de Prompt para Devs",
        descrição: "Guia sobre como utilizar prompts em IA para desenvolvedores.",
        link: "https://www.casadocodigo.com.br/products/livro-engenharia-de-prompt?_pos=2&_sid=067690176&_ss=r",
        tags: "Outros Revistas e Livros"
    },
    {
        título: "Magika",
        descrição: "Ferramenta que detecta e visualiza formatos de arquivos.",
        link: "https://google.github.io/magika/",
        tags: "Outros Ferramenta"
    },
    {
        título: "Responsible AI",
        descrição: "Ferramenta da Google que promove práticas responsáveis no desenvolvimento de IA.",
        link: "https://ai.google.dev/responsible",
        tags: "Outros Ferramenta"
    },
    {
        título: "Copilot for Azure SQL",
        descrição: "Assistente para facilitar o gerenciamento de bancos de dados Azure SQL.",
        link: "https://learn.microsoft.com/en-us/azure/azure-sql/copilot/copilot-azure-sql-overview?view=azuresql",
        tags: "Outros Ferramenta"
    },
    {
        título: "NVIDIA AI Models",
        descrição: "Recurso que oferece modelos de inteligência artificial abertos da NVIDIA.",
        link: "https://www.nvidia.com/en-us/ai/#referrer=ai-subdomain",
        tags: "Outros Ferramenta"
    },
    {
        título: "RAFT Dataset Example",
        descrição: "Exemplo de uso do RAFT, uma combinação de RAG com Fine-Tuning.",
        link: "https://github.com/run-llama/llama_index/blob/main/llama-index-packs/llama-index-packs-raft-dataset/examples/raft_dataset.ipynb",
        tags: "Outros Repositório"
    },
    {
        título: "Open LLMs Repository",
        descrição: "Repositório de modelos de grandes linguagens de código aberto.",
        link: "https://github.com/eugeneyan/open-llms?search=1",
        tags: "Outros Repositório"
    },
    {
        título: "Awesome LLM",
        descrição: "Curadoria de LLMs com ferramentas, cursos e artigos sobre IA.",
        link: "https://github.com/Hannibal046/Awesome-LLM",
        tags: "Outros Repositório"
    },
    {
        título: "Awesome Generative AI",
        descrição: "Repositório de ferramentas de IA generativa categorizadas por contexto.",
        link: "https://github.com/steven2358/awesome-generative-ai",
        tags: "Outros Repositório"
    },
    {
        título: "The Prompt Index",
        descrição: "Banco de prompts variados que podem ser usados em diferentes contextos de IA.",
        link: "https://thepromptindex.com/",
        tags: "Outros Ferramenta"
    },
    {
        título: "PlantUML",
        descrição: "Ferramenta que converte texto em diagramas automáticos.",
        link: "https://plantuml.com/",
        tags: "Outros Ferramenta"
    },
    {
        título: "Giuseppe",
        descrição: "A NotCo, uma empresa que recebeu investimento do Jeff Bezos, utiliza inteligência artificial para criar alimentos de origem vegetal que simulam a cor, textura e o aroma de produtos de origem animal. Eles analisam, através de uma base de dados higienizada e acurada de milhares de artigos científicos sobre alimentação, a composição molecular dos alimentos e encontram equivalentes vegetais.",
        link: "https://notco.com/br/sobre/giuseppe",
        tags: "Outros Iniciativas"
    },
    {
        título: "Earth-2",
        descrição: "A Earth-2, uma iniciativa lançada em setembro de 2022 pela NVIDIA, combina computação acelerada e IA com o objetivo de construir um gêmeo digital da terra para melhorar previsões de eventos climáticos e meteorológicos e ajudar na aceleração do desenvolvimento de estratégias de mitigação dos mesmos com base em simulações e prognósticos detalhados.",
        link: "https://www.nvidia.com/en-us/on-demand/session/gtcfall22-a41326/",
        tags: "Outros Iniciativas"
    },
    {
        título: "BAIgrapher",
        descrição: "O BAIgrapher é uma ferramenta construída em parceria com a Universidade Federal de Ciências da Saúde de Porto Alegre (UFCSPA) de modelagem biomolecular e inteligência artificial. Ela utiliza um modelo de IA treinado em mais de 400 biografias em formato multimodal, com imagem, áudio, texto e outros formatos de documentos para criar narrativas personalizadas com base nas informações fornecidas pelos usuários. Isso pode ajudar pessoas com Alzheimer a manterem sua função cognitiva.",
        link: "https://www.baigrapher.com/#/",
        tags: "Outros Iniciativas"
    }
]
