# SOLID Principles in TypeScript

Um projeto educacional que explora os cinco princípios SOLID aplicados ao desenvolvimento TypeScript, seguindo o curso [JavaScript e TypeScript do Básico ao Avançado](https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/) da Udemy.

## 📖 Sobre o Projeto

Este repositório demonstra a evolução do código de um sistema de carrinho de compras, começando com uma implementação `legacy` (versão inicial) e subsequentemente refatorando-o para aplicar cada um dos cinco princípios SOLID.

## 🏗️ Estrutura do Projeto

```
src/
├── legacy/              # Implementação inicial (versão crua)
├── srp/                 # Single Responsibility Principle
├── ocp/                 # Open/Closed Principle
├── lsp/                 # Liskov Substitution Principle
├── isp/                 # Interface Segregation Principle
└── dip/                 # Dependency Inversion Principle
```

## 🎯 Princípios SOLID

### **S** - Single Responsibility Principle (SRP)
Cada classe deve ter uma única responsabilidade e motivo para mudar.

- Localização: `src/srp/`
- Foco: Separação de responsabilidades nas entidades do sistema

### **O** - Open/Closed Principle (OCP)
Classes devem estar abertas para extensão, mas fechadas para modificação.

- Localização: `src/ocp/`
- Foco: Uso de abstrações para permitir novas funcionalidades sem alterar código existente

### **L** - Liskov Substitution Principle (LSP)
Objetos de classes derivadas devem poder substituir objetos da classe base sem quebrar a aplicação.

- Localização: `src/lsp/`
- Foco: Garantir que subclasses respeitem o contrato da classe base

### **I** - Interface Segregation Principle (ISP)
Clientes não devem depender de interfaces que não utilizam.

- Localização: `src/isp/`
- Foco: Criar interfaces específicas ao invés de interfaces genéricas

### **D** - Dependency Inversion Principle (DIP)
Depender de abstrações, não de implementações concretas.

- Localização: `src/dip/`
- Foco: Inversão de controle e injeção de dependências

## 🚀 Como Usar

### Instalação
```bash
npm install
```

### Testando Cada Módulo SOLID

Cada pasta dentro de `src/` (srp, ocp, lsp, isp, dip) contém um arquivo `main.ts` com exemplos de uso.

**Opção 1: Code Runner (Recomendado para teste individual)**
- Abra qualquer arquivo `main.ts` (ex: `src/srp/main.ts`)
- Clique com o botão direito e selecione "Run Code" (ou use a extensão Code Runner)
- O arquivo será executado e você verá a saída no painel de output

**Opção 2: Linha de comando**
```bash
# Executar um arquivo específico
npx tsx src/srp/main.ts
npx tsx src/ocp/main.ts
npx tsx src/lsp/main.ts
# ... e assim por diante
```

### Build e Compilação
```bash
npm run build
```

### Lint e Formatação
```bash
npm run lint
npm run format
```

## 📂 Estrutura de Cada Módulo

Cada pasta (SRP, OCP, LSP, ISP, DIP) contém:

- `main.ts` - Arquivo de entrada mostrando o uso do módulo
- `classes/` - Implementações das classes de negócio
- `interfaces/` - Contratos/protocolos das classes
- `services/` - Serviços como persistência e mensageria

## 🎓 Objetivos de Aprendizado

Este projeto foi desenvolvido com o objetivo de **aprofundar conhecimentos em TypeScript e nos princípios SOLID**, buscando um crescimento profissional sólido. Através da análise comparativa entre o código `legacy` e as refatorações SOLID, busca-se:

- **Compreender arquitetura de sistemas**: Aplicar padrões que facilitam a manutenção, extensibilidade e escalabilidade de projetos maiores
- **Absorver boas práticas**: Aprender quando e como aplicar cada princípio para resolver problemas reais de design
- **Dominar TypeScript**: Utilizar o type system para criar código mais seguro e autodocumentado
- **Preparar-se para cenários profissionais**: Reconhecer violações de SOLID em código existente e refatorar com confiança

## 📚 Conceitos Demonstrados

Este projeto demonstra como:
- Evitar violações dos princípios SOLID
- Refatorar código legado aplicando boas práticas
- Construir arquiteturas mais maintíveis e escaláveis
- Utilizar TypeScript para implementar SOLID patterns com type safety

## 📝 Referência

- Curso: [JavaScript e TypeScript do Básico ao Avançado](https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/)
- Linguagem: TypeScript
- Runtime: Node.js (via tsx)

---

**Nota:** Compare as implementações entre a pasta `legacy/` e os diferentes princípios SOLID para entender a evolução e os benefícios de cada padrão.
