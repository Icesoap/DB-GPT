/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  docs: [
    {
      type: "doc", 
      id: "overview",
      label: "Overview"
    },

    {
      type: "doc", 
      id: "quickstart",
      label: "Quickstart",
      
    },
    {
      type: "doc", 
      id: "awel",
    },

    {
      type: "category",
      label: "Installation",
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'installation/sourcecode',
        },
        {
          type: 'doc',
          id: 'installation/docker',
        },
        {
          type: 'doc',
          id: 'installation/docker_compose',
        },
        {
          type: 'category',
          label: 'Model Service Deployment',
          items: [
            {
              type: 'doc',
              id: 'installation/model_service/stand_alone',
            },
            {
              type: 'doc',
              id: 'installation/model_service/cluster',
            },
          ],
        },
        {
          type: 'category',
          label: 'Adanced Usage',
          items: [
            {
              type: 'doc',
              id: 'installation/advanced_usage/vLLM_inference',
            },
            {
              type: 'doc',
              id: 'installation/advanced_usage/OpenAI_SDK_call',
            },
          ],
        },


      ],
      link: {
        type: 'generated-index',
        description: 'DB-GPT provides a wealth of installation and deployment options, supporting source code deployment, Docker deployment, cluster deployment and other modes. At the same time, it can also be deployed and installed based on the AutoDL image.',
        slug: "installation",
      },
    },

    {
      type: "category",
      label: "Application",
      collapsed: false,
      collapsible: false,
      items: [

        {
          type: 'category',
          label: 'Getting Started Tutorial',
          items: [
            {
              type: 'doc',
              id: 'application/started_tutorial/chat_knowledge',
            },
            {
              type: 'doc',
              id: 'application/started_tutorial/chat_data',
            },
            {
              type: 'doc',
              id: 'application/started_tutorial/chat_excel',
            },
            {
              type: 'doc',
              id: 'application/started_tutorial/chat_db',
            },
            {
              type: 'doc',
              id: 'application/started_tutorial/chat_dashboard',
            },
            {
              type: 'doc',
              id: 'application/started_tutorial/agent',
            },
          ],
        },
        {
          type: 'category',
          label: 'Advanced Tutorial',
          items: [
            {
              type: 'doc',
              id: 'application/advanced_tutorial/rag',
            },
            {
              type: 'doc',
              id: 'application/advanced_tutorial/smmf',
            },
            {
              type: 'doc',
              id: 'application/advanced_tutorial/debugging',
            },
          ],
        },
        {
          type: 'category',
          label: 'Fine Tuning Manual',
          items: [
            {
              type: 'doc',
              id: 'application/fine_tuning_manual/text_to_sql',
            },
          ],
        },
      ],
      link: {
        type: 'generated-index',
        slug: "application",
      },
    },

    {
      type: "category",
      label: "Modules",
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'modules/smmf',
        },
        {
          type: 'doc',
          id: 'modules/rag',
        },
        {
          type: 'doc',
          id: 'modules/agent',
        },
        {
          type: 'doc',
          id: 'modules/fine_tuning',
        },
        {
          type: 'doc',
          id: 'modules/eval',
        },
        {
          type: 'doc',
          id: 'modules/connections',
        },
        {
          type: 'doc',
          id: 'modules/visual',
        },
        
      ],
    },

    {
      type: "doc",
      id:"faq"
    },
    
    {
      type: "category",
      label: "ChangeLog",
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'changelog/doc',
        },
      ],
  
    },

    {
      type: "doc", 
      id: "use_cases",
      label: "Use Cases"
    },
  ]
};


module.exports = sidebars;
