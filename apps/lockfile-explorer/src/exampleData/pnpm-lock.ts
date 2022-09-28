export const tempLockfile = `
lockfileVersion: 5.3

importers:

  .:
    specifiers: {}

  ../../plugins/rehype-headerless-table-plugin:
    specifiers:
      '@rushstack/heft': ~0.47.2
      '@rushstack/heft-node-rig': ~1.10.2
      '@types/heft-jest': ~1.0.3
      '@types/node': 14.18.23
      '@types/unist': ~2.0.6
      typescript: ~4.7.4
      unist-util-visit: ^2.0.3
    dependencies:
      unist-util-visit: 2.0.3
    devDependencies:
      '@rushstack/heft': 0.47.9
      '@rushstack/heft-node-rig': 1.10.11_@rushstack+heft@0.47.9
      '@types/heft-jest': 1.0.3
      '@types/node': 14.18.23
      '@types/unist': 2.0.6
      typescript: 4.7.4

  ../../plugins/remark-canonical-link-plugin:
    specifiers:
      '@rushstack/heft': ~0.47.2
      '@rushstack/heft-node-rig': ~1.10.2
      '@types/heft-jest': ~1.0.3
      '@types/node': 14.18.23
      '@types/unist': ~2.0.6
      typescript: ~4.7.4
      unist-util-visit: ^2.0.3
    dependencies:
      unist-util-visit: 2.0.3
    devDependencies:
      '@rushstack/heft': 0.47.9
      '@rushstack/heft-node-rig': 1.10.11_@rushstack+heft@0.47.9
      '@types/heft-jest': 1.0.3
      '@types/node': 14.18.23
      '@types/unist': 2.0.6
      typescript: 4.7.4

  ../../plugins/remark-cross-site-link-plugin:
    specifiers:
      '@rushstack/heft': ~0.47.2
      '@rushstack/heft-node-rig': ~1.10.2
      '@types/heft-jest': ~1.0.3
      '@types/node': 14.18.23
      '@types/unist': ~2.0.6
      typescript: ~4.7.4
      unist-util-visit: ^2.0.3
    dependencies:
      unist-util-visit: 2.0.3
    devDependencies:
      '@rushstack/heft': 0.47.9
      '@rushstack/heft-node-rig': 1.10.11_@rushstack+heft@0.47.9
      '@types/heft-jest': 1.0.3
      '@types/node': 14.18.23
      '@types/unist': 2.0.6
      typescript: 4.7.4

  ../../plugins/theme-rushstack-suite-nav:
    specifiers:
      '@docusaurus/core': 2.0.1
      '@docusaurus/types': 2.0.1
      '@rushstack/heft': ~0.47.2
      '@rushstack/heft-web-rig': ~0.11.2
      '@types/heft-jest': ~1.0.3
      '@types/node': 14.18.23
      '@types/react': ^17.0.2
      '@types/react-dom': ^17.0.2
      react: ^17.0.2
      react-dom: ^17.0.2
      tslib: ^2.4.0
      typescript: ~4.7.4
    dependencies:
      '@docusaurus/core': 2.0.1_03b15cadcc31ab8446516aafa5c14946
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
      tslib: 2.4.0
    devDependencies:
      '@docusaurus/types': 2.0.1_react-dom@17.0.2+react@17.0.2
      '@rushstack/heft': 0.47.9
      '@rushstack/heft-web-rig': 0.11.11_@rushstack+heft@0.47.9
      '@types/heft-jest': 1.0.3
      '@types/node': 14.18.23
      '@types/react': 17.0.50
      '@types/react-dom': 17.0.17
      typescript: 4.7.4

  ../../tools/api-documenter-docusaurus-plugin:
    specifiers:
      '@microsoft/api-documenter': ~7.19.4
      '@microsoft/api-extractor-model': ~7.23.0
      '@microsoft/tsdoc': ~0.14.1
      '@rushstack/eslint-config': ~3.0.0
      '@rushstack/heft': ~0.47.2
      '@rushstack/heft-node-rig': ~1.10.2
      '@rushstack/node-core-library': ~3.50.1
      '@types/node': 14.18.23
      eslint: ~8.21.0
      typescript: ~4.7.4
    dependencies:
      '@microsoft/api-documenter': 7.19.13
      '@microsoft/api-extractor-model': 7.23.3
      '@microsoft/tsdoc': 0.14.2
      '@rushstack/node-core-library': 3.50.2
    devDependencies:
      '@rushstack/eslint-config': 3.0.1_eslint@8.21.0+typescript@4.7.4
      '@rushstack/heft': 0.47.9
      '@rushstack/heft-node-rig': 1.10.11_@rushstack+heft@0.47.9
      '@types/node': 14.18.23
      eslint: 8.21.0
      typescript: 4.7.4

  ../../tools/deploy-fork:
    specifiers:
      '@docusaurus/core': 2.0.1
      '@rushstack/node-core-library': ~3.50.1
      api.rushstack.io: workspace:*
      react: ^17.0.2
      react-dom: ^17.0.2
      rushjs.io: workspace:*
      rushstack.io: workspace:*
      site-config: workspace:*
      typescript: ~4.7.4
    dependencies:
      api.rushstack.io: link:../../websites/api.rushstack.io
      rushjs.io: link:../../websites/rushjs.io
      rushstack.io: link:../../websites/rushstack.io
      site-config: link:../site-config
    devDependencies:
      '@docusaurus/core': 2.0.1_dccc44159aab2d15be0b73def9353315
      '@rushstack/node-core-library': 3.50.2
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
      typescript: 4.7.4

  ../../tools/site-config:
    specifiers: {}

  ../../websites/api.rushstack.io:
    specifiers:
      '@algolia/client-search': ~4.14.2
      '@babel/core': ~7.18.10
      '@babel/runtime': ~7.17.9
      '@docusaurus/core': 2.0.1
      '@docusaurus/preset-classic': 2.0.1
      '@docusaurus/theme-common': 2.0.1
      '@mdx-js/react': ~1.6.22
      '@microsoft/api-documenter': ~7.19.4
      '@rushstack/node-core-library': ~3.50.1
      '@svgr/webpack': ~6.3.1
      '@types/js-cookie': 3.0.2
      '@types/react': ^17.0.2
      '@types/react-dom': ^17.0.2
      algoliasearch: ~4.14.2
      api-documenter-docusaurus-plugin: workspace:*
      clsx: ~1.2.1
      dayjs: ~1.11.4
      docusaurus-theme-search-typesense: ~0.5.3
      file-loader: ^6.2.0
      js-cookie: ~3.0.1
      prism-react-renderer: ~1.3.5
      react: ^17.0.2
      react-dom: ^17.0.2
      rehype-headerless-table-plugin: workspace:*
      remark-canonical-link-plugin: workspace:*
      remark-cross-site-link-plugin: workspace:*
      site-config: workspace:*
      theme-rushstack-suite-nav: workspace:*
      typescript: ~4.7.4
      url-loader: ^4.1.1
      webpack: ~5.72.0
    dependencies:
      '@docusaurus/core': 2.0.1_dccc44159aab2d15be0b73def9353315
      '@docusaurus/preset-classic': 2.0.1_9d6b0445b2f7e7c4255e4576e99c0a82
      '@docusaurus/theme-common': 2.0.1_dccc44159aab2d15be0b73def9353315
      '@mdx-js/react': 1.6.22_react@17.0.2
      '@svgr/webpack': 6.3.1
      clsx: 1.2.1
      dayjs: 1.11.5
      docusaurus-theme-search-typesense: 0.5.3_a497cd86c622cab23fc44f1544f76cd7
      file-loader: 6.2.0_webpack@5.72.1
      js-cookie: 3.0.1
      prism-react-renderer: 1.3.5_react@17.0.2
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
      theme-rushstack-suite-nav: link:../../plugins/theme-rushstack-suite-nav
      url-loader: 4.1.1_file-loader@6.2.0+webpack@5.72.1
    devDependencies:
      '@algolia/client-search': 4.14.2
      '@babel/core': 7.18.13
      '@babel/runtime': 7.17.9
      '@microsoft/api-documenter': 7.19.13
      '@rushstack/node-core-library': 3.50.2
      '@types/js-cookie': 3.0.2
      '@types/react': 17.0.50
      '@types/react-dom': 17.0.17
      algoliasearch: 4.14.2
      api-documenter-docusaurus-plugin: link:../../tools/api-documenter-docusaurus-plugin
      rehype-headerless-table-plugin: link:../../plugins/rehype-headerless-table-plugin
      remark-canonical-link-plugin: link:../../plugins/remark-canonical-link-plugin
      remark-cross-site-link-plugin: link:../../plugins/remark-cross-site-link-plugin
      site-config: link:../../tools/site-config
      typescript: 4.7.4
      webpack: 5.72.1

  ../../websites/rushjs.io:
    specifiers:
      '@algolia/client-search': ~4.14.2
      '@babel/core': ~7.18.10
      '@babel/runtime': ~7.17.9
      '@docusaurus/core': 2.0.1
      '@docusaurus/preset-classic': 2.0.1
      '@docusaurus/theme-common': 2.0.1
      '@mdx-js/react': ~1.6.22
      '@svgr/webpack': ~6.3.1
      '@types/js-cookie': 3.0.2
      '@types/react': ^17.0.2
      '@types/react-dom': ^17.0.2
      algoliasearch: ~4.14.2
      clsx: ~1.2.1
      dayjs: ~1.11.4
      docusaurus-theme-search-typesense: ~0.5.3
      file-loader: ^6.2.0
      js-cookie: ~3.0.1
      prism-react-renderer: ~1.3.5
      react: ^17.0.2
      react-dom: ^17.0.2
      rehype-headerless-table-plugin: workspace:*
      remark-canonical-link-plugin: workspace:*
      remark-cross-site-link-plugin: workspace:*
      site-config: workspace:*
      theme-rushstack-suite-nav: workspace:*
      tslib: ^2.4.0
      typescript: ~4.7.4
      url-loader: ^4.1.1
      webpack: ~5.72.0
    dependencies:
      '@docusaurus/core': 2.0.1_dccc44159aab2d15be0b73def9353315
      '@docusaurus/preset-classic': 2.0.1_9d6b0445b2f7e7c4255e4576e99c0a82
      '@docusaurus/theme-common': 2.0.1_dccc44159aab2d15be0b73def9353315
      '@mdx-js/react': 1.6.22_react@17.0.2
      '@svgr/webpack': 6.3.1
      clsx: 1.2.1
      dayjs: 1.11.5
      docusaurus-theme-search-typesense: 0.5.3_a497cd86c622cab23fc44f1544f76cd7
      file-loader: 6.2.0_webpack@5.72.1
      js-cookie: 3.0.1
      prism-react-renderer: 1.3.5_react@17.0.2
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
      theme-rushstack-suite-nav: link:../../plugins/theme-rushstack-suite-nav
      tslib: 2.4.0
      url-loader: 4.1.1_file-loader@6.2.0+webpack@5.72.1
    devDependencies:
      '@algolia/client-search': 4.14.2
      '@babel/core': 7.18.13
      '@babel/runtime': 7.17.9
      '@types/js-cookie': 3.0.2
      '@types/react': 17.0.50
      '@types/react-dom': 17.0.17
      algoliasearch: 4.14.2
      rehype-headerless-table-plugin: link:../../plugins/rehype-headerless-table-plugin
      remark-canonical-link-plugin: link:../../plugins/remark-canonical-link-plugin
      remark-cross-site-link-plugin: link:../../plugins/remark-cross-site-link-plugin
      site-config: link:../../tools/site-config
      typescript: 4.7.4
      webpack: 5.72.1

  ../../websites/rushstack.io:
    specifiers:
      '@algolia/client-search': ~4.14.2
      '@babel/core': ~7.18.10
      '@babel/runtime': ~7.17.9
      '@docusaurus/core': 2.0.1
      '@docusaurus/preset-classic': 2.0.1
      '@docusaurus/theme-common': 2.0.1
      '@mdx-js/react': ~1.6.22
      '@svgr/webpack': ~6.3.1
      '@types/history': 5.0.0
      '@types/js-cookie': 3.0.2
      '@types/react': ^17.0.2
      '@types/react-dom': ^17.0.2
      '@types/react-router-dom': ^5.3.3
      algoliasearch: ~4.14.2
      clsx: ~1.2.1
      dayjs: ~1.11.4
      docusaurus-theme-search-typesense: ~0.5.3
      file-loader: ^6.2.0
      js-cookie: ~3.0.1
      prism-react-renderer: ~1.3.5
      react: ^17.0.2
      react-dom: ^17.0.2
      rehype-headerless-table-plugin: workspace:*
      remark-canonical-link-plugin: workspace:*
      remark-cross-site-link-plugin: workspace:*
      site-config: workspace:*
      theme-rushstack-suite-nav: workspace:*
      tslib: ^2.4.0
      typescript: ~4.7.4
      url-loader: ^4.1.1
      webpack: ~5.72.0
    dependencies:
      '@docusaurus/core': 2.0.1_dccc44159aab2d15be0b73def9353315
      '@docusaurus/preset-classic': 2.0.1_9d6b0445b2f7e7c4255e4576e99c0a82
      '@docusaurus/theme-common': 2.0.1_dccc44159aab2d15be0b73def9353315
      '@mdx-js/react': 1.6.22_react@17.0.2
      '@svgr/webpack': 6.3.1
      clsx: 1.2.1
      dayjs: 1.11.5
      docusaurus-theme-search-typesense: 0.5.3_a497cd86c622cab23fc44f1544f76cd7
      file-loader: 6.2.0_webpack@5.72.1
      js-cookie: 3.0.1
      prism-react-renderer: 1.3.5_react@17.0.2
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
      theme-rushstack-suite-nav: link:../../plugins/theme-rushstack-suite-nav
      tslib: 2.4.0
      url-loader: 4.1.1_file-loader@6.2.0+webpack@5.72.1
    devDependencies:
      '@algolia/client-search': 4.14.2
      '@babel/core': 7.18.13
      '@babel/runtime': 7.17.9
      '@types/history': 5.0.0
      '@types/js-cookie': 3.0.2
      '@types/react': 17.0.50
      '@types/react-dom': 17.0.17
      '@types/react-router-dom': 5.3.3
      algoliasearch: 4.14.2
      rehype-headerless-table-plugin: link:../../plugins/rehype-headerless-table-plugin
      remark-canonical-link-plugin: link:../../plugins/remark-canonical-link-plugin
      remark-cross-site-link-plugin: link:../../plugins/remark-cross-site-link-plugin
      site-config: link:../../tools/site-config
      typescript: 4.7.4
      webpack: 5.72.1

packages:

  /@algolia/autocomplete-core/1.7.1:
    resolution: {integrity: sha512-eiZw+fxMzNQn01S8dA/hcCpoWCOCwcIIEUtHHdzN5TGB3IpzLbuhqFeTfh2OUhhgkE8Uo17+wH+QJ/wYyQmmzg==}
    dependencies:
      '@algolia/autocomplete-shared': 1.7.1
    dev: false

  /@algolia/autocomplete-preset-algolia/1.7.1_84bcb575a7c193a76ce9e48bebb63fd7:
    resolution: {integrity: sha512-pJwmIxeJCymU1M6cGujnaIYcY3QPOVYZOXhFkWVM7IxKzy272BwCvMFMyc5NpG/QmiObBxjo7myd060OeTNJXg==}
    peerDependencies:
      '@algolia/client-search': ^4.9.1
      algoliasearch: ^4.9.1
    dependencies:
      '@algolia/autocomplete-shared': 1.7.1
      '@algolia/client-search': 4.14.2
      algoliasearch: 4.14.2
    dev: false

  /@algolia/autocomplete-shared/1.7.1:
    resolution: {integrity: sha512-eTmGVqY3GeyBTT8IWiB2K5EuURAqhnumfktAEoHxfDY2o7vg2rSnO16ZtIG0fMgt3py28Vwgq42/bVEuaQV7pg==}
    dev: false

  /@algolia/cache-browser-local-storage/4.14.2:
    resolution: {integrity: sha512-FRweBkK/ywO+GKYfAWbrepewQsPTIEirhi1BdykX9mxvBPtGNKccYAxvGdDCumU1jL4r3cayio4psfzKMejBlA==}
    dependencies:
      '@algolia/cache-common': 4.14.2

  /@algolia/cache-common/4.14.2:
    resolution: {integrity: sha512-SbvAlG9VqNanCErr44q6lEKD2qoK4XtFNx9Qn8FK26ePCI8I9yU7pYB+eM/cZdS9SzQCRJBbHUumVr4bsQ4uxg==}

  /@algolia/cache-in-memory/4.14.2:
    resolution: {integrity: sha512-HrOukWoop9XB/VFojPv1R5SVXowgI56T9pmezd/djh2JnVN/vXswhXV51RKy4nCpqxyHt/aGFSq2qkDvj6KiuQ==}
    dependencies:
      '@algolia/cache-common': 4.14.2

  /@algolia/client-account/4.14.2:
    resolution: {integrity: sha512-WHtriQqGyibbb/Rx71YY43T0cXqyelEU0lB2QMBRXvD2X0iyeGl4qMxocgEIcbHyK7uqE7hKgjT8aBrHqhgc1w==}
    dependencies:
      '@algolia/client-common': 4.14.2
      '@algolia/client-search': 4.14.2
      '@algolia/transporter': 4.14.2

  /@algolia/client-analytics/4.14.2:
    resolution: {integrity: sha512-yBvBv2mw+HX5a+aeR0dkvUbFZsiC4FKSnfqk9rrfX+QrlNOKEhCG0tJzjiOggRW4EcNqRmaTULIYvIzQVL2KYQ==}
    dependencies:
      '@algolia/client-common': 4.14.2
      '@algolia/client-search': 4.14.2
      '@algolia/requester-common': 4.14.2
      '@algolia/transporter': 4.14.2

  /@algolia/client-common/4.14.2:
    resolution: {integrity: sha512-43o4fslNLcktgtDMVaT5XwlzsDPzlqvqesRi4MjQz2x4/Sxm7zYg5LRYFol1BIhG6EwxKvSUq8HcC/KxJu3J0Q==}
    dependencies:
      '@algolia/requester-common': 4.14.2
      '@algolia/transporter': 4.14.2

  /@algolia/client-personalization/4.14.2:
    resolution: {integrity: sha512-ACCoLi0cL8CBZ1W/2juehSltrw2iqsQBnfiu/Rbl9W2yE6o2ZUb97+sqN/jBqYNQBS+o0ekTMKNkQjHHAcEXNw==}
    dependencies:
      '@algolia/client-common': 4.14.2
      '@algolia/requester-common': 4.14.2
      '@algolia/transporter': 4.14.2

  /@algolia/client-search/4.14.2:
    resolution: {integrity: sha512-L5zScdOmcZ6NGiVbLKTvP02UbxZ0njd5Vq9nJAmPFtjffUSOGEp11BmD2oMJ5QvARgx2XbX4KzTTNS5ECYIMWw==}
    dependencies:
      '@algolia/client-common': 4.14.2
      '@algolia/requester-common': 4.14.2
      '@algolia/transporter': 4.14.2

  /@algolia/events/4.0.1:
    resolution: {integrity: sha512-FQzvOCgoFXAbf5Y6mYozw2aj5KCJoA3m4heImceldzPSMbdyS4atVjJzXKMsfX3wnZTFYwkkt8/z8UesLHlSBQ==}
    dev: false

  /@algolia/logger-common/4.14.2:
    resolution: {integrity: sha512-/JGlYvdV++IcMHBnVFsqEisTiOeEr6cUJtpjz8zc0A9c31JrtLm318Njc72p14Pnkw3A/5lHHh+QxpJ6WFTmsA==}

  /@algolia/logger-console/4.14.2:
    resolution: {integrity: sha512-8S2PlpdshbkwlLCSAB5f8c91xyc84VM9Ar9EdfE9UmX+NrKNYnWR1maXXVDQQoto07G1Ol/tYFnFVhUZq0xV/g==}
    dependencies:
      '@algolia/logger-common': 4.14.2

  /@algolia/requester-browser-xhr/4.14.2:
    resolution: {integrity: sha512-CEh//xYz/WfxHFh7pcMjQNWgpl4wFB85lUMRyVwaDPibNzQRVcV33YS+63fShFWc2+42YEipFGH2iPzlpszmDw==}
    dependencies:
      '@algolia/requester-common': 4.14.2

  /@algolia/requester-common/4.14.2:
    resolution: {integrity: sha512-73YQsBOKa5fvVV3My7iZHu1sUqmjjfs9TteFWwPwDmnad7T0VTCopttcsM3OjLxZFtBnX61Xxl2T2gmG2O4ehg==}

  /@algolia/requester-node-http/4.14.2:
    resolution: {integrity: sha512-oDbb02kd1o5GTEld4pETlPZLY0e+gOSWjWMJHWTgDXbv9rm/o2cF7japO6Vj1ENnrqWvLBmW1OzV9g6FUFhFXg==}
    dependencies:
      '@algolia/requester-common': 4.14.2

  /@algolia/transporter/4.14.2:
    resolution: {integrity: sha512-t89dfQb2T9MFQHidjHcfhh6iGMNwvuKUvojAj+JsrHAGbuSy7yE4BylhLX6R0Q1xYRoC4Vvv+O5qIw/LdnQfsQ==}
    dependencies:
      '@algolia/cache-common': 4.14.2
      '@algolia/logger-common': 4.14.2
      '@algolia/requester-common': 4.14.2

  /@ampproject/remapping/2.2.0:
    resolution: {integrity: sha512-qRmjj8nj9qmLTQXXmaR1cck3UXSRMPrbsLJAasZpF+t3riI71BXed5ebIOYwQntykeZuhjsdweEc9BxH5Jc26w==}
    engines: {node: '>=6.0.0'}
    dependencies:
      '@jridgewell/gen-mapping': 0.1.1
      '@jridgewell/trace-mapping': 0.3.15

  /@babel/code-frame/7.18.6:
    resolution: {integrity: sha512-TDCmlK5eOvH+eH7cdAFlNXeVJqWIQ7gW9tY1GJIpUtFb6CmjVyq2VM3u71bOyR8CRihcCgMUYoDNyLXao3+70Q==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/highlight': 7.18.6

  /@babel/compat-data/7.19.1:
    resolution: {integrity: sha512-72a9ghR0gnESIa7jBN53U32FOVCEoztyIlKaNoU05zRhEecduGK9L9c3ww7Mp06JiR+0ls0GBPFJQwwtjn9ksg==}
    engines: {node: '>=6.9.0'}

  /@babel/core/7.12.9:
    resolution: {integrity: sha512-gTXYh3M5wb7FRXQy+FErKFAv90BnlOuNn1QkCK2lREoPAjrQCO49+HVSrFoe5uakFAF5eenS75KbO2vQiLrTMQ==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/code-frame': 7.18.6
      '@babel/generator': 7.19.0
      '@babel/helper-module-transforms': 7.19.0
      '@babel/helpers': 7.19.0
      '@babel/parser': 7.19.1
      '@babel/template': 7.18.10
      '@babel/traverse': 7.19.1
      '@babel/types': 7.19.0
      convert-source-map: 1.8.0
      debug: 4.3.4
      gensync: 1.0.0-beta.2
      json5: 2.2.1
      lodash: 4.17.21
      resolve: 1.22.1
      semver: 5.7.1
      source-map: 0.5.7
    transitivePeerDependencies:
      - supports-color

  /@babel/core/7.18.13:
    resolution: {integrity: sha512-ZisbOvRRusFktksHSG6pjj1CSvkPkcZq/KHD45LAkVP/oiHJkNBZWfpvlLmX8OtHDG8IuzsFlVRWo08w7Qxn0A==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@ampproject/remapping': 2.2.0
      '@babel/code-frame': 7.18.6
      '@babel/generator': 7.19.0
      '@babel/helper-compilation-targets': 7.19.1_@babel+core@7.18.13
      '@babel/helper-module-transforms': 7.19.0
      '@babel/helpers': 7.19.0
      '@babel/parser': 7.19.1
      '@babel/template': 7.18.10
      '@babel/traverse': 7.19.1
      '@babel/types': 7.19.0
      convert-source-map: 1.8.0
      debug: 4.3.4
      gensync: 1.0.0-beta.2
      json5: 2.2.1
      semver: 6.3.0
    transitivePeerDependencies:
      - supports-color

  /@babel/generator/7.19.0:
    resolution: {integrity: sha512-S1ahxf1gZ2dpoiFgA+ohK9DIpz50bJ0CWs7Zlzb54Z4sG8qmdIrGrVqmy1sAtTVRb+9CU6U8VqT9L0Zj7hxHVg==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/types': 7.19.0
      '@jridgewell/gen-mapping': 0.3.2
      jsesc: 2.5.2

  /@babel/helper-annotate-as-pure/7.18.6:
    resolution: {integrity: sha512-duORpUiYrEpzKIop6iNbjnwKLAKnJ47csTyRACyEmWj0QdUrm5aqNJGHSSEQSUAvNW0ojX0dOmK9dZduvkfeXA==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/types': 7.19.0

  /@babel/helper-builder-binary-assignment-operator-visitor/7.18.9:
    resolution: {integrity: sha512-yFQ0YCHoIqarl8BCRwBL8ulYUaZpz3bNsA7oFepAzee+8/+ImtADXNOmO5vJvsPff3qi+hvpkY/NYBTrBQgdNw==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/helper-explode-assignable-expression': 7.18.6
      '@babel/types': 7.19.0

  /@babel/helper-compilation-targets/7.19.1_@babel+core@7.18.13:
    resolution: {integrity: sha512-LlLkkqhCMyz2lkQPvJNdIYU7O5YjWRgC2R4omjCTpZd8u8KMQzZvX4qce+/BluN1rcQiV7BoGUpmQ0LeHerbhg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0
    dependencies:
      '@babel/compat-data': 7.19.1
      '@babel/core': 7.18.13
      '@babel/helper-validator-option': 7.18.6
      browserslist: 4.21.4
      semver: 6.3.0

  /@babel/helper-create-class-features-plugin/7.19.0_@babel+core@7.18.13:
    resolution: {integrity: sha512-NRz8DwF4jT3UfrmUoZjd0Uph9HQnP30t7Ash+weACcyNkiYTywpIjDBgReJMKgr+n86sn2nPVVmJ28Dm053Kqw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-annotate-as-pure': 7.18.6
      '@babel/helper-environment-visitor': 7.18.9
      '@babel/helper-function-name': 7.19.0
      '@babel/helper-member-expression-to-functions': 7.18.9
      '@babel/helper-optimise-call-expression': 7.18.6
      '@babel/helper-replace-supers': 7.19.1
      '@babel/helper-split-export-declaration': 7.18.6
    transitivePeerDependencies:
      - supports-color

  /@babel/helper-create-regexp-features-plugin/7.19.0_@babel+core@7.18.13:
    resolution: {integrity: sha512-htnV+mHX32DF81amCDrwIDr8nrp1PTm+3wfBN9/v8QJOLEioOCOG7qNyq0nHeFiWbT3Eb7gsPwEmV64UCQ1jzw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-annotate-as-pure': 7.18.6
      regexpu-core: 5.2.1

  /@babel/helper-define-polyfill-provider/0.3.3_@babel+core@7.18.13:
    resolution: {integrity: sha512-z5aQKU4IzbqCC1XH0nAqfsFLMVSo22SBKUc0BxGrLkolTdPTructy0ToNnlO2zA4j9Q/7pjMZf0DSY+DSTYzww==}
    peerDependencies:
      '@babel/core': ^7.4.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-compilation-targets': 7.19.1_@babel+core@7.18.13
      '@babel/helper-plugin-utils': 7.19.0
      debug: 4.3.4
      lodash.debounce: 4.0.8
      resolve: 1.22.1
      semver: 6.3.0
    transitivePeerDependencies:
      - supports-color

  /@babel/helper-environment-visitor/7.18.9:
    resolution: {integrity: sha512-3r/aACDJ3fhQ/EVgFy0hpj8oHyHpQc+LPtJoY9SzTThAsStm4Ptegq92vqKoE3vD706ZVFWITnMnxucw+S9Ipg==}
    engines: {node: '>=6.9.0'}

  /@babel/helper-explode-assignable-expression/7.18.6:
    resolution: {integrity: sha512-eyAYAsQmB80jNfg4baAtLeWAQHfHFiR483rzFK+BhETlGZaQC9bsfrugfXDCbRHLQbIA7U5NxhhOxN7p/dWIcg==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/types': 7.19.0

  /@babel/helper-function-name/7.19.0:
    resolution: {integrity: sha512-WAwHBINyrpqywkUH0nTnNgI5ina5TFn85HKS0pbPDfxFfhyR/aNQEn4hGi1P1JyT//I0t4OgXUlofzWILRvS5w==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/template': 7.18.10
      '@babel/types': 7.19.0

  /@babel/helper-hoist-variables/7.18.6:
    resolution: {integrity: sha512-UlJQPkFqFULIcyW5sbzgbkxn2FKRgwWiRexcuaR8RNJRy8+LLveqPjwZV/bwrLZCN0eUHD/x8D0heK1ozuoo6Q==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/types': 7.19.0

  /@babel/helper-member-expression-to-functions/7.18.9:
    resolution: {integrity: sha512-RxifAh2ZoVU67PyKIO4AMi1wTenGfMR/O/ae0CCRqwgBAt5v7xjdtRw7UoSbsreKrQn5t7r89eruK/9JjYHuDg==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/types': 7.19.0

  /@babel/helper-module-imports/7.18.6:
    resolution: {integrity: sha512-0NFvs3VkuSYbFi1x2Vd6tKrywq+z/cLeYC/RJNFrIX/30Bf5aiGYbtvGXolEktzJH8o5E5KJ3tT+nkxuuZFVlA==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/types': 7.19.0

  /@babel/helper-module-transforms/7.19.0:
    resolution: {integrity: sha512-3HBZ377Fe14RbLIA+ac3sY4PTgpxHVkFrESaWhoI5PuyXPBBX8+C34qblV9G89ZtycGJCmCI/Ut+VUDK4bltNQ==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/helper-environment-visitor': 7.18.9
      '@babel/helper-module-imports': 7.18.6
      '@babel/helper-simple-access': 7.18.6
      '@babel/helper-split-export-declaration': 7.18.6
      '@babel/helper-validator-identifier': 7.19.1
      '@babel/template': 7.18.10
      '@babel/traverse': 7.19.1
      '@babel/types': 7.19.0
    transitivePeerDependencies:
      - supports-color

  /@babel/helper-optimise-call-expression/7.18.6:
    resolution: {integrity: sha512-HP59oD9/fEHQkdcbgFCnbmgH5vIQTJbxh2yf+CdM89/glUNnuzr87Q8GIjGEnOktTROemO0Pe0iPAYbqZuOUiA==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/types': 7.19.0

  /@babel/helper-plugin-utils/7.10.4:
    resolution: {integrity: sha512-O4KCvQA6lLiMU9l2eawBPMf1xPP8xPfB3iEQw150hOVTqj/rfXz0ThTb4HEzqQfs2Bmo5Ay8BzxfzVtBrr9dVg==}

  /@babel/helper-plugin-utils/7.19.0:
    resolution: {integrity: sha512-40Ryx7I8mT+0gaNxm8JGTZFUITNqdLAgdg0hXzeVZxVD6nFsdhQvip6v8dqkRHzsz1VFpFAaOCHNn0vKBL7Czw==}
    engines: {node: '>=6.9.0'}

  /@babel/helper-remap-async-to-generator/7.18.9_@babel+core@7.18.13:
    resolution: {integrity: sha512-dI7q50YKd8BAv3VEfgg7PS7yD3Rtbi2J1XMXaalXO0W0164hYLnh8zpjRS0mte9MfVp/tltvr/cfdXPvJr1opA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-annotate-as-pure': 7.18.6
      '@babel/helper-environment-visitor': 7.18.9
      '@babel/helper-wrap-function': 7.19.0
      '@babel/types': 7.19.0
    transitivePeerDependencies:
      - supports-color

  /@babel/helper-replace-supers/7.19.1:
    resolution: {integrity: sha512-T7ahH7wV0Hfs46SFh5Jz3s0B6+o8g3c+7TMxu7xKfmHikg7EAZ3I2Qk9LFhjxXq8sL7UkP5JflezNwoZa8WvWw==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/helper-environment-visitor': 7.18.9
      '@babel/helper-member-expression-to-functions': 7.18.9
      '@babel/helper-optimise-call-expression': 7.18.6
      '@babel/traverse': 7.19.1
      '@babel/types': 7.19.0
    transitivePeerDependencies:
      - supports-color

  /@babel/helper-simple-access/7.18.6:
    resolution: {integrity: sha512-iNpIgTgyAvDQpDj76POqg+YEt8fPxx3yaNBg3S30dxNKm2SWfYhD0TGrK/Eu9wHpUW63VQU894TsTg+GLbUa1g==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/types': 7.19.0

  /@babel/helper-skip-transparent-expression-wrappers/7.18.9:
    resolution: {integrity: sha512-imytd2gHi3cJPsybLRbmFrF7u5BIEuI2cNheyKi3/iOBC63kNn3q8Crn2xVuESli0aM4KYsyEqKyS7lFL8YVtw==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/types': 7.19.0

  /@babel/helper-split-export-declaration/7.18.6:
    resolution: {integrity: sha512-bde1etTx6ZyTmobl9LLMMQsaizFVZrquTEHOqKeQESMKo4PlObf+8+JA25ZsIpZhT/WEd39+vOdLXAFG/nELpA==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/types': 7.19.0

  /@babel/helper-string-parser/7.18.10:
    resolution: {integrity: sha512-XtIfWmeNY3i4t7t4D2t02q50HvqHybPqW2ki1kosnvWCwuCMeo81Jf0gwr85jy/neUdg5XDdeFE/80DXiO+njw==}
    engines: {node: '>=6.9.0'}

  /@babel/helper-validator-identifier/7.19.1:
    resolution: {integrity: sha512-awrNfaMtnHUr653GgGEs++LlAvW6w+DcPrOliSMXWCKo597CwL5Acf/wWdNkf/tfEQE3mjkeD1YOVZOUV/od1w==}
    engines: {node: '>=6.9.0'}

  /@babel/helper-validator-option/7.18.6:
    resolution: {integrity: sha512-XO7gESt5ouv/LRJdrVjkShckw6STTaB7l9BrpBaAHDeF5YZT+01PCwmR0SJHnkW6i8OwW/EVWRShfi4j2x+KQw==}
    engines: {node: '>=6.9.0'}

  /@babel/helper-wrap-function/7.19.0:
    resolution: {integrity: sha512-txX8aN8CZyYGTwcLhlk87KRqncAzhh5TpQamZUa0/u3an36NtDpUP6bQgBCBcLeBs09R/OwQu3OjK0k/HwfNDg==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/helper-function-name': 7.19.0
      '@babel/template': 7.18.10
      '@babel/traverse': 7.19.1
      '@babel/types': 7.19.0
    transitivePeerDependencies:
      - supports-color

  /@babel/helpers/7.19.0:
    resolution: {integrity: sha512-DRBCKGwIEdqY3+rPJgG/dKfQy9+08rHIAJx8q2p+HSWP87s2HCrQmaAMMyMll2kIXKCW0cO1RdQskx15Xakftg==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/template': 7.18.10
      '@babel/traverse': 7.19.1
      '@babel/types': 7.19.0
    transitivePeerDependencies:
      - supports-color

  /@babel/highlight/7.18.6:
    resolution: {integrity: sha512-u7stbOuYjaPezCuLj29hNW1v64M2Md2qupEKP1fHc7WdOA3DgLh37suiSrZYY7haUB7iBeQZ9P1uiRF359do3g==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/helper-validator-identifier': 7.19.1
      chalk: 2.4.2
      js-tokens: 4.0.0

  /@babel/parser/7.19.1:
    resolution: {integrity: sha512-h7RCSorm1DdTVGJf3P2Mhj3kdnkmF/EiysUkzS2TdgAYqyjFdMQJbVuXOBej2SBJaXan/lIVtT6KkGbyyq753A==}
    engines: {node: '>=6.0.0'}
    hasBin: true

  /@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-Dgxsyg54Fx1d4Nge8UnvTrED63vrwOdPmyvPzlNN/boaliRP54pm3pGzZD1SJUwrBA+Cs/xdG8kXX6Mn/RfISQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining/7.18.9_@babel+core@7.18.13:
    resolution: {integrity: sha512-AHrP9jadvH7qlOj6PINbgSuphjQUAK7AOT7DPjBo9EHoLhQTnnK5u45e1Hd4DbSQEO9nqPWtQ89r+XEOWFScKg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.13.0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0
      '@babel/helper-skip-transparent-expression-wrappers': 7.18.9
      '@babel/plugin-proposal-optional-chaining': 7.18.9_@babel+core@7.18.13

  /@babel/plugin-proposal-async-generator-functions/7.19.1_@babel+core@7.18.13:
    resolution: {integrity: sha512-0yu8vNATgLy4ivqMNBIwb1HebCelqN7YX8SL3FDXORv/RqT0zEEWUCH4GH44JsSrvCu6GqnAdR5EBFAPeNBB4Q==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-environment-visitor': 7.18.9
      '@babel/helper-plugin-utils': 7.19.0
      '@babel/helper-remap-async-to-generator': 7.18.9_@babel+core@7.18.13
      '@babel/plugin-syntax-async-generators': 7.8.4_@babel+core@7.18.13
    transitivePeerDependencies:
      - supports-color

  /@babel/plugin-proposal-class-properties/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-cumfXOF0+nzZrrN8Rf0t7M+tF6sZc7vhQwYQck9q1/5w2OExlD+b4v4RpMJFaV1Z7WcDRgO6FqvxqxGlwo+RHQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-create-class-features-plugin': 7.19.0_@babel+core@7.18.13
      '@babel/helper-plugin-utils': 7.19.0
    transitivePeerDependencies:
      - supports-color

  /@babel/plugin-proposal-class-static-block/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-+I3oIiNxrCpup3Gi8n5IGMwj0gOCAjcJUSQEcotNnCCPMEnixawOQ+KeJPlgfjzx+FKQ1QSyZOWe7wmoJp7vhw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.12.0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-create-class-features-plugin': 7.19.0_@babel+core@7.18.13
      '@babel/helper-plugin-utils': 7.19.0
      '@babel/plugin-syntax-class-static-block': 7.14.5_@babel+core@7.18.13
    transitivePeerDependencies:
      - supports-color

  /@babel/plugin-proposal-dynamic-import/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-1auuwmK+Rz13SJj36R+jqFPMJWyKEDd7lLSdOj4oJK0UTgGueSAtkrCvz9ewmgyU/P941Rv2fQwZJN8s6QruXw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0
      '@babel/plugin-syntax-dynamic-import': 7.8.3_@babel+core@7.18.13

  /@babel/plugin-proposal-export-namespace-from/7.18.9_@babel+core@7.18.13:
    resolution: {integrity: sha512-k1NtHyOMvlDDFeb9G5PhUXuGj8m/wiwojgQVEhJ/fsVsMCpLyOP4h0uGEjYJKrRI+EVPlb5Jk+Gt9P97lOGwtA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0
      '@babel/plugin-syntax-export-namespace-from': 7.8.3_@babel+core@7.18.13

  /@babel/plugin-proposal-json-strings/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-lr1peyn9kOdbYc0xr0OdHTZ5FMqS6Di+H0Fz2I/JwMzGmzJETNeOFq2pBySw6X/KFL5EWDjlJuMsUGRFb8fQgQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0
      '@babel/plugin-syntax-json-strings': 7.8.3_@babel+core@7.18.13

  /@babel/plugin-proposal-logical-assignment-operators/7.18.9_@babel+core@7.18.13:
    resolution: {integrity: sha512-128YbMpjCrP35IOExw2Fq+x55LMP42DzhOhX2aNNIdI9avSWl2PI0yuBWarr3RYpZBSPtabfadkH2yeRiMD61Q==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0
      '@babel/plugin-syntax-logical-assignment-operators': 7.10.4_@babel+core@7.18.13

  /@babel/plugin-proposal-nullish-coalescing-operator/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-wQxQzxYeJqHcfppzBDnm1yAY0jSRkUXR2z8RePZYrKwMKgMlE8+Z6LUno+bd6LvbGh8Gltvy74+9pIYkr+XkKA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0
      '@babel/plugin-syntax-nullish-coalescing-operator': 7.8.3_@babel+core@7.18.13

  /@babel/plugin-proposal-numeric-separator/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-ozlZFogPqoLm8WBr5Z8UckIoE4YQ5KESVcNudyXOR8uqIkliTEgJ3RoketfG6pmzLdeZF0H/wjE9/cCEitBl7Q==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0
      '@babel/plugin-syntax-numeric-separator': 7.10.4_@babel+core@7.18.13

  /@babel/plugin-proposal-object-rest-spread/7.12.1_@babel+core@7.12.9:
    resolution: {integrity: sha512-s6SowJIjzlhx8o7lsFx5zmY4At6CTtDvgNQDdPzkBQucle58A6b/TTeEBYtyDgmcXjUTM+vE8YOGHZzzbc/ioA==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.12.9
      '@babel/helper-plugin-utils': 7.10.4
      '@babel/plugin-syntax-object-rest-spread': 7.8.3_@babel+core@7.12.9
      '@babel/plugin-transform-parameters': 7.18.8_@babel+core@7.12.9

  /@babel/plugin-proposal-object-rest-spread/7.18.9_@babel+core@7.18.13:
    resolution: {integrity: sha512-kDDHQ5rflIeY5xl69CEqGEZ0KY369ehsCIEbTGb4siHG5BE9sga/T0r0OUwyZNLMmZE79E1kbsqAjwFCW4ds6Q==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/compat-data': 7.19.1
      '@babel/core': 7.18.13
      '@babel/helper-compilation-targets': 7.19.1_@babel+core@7.18.13
      '@babel/helper-plugin-utils': 7.19.0
      '@babel/plugin-syntax-object-rest-spread': 7.8.3_@babel+core@7.18.13
      '@babel/plugin-transform-parameters': 7.18.8_@babel+core@7.18.13

  /@babel/plugin-proposal-optional-catch-binding/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-Q40HEhs9DJQyaZfUjjn6vE8Cv4GmMHCYuMGIWUnlxH6400VGxOuwWsPt4FxXxJkC/5eOzgn0z21M9gMT4MOhbw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0
      '@babel/plugin-syntax-optional-catch-binding': 7.8.3_@babel+core@7.18.13

  /@babel/plugin-proposal-optional-chaining/7.18.9_@babel+core@7.18.13:
    resolution: {integrity: sha512-v5nwt4IqBXihxGsW2QmCWMDS3B3bzGIk/EQVZz2ei7f3NJl8NzAJVvUmpDW5q1CRNY+Beb/k58UAH1Km1N411w==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0
      '@babel/helper-skip-transparent-expression-wrappers': 7.18.9
      '@babel/plugin-syntax-optional-chaining': 7.8.3_@babel+core@7.18.13

  /@babel/plugin-proposal-private-methods/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-nutsvktDItsNn4rpGItSNV2sz1XwS+nfU0Rg8aCx3W3NOKVzdMjJRu0O5OkgDp3ZGICSTbgRpxZoWsxoKRvbeA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-create-class-features-plugin': 7.19.0_@babel+core@7.18.13
      '@babel/helper-plugin-utils': 7.19.0
    transitivePeerDependencies:
      - supports-color

  /@babel/plugin-proposal-private-property-in-object/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-9Rysx7FOctvT5ouj5JODjAFAkgGoudQuLPamZb0v1TGLpapdNaftzifU8NTWQm0IRjqoYypdrSmyWgkocDQ8Dw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-annotate-as-pure': 7.18.6
      '@babel/helper-create-class-features-plugin': 7.19.0_@babel+core@7.18.13
      '@babel/helper-plugin-utils': 7.19.0
      '@babel/plugin-syntax-private-property-in-object': 7.14.5_@babel+core@7.18.13
    transitivePeerDependencies:
      - supports-color

  /@babel/plugin-proposal-unicode-property-regex/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-2BShG/d5yoZyXZfVePH91urL5wTG6ASZU9M4o03lKK8u8UW1y08OMttBSOADTcJrnPMpvDXRG3G8fyLh4ovs8w==}
    engines: {node: '>=4'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-create-regexp-features-plugin': 7.19.0_@babel+core@7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-syntax-async-generators/7.8.4_@babel+core@7.18.13:
    resolution: {integrity: sha512-tycmZxkGfZaxhMRbXlPXuVFpdWlXpir2W4AMhSJgRKzk/eDlIXOhb2LHWoLpDF7TEHylV5zNhykX6KAgHJmTNw==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-syntax-bigint/7.8.3_@babel+core@7.18.13:
    resolution: {integrity: sha512-wnTnFlG+YxQm3vDxpGE57Pj0srRU4sHE/mDkt1qv2YJJSeUAec2ma4WLUnUPeKjyrfntVwe/N6dCXpU+zL3Npg==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0
    dev: true

  /@babel/plugin-syntax-class-properties/7.12.13_@babel+core@7.18.13:
    resolution: {integrity: sha512-fm4idjKla0YahUNgFNLCB0qySdsoPiZP3iQE3rky0mBUtMZ23yDJ9SJdg6dXTSDnulOVqiF3Hgr9nbXvXTQZYA==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-syntax-class-static-block/7.14.5_@babel+core@7.18.13:
    resolution: {integrity: sha512-b+YyPmr6ldyNnM6sqYeMWE+bgJcJpO6yS4QD7ymxgH34GBPNDM/THBh8iunyvKIZztiwLH4CJZ0RxTk9emgpjw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-syntax-dynamic-import/7.8.3_@babel+core@7.18.13:
    resolution: {integrity: sha512-5gdGbFon+PszYzqs83S3E5mpi7/y/8M9eC90MRTZfduQOYW76ig6SOSPNe41IG5LoP3FGBn2N0RjVDSQiS94kQ==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-syntax-export-namespace-from/7.8.3_@babel+core@7.18.13:
    resolution: {integrity: sha512-MXf5laXo6c1IbEbegDmzGPwGNTsHZmEy6QGznu5Sh2UCWvueywb2ee+CCE4zQiZstxU9BMoQO9i6zUFSY0Kj0Q==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-syntax-import-assertions/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-/DU3RXad9+bZwrgWJQKbr39gYbJpLJHezqEzRzi/BHRlJ9zsQb4CK2CA/5apllXNomwA1qHwzvHl+AdEmC5krQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-syntax-import-meta/7.10.4_@babel+core@7.18.13:
    resolution: {integrity: sha512-Yqfm+XDx0+Prh3VSeEQCPU81yC+JWZ2pDPFSS4ZdpfZhp4MkFMaDC1UqseovEKwSUpnIL7+vK+Clp7bfh0iD7g==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0
    dev: true

  /@babel/plugin-syntax-json-strings/7.8.3_@babel+core@7.18.13:
    resolution: {integrity: sha512-lY6kdGpWHvjoe2vk4WrAapEuBR69EMxZl+RoGRhrFGNYVK8mOPAW8VfbT/ZgrFbXlDNiiaxQnAtgVCZ6jv30EA==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-syntax-jsx/7.12.1_@babel+core@7.12.9:
    resolution: {integrity: sha512-1yRi7yAtB0ETgxdY9ti/p2TivUxJkTdhu/ZbF9MshVGqOx1TdB3b7xCXs49Fupgg50N45KcAsRP/ZqWjs9SRjg==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.12.9
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-syntax-jsx/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-6mmljtAedFGTWu2p/8WIORGwy+61PLgOMPOdazc7YoJ9ZCWUyFy3A6CpPkRKLKD1ToAesxX8KGEViAiLo9N+7Q==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-syntax-logical-assignment-operators/7.10.4_@babel+core@7.18.13:
    resolution: {integrity: sha512-d8waShlpFDinQ5MtvGU9xDAOzKH47+FFoney2baFIoMr952hKOLp1HR7VszoZvOsV/4+RRszNY7D17ba0te0ig==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-syntax-nullish-coalescing-operator/7.8.3_@babel+core@7.18.13:
    resolution: {integrity: sha512-aSff4zPII1u2QD7y+F8oDsz19ew4IGEJg9SVW+bqwpwtfFleiQDMdzA/R+UlWDzfnHFCxxleFT0PMIrR36XLNQ==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-syntax-numeric-separator/7.10.4_@babel+core@7.18.13:
    resolution: {integrity: sha512-9H6YdfkcK/uOnY/K7/aA2xpzaAgkQn37yzWUMRK7OaPOqOpGS1+n0H5hxT9AUw9EsSjPW8SVyMJwYRtWs3X3ug==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-syntax-object-rest-spread/7.8.3_@babel+core@7.12.9:
    resolution: {integrity: sha512-XoqMijGZb9y3y2XskN+P1wUGiVwWZ5JmoDRwx5+3GmEplNyVM2s2Dg8ILFQm8rWM48orGy5YpI5Bl8U1y7ydlA==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.12.9
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-syntax-object-rest-spread/7.8.3_@babel+core@7.18.13:
    resolution: {integrity: sha512-XoqMijGZb9y3y2XskN+P1wUGiVwWZ5JmoDRwx5+3GmEplNyVM2s2Dg8ILFQm8rWM48orGy5YpI5Bl8U1y7ydlA==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-syntax-optional-catch-binding/7.8.3_@babel+core@7.18.13:
    resolution: {integrity: sha512-6VPD0Pc1lpTqw0aKoeRTMiB+kWhAoT24PA+ksWSBrFtl5SIRVpZlwN3NNPQjehA2E/91FV3RjLWoVTglWcSV3Q==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-syntax-optional-chaining/7.8.3_@babel+core@7.18.13:
    resolution: {integrity: sha512-KoK9ErH1MBlCPxV0VANkXW2/dw4vlbGDrFgz8bmUsBGYkFRcbRwMh6cIJubdPrkxRwuGdtCk0v/wPTKbQgBjkg==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-syntax-private-property-in-object/7.14.5_@babel+core@7.18.13:
    resolution: {integrity: sha512-0wVnp9dxJ72ZUJDV27ZfbSj6iHLoytYZmh3rFcxNnvsJF3ktkzLDZPy/mA17HGsaQT3/DQsWYX1f1QGWkCoVUg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-syntax-top-level-await/7.14.5_@babel+core@7.18.13:
    resolution: {integrity: sha512-hx++upLv5U1rgYfwe1xBQUhRmU41NEvpUvrp8jkrSCdvGSnM5/qdRMtylJ6PG5OFkBaHkbTAKTnd3/YyESRHFw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-syntax-typescript/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-mAWAuq4rvOepWCBid55JuRNvpTNf2UGVgoz4JV0fXEKolsVZDzsa4NqCef758WZJj/GDu0gVGItjKFiClTAmZA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-transform-arrow-functions/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-9S9X9RUefzrsHZmKMbDXxweEH+YlE8JJEuat9FdvW9Qh1cw7W64jELCtWNkPBPX5En45uy28KGvA/AySqUh8CQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-transform-async-to-generator/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-ARE5wZLKnTgPW7/1ftQmSi1CmkqqHo2DNmtztFhvgtOWSDfq0Cq9/9L+KnZNYSNrydBekhW3rwShduf59RoXag==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-module-imports': 7.18.6
      '@babel/helper-plugin-utils': 7.19.0
      '@babel/helper-remap-async-to-generator': 7.18.9_@babel+core@7.18.13
    transitivePeerDependencies:
      - supports-color

  /@babel/plugin-transform-block-scoped-functions/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-ExUcOqpPWnliRcPqves5HJcJOvHvIIWfuS4sroBUenPuMdmW+SMHDakmtS7qOo13sVppmUijqeTv7qqGsvURpQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-transform-block-scoping/7.18.9_@babel+core@7.18.13:
    resolution: {integrity: sha512-5sDIJRV1KtQVEbt/EIBwGy4T01uYIo4KRB3VUqzkhrAIOGx7AoctL9+Ux88btY0zXdDyPJ9mW+bg+v+XEkGmtw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-transform-classes/7.19.0_@babel+core@7.18.13:
    resolution: {integrity: sha512-YfeEE9kCjqTS9IitkgfJuxjcEtLUHMqa8yUJ6zdz8vR7hKuo6mOy2C05P0F1tdMmDCeuyidKnlrw/iTppHcr2A==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-annotate-as-pure': 7.18.6
      '@babel/helper-compilation-targets': 7.19.1_@babel+core@7.18.13
      '@babel/helper-environment-visitor': 7.18.9
      '@babel/helper-function-name': 7.19.0
      '@babel/helper-optimise-call-expression': 7.18.6
      '@babel/helper-plugin-utils': 7.19.0
      '@babel/helper-replace-supers': 7.19.1
      '@babel/helper-split-export-declaration': 7.18.6
      globals: 11.12.0
    transitivePeerDependencies:
      - supports-color

  /@babel/plugin-transform-computed-properties/7.18.9_@babel+core@7.18.13:
    resolution: {integrity: sha512-+i0ZU1bCDymKakLxn5srGHrsAPRELC2WIbzwjLhHW9SIE1cPYkLCL0NlnXMZaM1vhfgA2+M7hySk42VBvrkBRw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-transform-destructuring/7.18.13_@babel+core@7.18.13:
    resolution: {integrity: sha512-TodpQ29XekIsex2A+YJPj5ax2plkGa8YYY6mFjCohk/IG9IY42Rtuj1FuDeemfg2ipxIFLzPeA83SIBnlhSIow==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-transform-dotall-regex/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-6S3jpun1eEbAxq7TdjLotAsl4WpQI9DxfkycRcKrjhQYzU87qpXdknpBg/e+TdcMehqGnLFi7tnFUBR02Vq6wg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-create-regexp-features-plugin': 7.19.0_@babel+core@7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-transform-duplicate-keys/7.18.9_@babel+core@7.18.13:
    resolution: {integrity: sha512-d2bmXCtZXYc59/0SanQKbiWINadaJXqtvIQIzd4+hNwkWBgyCd5F/2t1kXoUdvPMrxzPvhK6EMQRROxsue+mfw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-transform-exponentiation-operator/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-wzEtc0+2c88FVR34aQmiz56dxEkxr2g8DQb/KfaFa1JYXOFVsbhvAonFN6PwVWj++fKmku8NP80plJ5Et4wqHw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-builder-binary-assignment-operator-visitor': 7.18.9
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-transform-for-of/7.18.8_@babel+core@7.18.13:
    resolution: {integrity: sha512-yEfTRnjuskWYo0k1mHUqrVWaZwrdq8AYbfrpqULOJOaucGSp4mNMVps+YtA8byoevxS/urwU75vyhQIxcCgiBQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-transform-function-name/7.18.9_@babel+core@7.18.13:
    resolution: {integrity: sha512-WvIBoRPaJQ5yVHzcnJFor7oS5Ls0PYixlTYE63lCj2RtdQEl15M68FXQlxnG6wdraJIXRdR7KI+hQ7q/9QjrCQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-compilation-targets': 7.19.1_@babel+core@7.18.13
      '@babel/helper-function-name': 7.19.0
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-transform-literals/7.18.9_@babel+core@7.18.13:
    resolution: {integrity: sha512-IFQDSRoTPnrAIrI5zoZv73IFeZu2dhu6irxQjY9rNjTT53VmKg9fenjvoiOWOkJ6mm4jKVPtdMzBY98Fp4Z4cg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-transform-member-expression-literals/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-qSF1ihLGO3q+/g48k85tUjD033C29TNTVB2paCwZPVmOsjn9pClvYYrM2VeJpBY2bcNkuny0YUyTNRyRxJ54KA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-transform-modules-amd/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-Pra5aXsmTsOnjM3IajS8rTaLCy++nGM4v3YR4esk5PCsyg9z8NA5oQLwxzMUtDBd8F+UmVza3VxoAaWCbzH1rg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-module-transforms': 7.19.0
      '@babel/helper-plugin-utils': 7.19.0
      babel-plugin-dynamic-import-node: 2.3.3
    transitivePeerDependencies:
      - supports-color

  /@babel/plugin-transform-modules-commonjs/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-Qfv2ZOWikpvmedXQJDSbxNqy7Xr/j2Y8/KfijM0iJyKkBTmWuvCA1yeH1yDM7NJhBW/2aXxeucLj6i80/LAJ/Q==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-module-transforms': 7.19.0
      '@babel/helper-plugin-utils': 7.19.0
      '@babel/helper-simple-access': 7.18.6
      babel-plugin-dynamic-import-node: 2.3.3
    transitivePeerDependencies:
      - supports-color

  /@babel/plugin-transform-modules-systemjs/7.19.0_@babel+core@7.18.13:
    resolution: {integrity: sha512-x9aiR0WXAWmOWsqcsnrzGR+ieaTMVyGyffPVA7F8cXAGt/UxefYv6uSHZLkAFChN5M5Iy1+wjE+xJuPt22H39A==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-hoist-variables': 7.18.6
      '@babel/helper-module-transforms': 7.19.0
      '@babel/helper-plugin-utils': 7.19.0
      '@babel/helper-validator-identifier': 7.19.1
      babel-plugin-dynamic-import-node: 2.3.3
    transitivePeerDependencies:
      - supports-color

  /@babel/plugin-transform-modules-umd/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-dcegErExVeXcRqNtkRU/z8WlBLnvD4MRnHgNs3MytRO1Mn1sHRyhbcpYbVMGclAqOjdW+9cfkdZno9dFdfKLfQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-module-transforms': 7.19.0
      '@babel/helper-plugin-utils': 7.19.0
    transitivePeerDependencies:
      - supports-color

  /@babel/plugin-transform-named-capturing-groups-regex/7.19.1_@babel+core@7.18.13:
    resolution: {integrity: sha512-oWk9l9WItWBQYS4FgXD4Uyy5kq898lvkXpXQxoJEY1RnvPk4R/Dvu2ebXU9q8lP+rlMwUQTFf2Ok6d78ODa0kw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-create-regexp-features-plugin': 7.19.0_@babel+core@7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-transform-new-target/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-DjwFA/9Iu3Z+vrAn+8pBUGcjhxKguSMlsFqeCKbhb9BAV756v0krzVK04CRDi/4aqmk8BsHb4a/gFcaA5joXRw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-transform-object-super/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-uvGz6zk+pZoS1aTZrOvrbj6Pp/kK2mp45t2B+bTDre2UgsZZ8EZLSJtUg7m/no0zOJUWgFONpB7Zv9W2tSaFlA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0
      '@babel/helper-replace-supers': 7.19.1
    transitivePeerDependencies:
      - supports-color

  /@babel/plugin-transform-parameters/7.18.8_@babel+core@7.12.9:
    resolution: {integrity: sha512-ivfbE3X2Ss+Fj8nnXvKJS6sjRG4gzwPMsP+taZC+ZzEGjAYlvENixmt1sZ5Ca6tWls+BlKSGKPJ6OOXvXCbkFg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.12.9
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-transform-parameters/7.18.8_@babel+core@7.18.13:
    resolution: {integrity: sha512-ivfbE3X2Ss+Fj8nnXvKJS6sjRG4gzwPMsP+taZC+ZzEGjAYlvENixmt1sZ5Ca6tWls+BlKSGKPJ6OOXvXCbkFg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-transform-property-literals/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-cYcs6qlgafTud3PAzrrRNbQtfpQ8+y/+M5tKmksS9+M1ckbH6kzY8MrexEM9mcA6JDsukE19iIRvAyYl463sMg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-transform-react-constant-elements/7.18.12_@babel+core@7.18.13:
    resolution: {integrity: sha512-Q99U9/ttiu+LMnRU8psd23HhvwXmKWDQIpocm0JKaICcZHnw+mdQbHm6xnSy7dOl8I5PELakYtNBubNQlBXbZw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-transform-react-display-name/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-TV4sQ+T013n61uMoygyMRm+xf04Bd5oqFpv2jAEQwSZ8NwQA7zeRPg1LMVg2PWi3zWBz+CLKD+v5bcpZ/BS0aA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-transform-react-jsx-development/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-SA6HEjwYFKF7WDjWcMcMGUimmw/nhNRDWxr+KaLSCrkD/LMDBvWRmHAYgE1HDeF8KUuI8OAu+RT6EOtKxSW2qA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/plugin-transform-react-jsx': 7.19.0_@babel+core@7.18.13

  /@babel/plugin-transform-react-jsx/7.19.0_@babel+core@7.18.13:
    resolution: {integrity: sha512-UVEvX3tXie3Szm3emi1+G63jyw1w5IcMY0FSKM+CRnKRI5Mr1YbCNgsSTwoTwKphQEG9P+QqmuRFneJPZuHNhg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-annotate-as-pure': 7.18.6
      '@babel/helper-module-imports': 7.18.6
      '@babel/helper-plugin-utils': 7.19.0
      '@babel/plugin-syntax-jsx': 7.18.6_@babel+core@7.18.13
      '@babel/types': 7.19.0

  /@babel/plugin-transform-react-pure-annotations/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-I8VfEPg9r2TRDdvnHgPepTKvuRomzA8+u+nhY7qSI1fR2hRNebasZEETLyM5mAUr0Ku56OkXJ0I7NHJnO6cJiQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-annotate-as-pure': 7.18.6
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-transform-regenerator/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-poqRI2+qiSdeldcz4wTSTXBRryoq3Gc70ye7m7UD5Ww0nE29IXqMl6r7Nd15WBgRd74vloEMlShtH6CKxVzfmQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0
      regenerator-transform: 0.15.0

  /@babel/plugin-transform-reserved-words/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-oX/4MyMoypzHjFrT1CdivfKZ+XvIPMFXwwxHp/r0Ddy2Vuomt4HDFGmft1TAY2yiTKiNSsh3kjBAzcM8kSdsjA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-transform-runtime/7.19.1_@babel+core@7.18.13:
    resolution: {integrity: sha512-2nJjTUFIzBMP/f/miLxEK9vxwW/KUXsdvN4sR//TmuDhe6yU2h57WmIOE12Gng3MDP/xpjUV/ToZRdcf8Yj4fA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-module-imports': 7.18.6
      '@babel/helper-plugin-utils': 7.19.0
      babel-plugin-polyfill-corejs2: 0.3.3_@babel+core@7.18.13
      babel-plugin-polyfill-corejs3: 0.6.0_@babel+core@7.18.13
      babel-plugin-polyfill-regenerator: 0.4.1_@babel+core@7.18.13
      semver: 6.3.0
    transitivePeerDependencies:
      - supports-color

  /@babel/plugin-transform-shorthand-properties/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-eCLXXJqv8okzg86ywZJbRn19YJHU4XUa55oz2wbHhaQVn/MM+XhukiT7SYqp/7o00dg52Rj51Ny+Ecw4oyoygw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-transform-spread/7.19.0_@babel+core@7.18.13:
    resolution: {integrity: sha512-RsuMk7j6n+r752EtzyScnWkQyuJdli6LdO5Klv8Yx0OfPVTcQkIUfS8clx5e9yHXzlnhOZF3CbQ8C2uP5j074w==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0
      '@babel/helper-skip-transparent-expression-wrappers': 7.18.9

  /@babel/plugin-transform-sticky-regex/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-kfiDrDQ+PBsQDO85yj1icueWMfGfJFKN1KCkndygtu/C9+XUfydLC8Iv5UYJqRwy4zk8EcplRxEOeLyjq1gm6Q==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-transform-template-literals/7.18.9_@babel+core@7.18.13:
    resolution: {integrity: sha512-S8cOWfT82gTezpYOiVaGHrCbhlHgKhQt8XH5ES46P2XWmX92yisoZywf5km75wv5sYcXDUCLMmMxOLCtthDgMA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-transform-typeof-symbol/7.18.9_@babel+core@7.18.13:
    resolution: {integrity: sha512-SRfwTtF11G2aemAZWivL7PD+C9z52v9EvMqH9BuYbabyPuKUvSWks3oCg6041pT925L4zVFqaVBeECwsmlguEw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-transform-typescript/7.19.1_@babel+core@7.18.13:
    resolution: {integrity: sha512-+ILcOU+6mWLlvCwnL920m2Ow3wWx3Wo8n2t5aROQmV55GZt+hOiLvBaa3DNzRjSEHa1aauRs4/YLmkCfFkhhRQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-create-class-features-plugin': 7.19.0_@babel+core@7.18.13
      '@babel/helper-plugin-utils': 7.19.0
      '@babel/plugin-syntax-typescript': 7.18.6_@babel+core@7.18.13
    transitivePeerDependencies:
      - supports-color

  /@babel/plugin-transform-unicode-escapes/7.18.10_@babel+core@7.18.13:
    resolution: {integrity: sha512-kKAdAI+YzPgGY/ftStBFXTI1LZFju38rYThnfMykS+IXy8BVx+res7s2fxf1l8I35DV2T97ezo6+SGrXz6B3iQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/plugin-transform-unicode-regex/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-gE7A6Lt7YLnNOL3Pb9BNeZvi+d8l7tcRrG4+pwJjK9hD2xX4mEvjlQW60G9EEmfXVYRPv9VRQcyegIVHCql/AA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-create-regexp-features-plugin': 7.19.0_@babel+core@7.18.13
      '@babel/helper-plugin-utils': 7.19.0

  /@babel/preset-env/7.19.1_@babel+core@7.18.13:
    resolution: {integrity: sha512-c8B2c6D16Lp+Nt6HcD+nHl0VbPKVnNPTpszahuxJJnurfMtKeZ80A+qUv48Y7wqvS+dTFuLuaM9oYxyNHbCLWA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/compat-data': 7.19.1
      '@babel/core': 7.18.13
      '@babel/helper-compilation-targets': 7.19.1_@babel+core@7.18.13
      '@babel/helper-plugin-utils': 7.19.0
      '@babel/helper-validator-option': 7.18.6
      '@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression': 7.18.6_@babel+core@7.18.13
      '@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining': 7.18.9_@babel+core@7.18.13
      '@babel/plugin-proposal-async-generator-functions': 7.19.1_@babel+core@7.18.13
      '@babel/plugin-proposal-class-properties': 7.18.6_@babel+core@7.18.13
      '@babel/plugin-proposal-class-static-block': 7.18.6_@babel+core@7.18.13
      '@babel/plugin-proposal-dynamic-import': 7.18.6_@babel+core@7.18.13
      '@babel/plugin-proposal-export-namespace-from': 7.18.9_@babel+core@7.18.13
      '@babel/plugin-proposal-json-strings': 7.18.6_@babel+core@7.18.13
      '@babel/plugin-proposal-logical-assignment-operators': 7.18.9_@babel+core@7.18.13
      '@babel/plugin-proposal-nullish-coalescing-operator': 7.18.6_@babel+core@7.18.13
      '@babel/plugin-proposal-numeric-separator': 7.18.6_@babel+core@7.18.13
      '@babel/plugin-proposal-object-rest-spread': 7.18.9_@babel+core@7.18.13
      '@babel/plugin-proposal-optional-catch-binding': 7.18.6_@babel+core@7.18.13
      '@babel/plugin-proposal-optional-chaining': 7.18.9_@babel+core@7.18.13
      '@babel/plugin-proposal-private-methods': 7.18.6_@babel+core@7.18.13
      '@babel/plugin-proposal-private-property-in-object': 7.18.6_@babel+core@7.18.13
      '@babel/plugin-proposal-unicode-property-regex': 7.18.6_@babel+core@7.18.13
      '@babel/plugin-syntax-async-generators': 7.8.4_@babel+core@7.18.13
      '@babel/plugin-syntax-class-properties': 7.12.13_@babel+core@7.18.13
      '@babel/plugin-syntax-class-static-block': 7.14.5_@babel+core@7.18.13
      '@babel/plugin-syntax-dynamic-import': 7.8.3_@babel+core@7.18.13
      '@babel/plugin-syntax-export-namespace-from': 7.8.3_@babel+core@7.18.13
      '@babel/plugin-syntax-import-assertions': 7.18.6_@babel+core@7.18.13
      '@babel/plugin-syntax-json-strings': 7.8.3_@babel+core@7.18.13
      '@babel/plugin-syntax-logical-assignment-operators': 7.10.4_@babel+core@7.18.13
      '@babel/plugin-syntax-nullish-coalescing-operator': 7.8.3_@babel+core@7.18.13
      '@babel/plugin-syntax-numeric-separator': 7.10.4_@babel+core@7.18.13
      '@babel/plugin-syntax-object-rest-spread': 7.8.3_@babel+core@7.18.13
      '@babel/plugin-syntax-optional-catch-binding': 7.8.3_@babel+core@7.18.13
      '@babel/plugin-syntax-optional-chaining': 7.8.3_@babel+core@7.18.13
      '@babel/plugin-syntax-private-property-in-object': 7.14.5_@babel+core@7.18.13
      '@babel/plugin-syntax-top-level-await': 7.14.5_@babel+core@7.18.13
      '@babel/plugin-transform-arrow-functions': 7.18.6_@babel+core@7.18.13
      '@babel/plugin-transform-async-to-generator': 7.18.6_@babel+core@7.18.13
      '@babel/plugin-transform-block-scoped-functions': 7.18.6_@babel+core@7.18.13
      '@babel/plugin-transform-block-scoping': 7.18.9_@babel+core@7.18.13
      '@babel/plugin-transform-classes': 7.19.0_@babel+core@7.18.13
      '@babel/plugin-transform-computed-properties': 7.18.9_@babel+core@7.18.13
      '@babel/plugin-transform-destructuring': 7.18.13_@babel+core@7.18.13
      '@babel/plugin-transform-dotall-regex': 7.18.6_@babel+core@7.18.13
      '@babel/plugin-transform-duplicate-keys': 7.18.9_@babel+core@7.18.13
      '@babel/plugin-transform-exponentiation-operator': 7.18.6_@babel+core@7.18.13
      '@babel/plugin-transform-for-of': 7.18.8_@babel+core@7.18.13
      '@babel/plugin-transform-function-name': 7.18.9_@babel+core@7.18.13
      '@babel/plugin-transform-literals': 7.18.9_@babel+core@7.18.13
      '@babel/plugin-transform-member-expression-literals': 7.18.6_@babel+core@7.18.13
      '@babel/plugin-transform-modules-amd': 7.18.6_@babel+core@7.18.13
      '@babel/plugin-transform-modules-commonjs': 7.18.6_@babel+core@7.18.13
      '@babel/plugin-transform-modules-systemjs': 7.19.0_@babel+core@7.18.13
      '@babel/plugin-transform-modules-umd': 7.18.6_@babel+core@7.18.13
      '@babel/plugin-transform-named-capturing-groups-regex': 7.19.1_@babel+core@7.18.13
      '@babel/plugin-transform-new-target': 7.18.6_@babel+core@7.18.13
      '@babel/plugin-transform-object-super': 7.18.6_@babel+core@7.18.13
      '@babel/plugin-transform-parameters': 7.18.8_@babel+core@7.18.13
      '@babel/plugin-transform-property-literals': 7.18.6_@babel+core@7.18.13
      '@babel/plugin-transform-regenerator': 7.18.6_@babel+core@7.18.13
      '@babel/plugin-transform-reserved-words': 7.18.6_@babel+core@7.18.13
      '@babel/plugin-transform-shorthand-properties': 7.18.6_@babel+core@7.18.13
      '@babel/plugin-transform-spread': 7.19.0_@babel+core@7.18.13
      '@babel/plugin-transform-sticky-regex': 7.18.6_@babel+core@7.18.13
      '@babel/plugin-transform-template-literals': 7.18.9_@babel+core@7.18.13
      '@babel/plugin-transform-typeof-symbol': 7.18.9_@babel+core@7.18.13
      '@babel/plugin-transform-unicode-escapes': 7.18.10_@babel+core@7.18.13
      '@babel/plugin-transform-unicode-regex': 7.18.6_@babel+core@7.18.13
      '@babel/preset-modules': 0.1.5_@babel+core@7.18.13
      '@babel/types': 7.19.0
      babel-plugin-polyfill-corejs2: 0.3.3_@babel+core@7.18.13
      babel-plugin-polyfill-corejs3: 0.6.0_@babel+core@7.18.13
      babel-plugin-polyfill-regenerator: 0.4.1_@babel+core@7.18.13
      core-js-compat: 3.25.1
      semver: 6.3.0
    transitivePeerDependencies:
      - supports-color

  /@babel/preset-modules/0.1.5_@babel+core@7.18.13:
    resolution: {integrity: sha512-A57th6YRG7oR3cq/yt/Y84MvGgE0eJG2F1JLhKuyG+jFxEgrd/HAMJatiFtmOiZurz+0DkrvbheCLaV5f2JfjA==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0
      '@babel/plugin-proposal-unicode-property-regex': 7.18.6_@babel+core@7.18.13
      '@babel/plugin-transform-dotall-regex': 7.18.6_@babel+core@7.18.13
      '@babel/types': 7.19.0
      esutils: 2.0.3

  /@babel/preset-react/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-zXr6atUmyYdiWRVLOZahakYmOBHtWc2WGCkP8PYTgZi0iJXDY2CN180TdrIW4OGOAdLc7TifzDIvtx6izaRIzg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0
      '@babel/helper-validator-option': 7.18.6
      '@babel/plugin-transform-react-display-name': 7.18.6_@babel+core@7.18.13
      '@babel/plugin-transform-react-jsx': 7.19.0_@babel+core@7.18.13
      '@babel/plugin-transform-react-jsx-development': 7.18.6_@babel+core@7.18.13
      '@babel/plugin-transform-react-pure-annotations': 7.18.6_@babel+core@7.18.13

  /@babel/preset-typescript/7.18.6_@babel+core@7.18.13:
    resolution: {integrity: sha512-s9ik86kXBAnD760aybBucdpnLsAt0jK1xqJn2juOn9lkOvSHV60os5hxoVJsPzMQxvnUJFAlkont2DvvaYEBtQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-plugin-utils': 7.19.0
      '@babel/helper-validator-option': 7.18.6
      '@babel/plugin-transform-typescript': 7.19.1_@babel+core@7.18.13
    transitivePeerDependencies:
      - supports-color

  /@babel/runtime-corejs3/7.19.1:
    resolution: {integrity: sha512-j2vJGnkopRzH+ykJ8h68wrHnEUmtK//E723jjixiAl/PPf6FhqY/vYRcMVlNydRKQjQsTsYEjpx+DZMIvnGk/g==}
    engines: {node: '>=6.9.0'}
    dependencies:
      core-js-pure: 3.25.1
      regenerator-runtime: 0.13.9

  /@babel/runtime/7.17.9:
    resolution: {integrity: sha512-lSiBBvodq29uShpWGNbgFdKYNiFDo5/HIYsaCEY9ff4sb10x9jizo2+pRrSyF4jKZCXqgzuqBOQKbUm90gQwJg==}
    engines: {node: '>=6.9.0'}
    dependencies:
      regenerator-runtime: 0.13.9

  /@babel/runtime/7.19.0:
    resolution: {integrity: sha512-eR8Lo9hnDS7tqkO7NsV+mKvCmv5boaXFSZ70DnfhcgiEne8hv9oCEd36Klw74EtizEqLsy4YnW8UWwpBVolHZA==}
    engines: {node: '>=6.9.0'}
    dependencies:
      regenerator-runtime: 0.13.9

  /@babel/template/7.18.10:
    resolution: {integrity: sha512-TI+rCtooWHr3QJ27kJxfjutghu44DLnasDMwpDqCXVTal9RLp3RSYNh4NdBrRP2cQAoG9A8juOQl6P6oZG4JxA==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/code-frame': 7.18.6
      '@babel/parser': 7.19.1
      '@babel/types': 7.19.0

  /@babel/traverse/7.19.1:
    resolution: {integrity: sha512-0j/ZfZMxKukDaag2PtOPDbwuELqIar6lLskVPPJDjXMXjfLb1Obo/1yjxIGqqAJrmfaTIY3z2wFLAQ7qSkLsuA==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/code-frame': 7.18.6
      '@babel/generator': 7.19.0
      '@babel/helper-environment-visitor': 7.18.9
      '@babel/helper-function-name': 7.19.0
      '@babel/helper-hoist-variables': 7.18.6
      '@babel/helper-split-export-declaration': 7.18.6
      '@babel/parser': 7.19.1
      '@babel/types': 7.19.0
      debug: 4.3.4
      globals: 11.12.0
    transitivePeerDependencies:
      - supports-color

  /@babel/types/7.19.0:
    resolution: {integrity: sha512-YuGopBq3ke25BVSiS6fgF49Ul9gH1x70Bcr6bqRLjWCkcX8Hre1/5+z+IiWOIerRMSSEfGZVB9z9kyq7wVs9YA==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/helper-string-parser': 7.18.10
      '@babel/helper-validator-identifier': 7.19.1
      to-fast-properties: 2.0.0

  /@bcoe/v8-coverage/0.2.3:
    resolution: {integrity: sha512-0hYQ8SB4Db5zvZB4axdMHGwEaQjkZzFjQiN9LVYvIFB2nSUHW9tYpxWriPrWDASIxiaXax83REcLxuSdnGPZtw==}
    dev: true

  /@colors/colors/1.5.0:
    resolution: {integrity: sha512-ooWCrlZP11i8GImSjTHYHLkvFDP48nS4+204nGb1RiX/WXYHmJA2III9/e2DWVabCESdW7hBAEzHRqUn9OUVvQ==}
    engines: {node: '>=0.1.90'}
    requiresBuild: true
    optional: true

  /@docsearch/css/3.2.1:
    resolution: {integrity: sha512-gaP6TxxwQC+K8D6TRx5WULUWKrcbzECOPA2KCVMuI+6C7dNiGUk5yXXzVhc5sld79XKYLnO9DRTI4mjXDYkh+g==}
    dev: false

  /@docsearch/react/3.2.1_9bbfc5620c12350ea9a0dd9002ff2069:
    resolution: {integrity: sha512-EzTQ/y82s14IQC5XVestiK/kFFMe2aagoYFuTAIfIb/e+4FU7kSMKonRtLwsCiLQHmjvNQq+HO+33giJ5YVtaQ==}
    peerDependencies:
      '@types/react': '>= 16.8.0 < 19.0.0'
      react: '>= 16.8.0 < 19.0.0'
      react-dom: '>= 16.8.0 < 19.0.0'
    peerDependenciesMeta:
      '@types/react':
        optional: true
      react:
        optional: true
      react-dom:
        optional: true
    dependencies:
      '@algolia/autocomplete-core': 1.7.1
      '@algolia/autocomplete-preset-algolia': 1.7.1_84bcb575a7c193a76ce9e48bebb63fd7
      '@docsearch/css': 3.2.1
      '@types/react': 17.0.50
      algoliasearch: 4.14.2
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
    transitivePeerDependencies:
      - '@algolia/client-search'
    dev: false

  /@docusaurus/core/2.0.0-rc.1_f90645ef485368ffc2e62c5709a76d42:
    resolution: {integrity: sha512-b9FX0Z+EddfQ6wAiNh+Wx4fysKfcvEcWJrZ5USROn3C+EVU5P4luaa8mwWK//O+hTwD9ur7/A44IZ/tWCTAoLQ==}
    engines: {node: '>=16.14'}
    hasBin: true
    peerDependencies:
      react: ^16.8.4 || ^17.0.0
      react-dom: ^16.8.4 || ^17.0.0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/generator': 7.19.0
      '@babel/plugin-syntax-dynamic-import': 7.8.3_@babel+core@7.18.13
      '@babel/plugin-transform-runtime': 7.19.1_@babel+core@7.18.13
      '@babel/preset-env': 7.19.1_@babel+core@7.18.13
      '@babel/preset-react': 7.18.6_@babel+core@7.18.13
      '@babel/preset-typescript': 7.18.6_@babel+core@7.18.13
      '@babel/runtime': 7.19.0
      '@babel/runtime-corejs3': 7.19.1
      '@babel/traverse': 7.19.1
      '@docusaurus/cssnano-preset': 2.0.0-rc.1
      '@docusaurus/logger': 2.0.0-rc.1
      '@docusaurus/mdx-loader': 2.0.0-rc.1_79fabbe882ee2d423a5c4b5147e3b52c
      '@docusaurus/react-loadable': 5.5.2_react@17.0.2
      '@docusaurus/utils': 2.0.0-rc.1_@docusaurus+types@2.0.0-rc.1
      '@docusaurus/utils-common': 2.0.0-rc.1_@docusaurus+types@2.0.0-rc.1
      '@docusaurus/utils-validation': 2.0.0-rc.1_@docusaurus+types@2.0.0-rc.1
      '@slorber/static-site-generator-webpack-plugin': 4.0.7
      '@svgr/webpack': 6.3.1
      autoprefixer: 10.4.11_postcss@8.4.16
      babel-loader: 8.2.5_987cc70bded3fa81b046dafa8784ef98
      babel-plugin-dynamic-import-node: 2.3.3
      boxen: 6.2.1
      chalk: 4.1.2
      chokidar: 3.5.3
      clean-css: 5.3.1
      cli-table3: 0.6.3
      combine-promises: 1.1.0
      commander: 5.1.0
      copy-webpack-plugin: 11.0.0_webpack@5.74.0
      core-js: 3.25.1
      css-loader: 6.7.1_webpack@5.74.0
      css-minimizer-webpack-plugin: 4.1.0_clean-css@5.3.1+webpack@5.74.0
      cssnano: 5.1.13_postcss@8.4.16
      del: 6.1.1
      detect-port: 1.3.0
      escape-html: 1.0.3
      eta: 1.12.3
      file-loader: 6.2.0_webpack@5.74.0
      fs-extra: 10.1.0
      html-minifier-terser: 6.1.0
      html-tags: 3.2.0
      html-webpack-plugin: 5.5.0_webpack@5.74.0
      import-fresh: 3.3.0
      leven: 3.1.0
      lodash: 4.17.21
      mini-css-extract-plugin: 2.6.1_webpack@5.74.0
      postcss: 8.4.16
      postcss-loader: 7.0.1_postcss@8.4.16+webpack@5.74.0
      prompts: 2.4.2
      react: 17.0.2
      react-dev-utils: 12.0.1_typescript@4.7.4+webpack@5.74.0
      react-dom: 17.0.2_react@17.0.2
      react-helmet-async: 1.3.0_react-dom@17.0.2+react@17.0.2
      react-loadable: /@docusaurus/react-loadable/5.5.2_react@17.0.2
      react-loadable-ssr-addon-v5-slorber: 1.0.1_4e32ce23c6949bd47cf53d21bd84df08
      react-router: 5.3.3_react@17.0.2
      react-router-config: 5.1.1_react-router@5.3.3+react@17.0.2
      react-router-dom: 5.3.3_react@17.0.2
      rtl-detect: 1.0.4
      semver: 7.3.7
      serve-handler: 6.1.3
      shelljs: 0.8.5
      terser-webpack-plugin: 5.3.6_webpack@5.74.0
      tslib: 2.4.0
      update-notifier: 5.1.0
      url-loader: 4.1.1_file-loader@6.2.0+webpack@5.74.0
      wait-on: 6.0.1
      webpack: 5.74.0
      webpack-bundle-analyzer: 4.6.1
      webpack-dev-server: 4.11.0_webpack@5.74.0
      webpack-merge: 5.8.0
      webpackbar: 5.0.2_webpack@5.74.0
    transitivePeerDependencies:
      - '@docusaurus/types'
      - '@parcel/css'
      - '@swc/core'
      - bufferutil
      - csso
      - debug
      - esbuild
      - eslint
      - lightningcss
      - supports-color
      - typescript
      - uglify-js
      - utf-8-validate
      - vue-template-compiler
      - webpack-cli
    dev: false

  /@docusaurus/core/2.0.1_03b15cadcc31ab8446516aafa5c14946:
    resolution: {integrity: sha512-Prd46TtZdiixlTl8a+h9bI5HegkfREjSNkrX2rVEwJZeziSz4ya+l7QDnbnCB2XbxEG8cveFo/F9q5lixolDtQ==}
    engines: {node: '>=16.14'}
    hasBin: true
    peerDependencies:
      react: ^16.8.4 || ^17.0.0
      react-dom: ^16.8.4 || ^17.0.0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/generator': 7.19.0
      '@babel/plugin-syntax-dynamic-import': 7.8.3_@babel+core@7.18.13
      '@babel/plugin-transform-runtime': 7.19.1_@babel+core@7.18.13
      '@babel/preset-env': 7.19.1_@babel+core@7.18.13
      '@babel/preset-react': 7.18.6_@babel+core@7.18.13
      '@babel/preset-typescript': 7.18.6_@babel+core@7.18.13
      '@babel/runtime': 7.19.0
      '@babel/runtime-corejs3': 7.19.1
      '@babel/traverse': 7.19.1
      '@docusaurus/cssnano-preset': 2.0.1
      '@docusaurus/logger': 2.0.1
      '@docusaurus/mdx-loader': 2.0.1_27da9a628ab289b1954f8d3232ecc53e
      '@docusaurus/react-loadable': 5.5.2_react@17.0.2
      '@docusaurus/utils': 2.0.1_@docusaurus+types@2.0.1
      '@docusaurus/utils-common': 2.0.1_@docusaurus+types@2.0.1
      '@docusaurus/utils-validation': 2.0.1_@docusaurus+types@2.0.1
      '@slorber/static-site-generator-webpack-plugin': 4.0.7
      '@svgr/webpack': 6.3.1
      autoprefixer: 10.4.11_postcss@8.4.16
      babel-loader: 8.2.5_987cc70bded3fa81b046dafa8784ef98
      babel-plugin-dynamic-import-node: 2.3.3
      boxen: 6.2.1
      chalk: 4.1.2
      chokidar: 3.5.3
      clean-css: 5.3.1
      cli-table3: 0.6.3
      combine-promises: 1.1.0
      commander: 5.1.0
      copy-webpack-plugin: 11.0.0_webpack@5.74.0
      core-js: 3.25.1
      css-loader: 6.7.1_webpack@5.74.0
      css-minimizer-webpack-plugin: 4.1.0_clean-css@5.3.1+webpack@5.74.0
      cssnano: 5.1.13_postcss@8.4.16
      del: 6.1.1
      detect-port: 1.3.0
      escape-html: 1.0.3
      eta: 1.12.3
      file-loader: 6.2.0_webpack@5.74.0
      fs-extra: 10.1.0
      html-minifier-terser: 6.1.0
      html-tags: 3.2.0
      html-webpack-plugin: 5.5.0_webpack@5.74.0
      import-fresh: 3.3.0
      leven: 3.1.0
      lodash: 4.17.21
      mini-css-extract-plugin: 2.6.1_webpack@5.74.0
      postcss: 8.4.16
      postcss-loader: 7.0.1_postcss@8.4.16+webpack@5.74.0
      prompts: 2.4.2
      react: 17.0.2
      react-dev-utils: 12.0.1_typescript@4.7.4+webpack@5.74.0
      react-dom: 17.0.2_react@17.0.2
      react-helmet-async: 1.3.0_react-dom@17.0.2+react@17.0.2
      react-loadable: /@docusaurus/react-loadable/5.5.2_react@17.0.2
      react-loadable-ssr-addon-v5-slorber: 1.0.1_4e32ce23c6949bd47cf53d21bd84df08
      react-router: 5.3.3_react@17.0.2
      react-router-config: 5.1.1_react-router@5.3.3+react@17.0.2
      react-router-dom: 5.3.3_react@17.0.2
      rtl-detect: 1.0.4
      semver: 7.3.7
      serve-handler: 6.1.3
      shelljs: 0.8.5
      terser-webpack-plugin: 5.3.6_webpack@5.74.0
      tslib: 2.4.0
      update-notifier: 5.1.0
      url-loader: 4.1.1_file-loader@6.2.0+webpack@5.74.0
      wait-on: 6.0.1
      webpack: 5.74.0
      webpack-bundle-analyzer: 4.6.1
      webpack-dev-server: 4.11.0_webpack@5.74.0
      webpack-merge: 5.8.0
      webpackbar: 5.0.2_webpack@5.74.0
    transitivePeerDependencies:
      - '@docusaurus/types'
      - '@parcel/css'
      - '@swc/core'
      - bufferutil
      - csso
      - debug
      - esbuild
      - eslint
      - lightningcss
      - supports-color
      - typescript
      - uglify-js
      - utf-8-validate
      - vue-template-compiler
      - webpack-cli
    dev: false

  /@docusaurus/core/2.0.1_dccc44159aab2d15be0b73def9353315:
    resolution: {integrity: sha512-Prd46TtZdiixlTl8a+h9bI5HegkfREjSNkrX2rVEwJZeziSz4ya+l7QDnbnCB2XbxEG8cveFo/F9q5lixolDtQ==}
    engines: {node: '>=16.14'}
    hasBin: true
    peerDependencies:
      react: ^16.8.4 || ^17.0.0
      react-dom: ^16.8.4 || ^17.0.0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/generator': 7.19.0
      '@babel/plugin-syntax-dynamic-import': 7.8.3_@babel+core@7.18.13
      '@babel/plugin-transform-runtime': 7.19.1_@babel+core@7.18.13
      '@babel/preset-env': 7.19.1_@babel+core@7.18.13
      '@babel/preset-react': 7.18.6_@babel+core@7.18.13
      '@babel/preset-typescript': 7.18.6_@babel+core@7.18.13
      '@babel/runtime': 7.19.0
      '@babel/runtime-corejs3': 7.19.1
      '@babel/traverse': 7.19.1
      '@docusaurus/cssnano-preset': 2.0.1
      '@docusaurus/logger': 2.0.1
      '@docusaurus/mdx-loader': 2.0.1_react-dom@17.0.2+react@17.0.2
      '@docusaurus/react-loadable': 5.5.2_react@17.0.2
      '@docusaurus/utils': 2.0.1
      '@docusaurus/utils-common': 2.0.1
      '@docusaurus/utils-validation': 2.0.1
      '@slorber/static-site-generator-webpack-plugin': 4.0.7
      '@svgr/webpack': 6.3.1
      autoprefixer: 10.4.11_postcss@8.4.16
      babel-loader: 8.2.5_987cc70bded3fa81b046dafa8784ef98
      babel-plugin-dynamic-import-node: 2.3.3
      boxen: 6.2.1
      chalk: 4.1.2
      chokidar: 3.5.3
      clean-css: 5.3.1
      cli-table3: 0.6.3
      combine-promises: 1.1.0
      commander: 5.1.0
      copy-webpack-plugin: 11.0.0_webpack@5.74.0
      core-js: 3.25.1
      css-loader: 6.7.1_webpack@5.74.0
      css-minimizer-webpack-plugin: 4.1.0_clean-css@5.3.1+webpack@5.74.0
      cssnano: 5.1.13_postcss@8.4.16
      del: 6.1.1
      detect-port: 1.3.0
      escape-html: 1.0.3
      eta: 1.12.3
      file-loader: 6.2.0_webpack@5.74.0
      fs-extra: 10.1.0
      html-minifier-terser: 6.1.0
      html-tags: 3.2.0
      html-webpack-plugin: 5.5.0_webpack@5.74.0
      import-fresh: 3.3.0
      leven: 3.1.0
      lodash: 4.17.21
      mini-css-extract-plugin: 2.6.1_webpack@5.74.0
      postcss: 8.4.16
      postcss-loader: 7.0.1_postcss@8.4.16+webpack@5.74.0
      prompts: 2.4.2
      react: 17.0.2
      react-dev-utils: 12.0.1_typescript@4.7.4+webpack@5.74.0
      react-dom: 17.0.2_react@17.0.2
      react-helmet-async: 1.3.0_react-dom@17.0.2+react@17.0.2
      react-loadable: /@docusaurus/react-loadable/5.5.2_react@17.0.2
      react-loadable-ssr-addon-v5-slorber: 1.0.1_4e32ce23c6949bd47cf53d21bd84df08
      react-router: 5.3.3_react@17.0.2
      react-router-config: 5.1.1_react-router@5.3.3+react@17.0.2
      react-router-dom: 5.3.3_react@17.0.2
      rtl-detect: 1.0.4
      semver: 7.3.7
      serve-handler: 6.1.3
      shelljs: 0.8.5
      terser-webpack-plugin: 5.3.6_webpack@5.74.0
      tslib: 2.4.0
      update-notifier: 5.1.0
      url-loader: 4.1.1_file-loader@6.2.0+webpack@5.74.0
      wait-on: 6.0.1
      webpack: 5.74.0
      webpack-bundle-analyzer: 4.6.1
      webpack-dev-server: 4.11.0_webpack@5.74.0
      webpack-merge: 5.8.0
      webpackbar: 5.0.2_webpack@5.74.0
    transitivePeerDependencies:
      - '@docusaurus/types'
      - '@parcel/css'
      - '@swc/core'
      - bufferutil
      - csso
      - debug
      - esbuild
      - eslint
      - lightningcss
      - supports-color
      - typescript
      - uglify-js
      - utf-8-validate
      - vue-template-compiler
      - webpack-cli

  /@docusaurus/cssnano-preset/2.0.0-rc.1:
    resolution: {integrity: sha512-9/KmQvF+eTlMqUqG6UcXbRgxbGed/8bQInXuKEs+95/jI6jO/3xSzuRwuHHHP0naUvSVWjnNI9jngPrQerXE5w==}
    engines: {node: '>=16.14'}
    dependencies:
      cssnano-preset-advanced: 5.3.8_postcss@8.4.16
      postcss: 8.4.16
      postcss-sort-media-queries: 4.3.0_postcss@8.4.16
      tslib: 2.4.0
    dev: false

  /@docusaurus/cssnano-preset/2.0.1:
    resolution: {integrity: sha512-MCJ6rRmlqLmlCsZIoIxOxDb0rYzIPEm9PYpsBW+CGNnbk+x8xK+11hnrxzvXHqDRNpxrq3Kq2jYUmg/DkqE6vg==}
    engines: {node: '>=16.14'}
    dependencies:
      cssnano-preset-advanced: 5.3.8_postcss@8.4.16
      postcss: 8.4.16
      postcss-sort-media-queries: 4.3.0_postcss@8.4.16
      tslib: 2.4.0

  /@docusaurus/logger/2.0.0-rc.1:
    resolution: {integrity: sha512-daa3g+SXuO9K60PVMiSUmDEK9Vro+Ed7i7uF8CH6QQJLcNZy/zJc0Xz62eH7ip1x77fmeb6Rg4Us1TqTFc9AbQ==}
    engines: {node: '>=16.14'}
    dependencies:
      chalk: 4.1.2
      tslib: 2.4.0
    dev: false

  /@docusaurus/logger/2.0.1:
    resolution: {integrity: sha512-wIWseCKko1w/WARcDjO3N/XoJ0q/VE42AthP0eNAfEazDjJ94NXbaI6wuUsuY/bMg6hTKGVIpphjj2LoX3g6dA==}
    engines: {node: '>=16.14'}
    dependencies:
      chalk: 4.1.2
      tslib: 2.4.0

  /@docusaurus/mdx-loader/2.0.0-rc.1_79fabbe882ee2d423a5c4b5147e3b52c:
    resolution: {integrity: sha512-8Fg0c/ceu39knmr7w0dutm7gq3YxKYCqWVS2cB/cPATzChCCNH/AGLfBT6sz/Z4tjVXE+NyREq2pfOFvkhjVXg==}
    engines: {node: '>=16.14'}
    peerDependencies:
      react: ^16.8.4 || ^17.0.0
      react-dom: ^16.8.4 || ^17.0.0
    dependencies:
      '@babel/parser': 7.19.1
      '@babel/traverse': 7.19.1
      '@docusaurus/logger': 2.0.0-rc.1
      '@docusaurus/utils': 2.0.0-rc.1_@docusaurus+types@2.0.0-rc.1
      '@mdx-js/mdx': 1.6.22
      escape-html: 1.0.3
      file-loader: 6.2.0_webpack@5.74.0
      fs-extra: 10.1.0
      image-size: 1.0.2
      mdast-util-to-string: 2.0.0
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
      remark-emoji: 2.2.0
      stringify-object: 3.3.0
      tslib: 2.4.0
      unified: 9.2.2
      unist-util-visit: 2.0.3
      url-loader: 4.1.1_file-loader@6.2.0+webpack@5.74.0
      webpack: 5.74.0
    transitivePeerDependencies:
      - '@docusaurus/types'
      - '@swc/core'
      - esbuild
      - supports-color
      - uglify-js
      - webpack-cli
    dev: false

  /@docusaurus/mdx-loader/2.0.1_27da9a628ab289b1954f8d3232ecc53e:
    resolution: {integrity: sha512-tdNeljdilXCmhbaEND3SAgsqaw/oh7v9onT5yrIrL26OSk2AFwd+MIi4R8jt8vq33M0R4rz2wpknm0fQIkDdvQ==}
    engines: {node: '>=16.14'}
    peerDependencies:
      react: ^16.8.4 || ^17.0.0
      react-dom: ^16.8.4 || ^17.0.0
    dependencies:
      '@babel/parser': 7.19.1
      '@babel/traverse': 7.19.1
      '@docusaurus/logger': 2.0.1
      '@docusaurus/utils': 2.0.1_@docusaurus+types@2.0.1
      '@mdx-js/mdx': 1.6.22
      escape-html: 1.0.3
      file-loader: 6.2.0_webpack@5.74.0
      fs-extra: 10.1.0
      image-size: 1.0.2
      mdast-util-to-string: 2.0.0
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
      remark-emoji: 2.2.0
      stringify-object: 3.3.0
      tslib: 2.4.0
      unified: 9.2.2
      unist-util-visit: 2.0.3
      url-loader: 4.1.1_file-loader@6.2.0+webpack@5.74.0
      webpack: 5.74.0
    transitivePeerDependencies:
      - '@docusaurus/types'
      - '@swc/core'
      - esbuild
      - supports-color
      - uglify-js
      - webpack-cli
    dev: false

  /@docusaurus/mdx-loader/2.0.1_react-dom@17.0.2+react@17.0.2:
    resolution: {integrity: sha512-tdNeljdilXCmhbaEND3SAgsqaw/oh7v9onT5yrIrL26OSk2AFwd+MIi4R8jt8vq33M0R4rz2wpknm0fQIkDdvQ==}
    engines: {node: '>=16.14'}
    peerDependencies:
      react: ^16.8.4 || ^17.0.0
      react-dom: ^16.8.4 || ^17.0.0
    dependencies:
      '@babel/parser': 7.19.1
      '@babel/traverse': 7.19.1
      '@docusaurus/logger': 2.0.1
      '@docusaurus/utils': 2.0.1
      '@mdx-js/mdx': 1.6.22
      escape-html: 1.0.3
      file-loader: 6.2.0_webpack@5.74.0
      fs-extra: 10.1.0
      image-size: 1.0.2
      mdast-util-to-string: 2.0.0
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
      remark-emoji: 2.2.0
      stringify-object: 3.3.0
      tslib: 2.4.0
      unified: 9.2.2
      unist-util-visit: 2.0.3
      url-loader: 4.1.1_file-loader@6.2.0+webpack@5.74.0
      webpack: 5.74.0
    transitivePeerDependencies:
      - '@docusaurus/types'
      - '@swc/core'
      - esbuild
      - supports-color
      - uglify-js
      - webpack-cli

  /@docusaurus/module-type-aliases/2.0.0-rc.1_react-dom@17.0.2+react@17.0.2:
    resolution: {integrity: sha512-la7D8ggFP8I5nOp/Epl6NqTeDWcbofPVMOaVisRxQbx5iuF9Al+AITbaDgm4CXpFLJACsqhsXD5W4BnKX8ZxfA==}
    peerDependencies:
      react: '*'
      react-dom: '*'
    dependencies:
      '@docusaurus/react-loadable': 5.5.2_react@17.0.2
      '@docusaurus/types': 2.0.0-rc.1_react-dom@17.0.2+react@17.0.2
      '@types/history': 4.7.11
      '@types/react': 17.0.50
      '@types/react-router-config': 5.0.6
      '@types/react-router-dom': 5.3.3
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
      react-helmet-async: 1.3.0_react-dom@17.0.2+react@17.0.2
      react-loadable: /@docusaurus/react-loadable/5.5.2_react@17.0.2
    transitivePeerDependencies:
      - '@swc/core'
      - esbuild
      - uglify-js
      - webpack-cli
    dev: false

  /@docusaurus/module-type-aliases/2.0.1_react-dom@17.0.2+react@17.0.2:
    resolution: {integrity: sha512-f888ylnxHAM/3T8p1lx08+lTc6/g7AweSRfRuZvrVhHXj3Tz/nTTxaP6gPTGkJK7WLqTagpar/IGP6/74IBbkg==}
    peerDependencies:
      react: '*'
      react-dom: '*'
    dependencies:
      '@docusaurus/react-loadable': 5.5.2_react@17.0.2
      '@docusaurus/types': 2.0.1_react-dom@17.0.2+react@17.0.2
      '@types/history': 4.7.11
      '@types/react': 17.0.50
      '@types/react-router-config': 5.0.6
      '@types/react-router-dom': 5.3.3
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
      react-helmet-async: 1.3.0_react-dom@17.0.2+react@17.0.2
      react-loadable: /@docusaurus/react-loadable/5.5.2_react@17.0.2
    transitivePeerDependencies:
      - '@swc/core'
      - esbuild
      - uglify-js
      - webpack-cli
    dev: false

  /@docusaurus/plugin-content-blog/2.0.1_dccc44159aab2d15be0b73def9353315:
    resolution: {integrity: sha512-/4ua3iFYcpwgpeYgHnhVGROB/ybnauLH2+rICb4vz/+Gn1hjAmGXVYq1fk8g49zGs3uxx5nc0H5bL9P0g977IQ==}
    engines: {node: '>=16.14'}
    peerDependencies:
      react: ^16.8.4 || ^17.0.0
      react-dom: ^16.8.4 || ^17.0.0
    dependencies:
      '@docusaurus/core': 2.0.1_03b15cadcc31ab8446516aafa5c14946
      '@docusaurus/logger': 2.0.1
      '@docusaurus/mdx-loader': 2.0.1_27da9a628ab289b1954f8d3232ecc53e
      '@docusaurus/types': 2.0.1_react-dom@17.0.2+react@17.0.2
      '@docusaurus/utils': 2.0.1_@docusaurus+types@2.0.1
      '@docusaurus/utils-common': 2.0.1_@docusaurus+types@2.0.1
      '@docusaurus/utils-validation': 2.0.1_@docusaurus+types@2.0.1
      cheerio: 1.0.0-rc.12
      feed: 4.2.2
      fs-extra: 10.1.0
      lodash: 4.17.21
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
      reading-time: 1.5.0
      tslib: 2.4.0
      unist-util-visit: 2.0.3
      utility-types: 3.10.0
      webpack: 5.74.0
    transitivePeerDependencies:
      - '@parcel/css'
      - '@swc/core'
      - bufferutil
      - csso
      - debug
      - esbuild
      - eslint
      - lightningcss
      - supports-color
      - typescript
      - uglify-js
      - utf-8-validate
      - vue-template-compiler
      - webpack-cli
    dev: false

  /@docusaurus/plugin-content-docs/2.0.0-rc.1_dccc44159aab2d15be0b73def9353315:
    resolution: {integrity: sha512-Yk5Hu6uaw3tRplzJnbDygwRhmZ3PCzEXD4SJpBA6cPC73ylfqOEh6qhiU+BWhMTtDXNhY+athk5Kycfk3DW1aQ==}
    engines: {node: '>=16.14'}
    peerDependencies:
      react: ^16.8.4 || ^17.0.0
      react-dom: ^16.8.4 || ^17.0.0
    dependencies:
      '@docusaurus/core': 2.0.0-rc.1_f90645ef485368ffc2e62c5709a76d42
      '@docusaurus/logger': 2.0.0-rc.1
      '@docusaurus/mdx-loader': 2.0.0-rc.1_79fabbe882ee2d423a5c4b5147e3b52c
      '@docusaurus/module-type-aliases': 2.0.0-rc.1_react-dom@17.0.2+react@17.0.2
      '@docusaurus/types': 2.0.0-rc.1_react-dom@17.0.2+react@17.0.2
      '@docusaurus/utils': 2.0.0-rc.1_@docusaurus+types@2.0.0-rc.1
      '@docusaurus/utils-validation': 2.0.0-rc.1_@docusaurus+types@2.0.0-rc.1
      '@types/react-router-config': 5.0.6
      combine-promises: 1.1.0
      fs-extra: 10.1.0
      import-fresh: 3.3.0
      js-yaml: 4.1.0
      lodash: 4.17.21
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
      tslib: 2.4.0
      utility-types: 3.10.0
      webpack: 5.74.0
    transitivePeerDependencies:
      - '@parcel/css'
      - '@swc/core'
      - bufferutil
      - csso
      - debug
      - esbuild
      - eslint
      - lightningcss
      - supports-color
      - typescript
      - uglify-js
      - utf-8-validate
      - vue-template-compiler
      - webpack-cli
    dev: false

  /@docusaurus/plugin-content-docs/2.0.1_dccc44159aab2d15be0b73def9353315:
    resolution: {integrity: sha512-2qeBWRy1EjgnXdwAO6/csDIS1UVNmhmtk/bQ2s9jqjpwM8YVgZ8QVdkxFAMWXgZWDQdwWwdP1rnmoEelE4HknQ==}
    engines: {node: '>=16.14'}
    peerDependencies:
      react: ^16.8.4 || ^17.0.0
      react-dom: ^16.8.4 || ^17.0.0
    dependencies:
      '@docusaurus/core': 2.0.1_03b15cadcc31ab8446516aafa5c14946
      '@docusaurus/logger': 2.0.1
      '@docusaurus/mdx-loader': 2.0.1_27da9a628ab289b1954f8d3232ecc53e
      '@docusaurus/module-type-aliases': 2.0.1_react-dom@17.0.2+react@17.0.2
      '@docusaurus/types': 2.0.1_react-dom@17.0.2+react@17.0.2
      '@docusaurus/utils': 2.0.1_@docusaurus+types@2.0.1
      '@docusaurus/utils-validation': 2.0.1_@docusaurus+types@2.0.1
      '@types/react-router-config': 5.0.6
      combine-promises: 1.1.0
      fs-extra: 10.1.0
      import-fresh: 3.3.0
      js-yaml: 4.1.0
      lodash: 4.17.21
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
      tslib: 2.4.0
      utility-types: 3.10.0
      webpack: 5.74.0
    transitivePeerDependencies:
      - '@parcel/css'
      - '@swc/core'
      - bufferutil
      - csso
      - debug
      - esbuild
      - eslint
      - lightningcss
      - supports-color
      - typescript
      - uglify-js
      - utf-8-validate
      - vue-template-compiler
      - webpack-cli
    dev: false

  /@docusaurus/plugin-content-pages/2.0.1_dccc44159aab2d15be0b73def9353315:
    resolution: {integrity: sha512-6apSVeJENnNecAH5cm5VnRqR103M6qSI6IuiP7tVfD5H4AWrfDNkvJQV2+R2PIq3bGrwmX4fcXl1x4g0oo7iwA==}
    engines: {node: '>=16.14'}
    peerDependencies:
      react: ^16.8.4 || ^17.0.0
      react-dom: ^16.8.4 || ^17.0.0
    dependencies:
      '@docusaurus/core': 2.0.1_03b15cadcc31ab8446516aafa5c14946
      '@docusaurus/mdx-loader': 2.0.1_27da9a628ab289b1954f8d3232ecc53e
      '@docusaurus/types': 2.0.1_react-dom@17.0.2+react@17.0.2
      '@docusaurus/utils': 2.0.1_@docusaurus+types@2.0.1
      '@docusaurus/utils-validation': 2.0.1_@docusaurus+types@2.0.1
      fs-extra: 10.1.0
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
      tslib: 2.4.0
      webpack: 5.74.0
    transitivePeerDependencies:
      - '@parcel/css'
      - '@swc/core'
      - bufferutil
      - csso
      - debug
      - esbuild
      - eslint
      - lightningcss
      - supports-color
      - typescript
      - uglify-js
      - utf-8-validate
      - vue-template-compiler
      - webpack-cli
    dev: false

  /@docusaurus/plugin-debug/2.0.1_21c6688b25fc7b10b455f050726d0269:
    resolution: {integrity: sha512-jpZBT5HK7SWx1LRQyv9d14i44vSsKXGZsSPA2ndth5HykHJsiAj9Fwl1AtzmtGYuBmI+iXQyOd4MAMHd4ZZ1tg==}
    engines: {node: '>=16.14'}
    peerDependencies:
      react: ^16.8.4 || ^17.0.0
      react-dom: ^16.8.4 || ^17.0.0
    dependencies:
      '@docusaurus/core': 2.0.1_03b15cadcc31ab8446516aafa5c14946
      '@docusaurus/types': 2.0.1_react-dom@17.0.2+react@17.0.2
      '@docusaurus/utils': 2.0.1_@docusaurus+types@2.0.1
      fs-extra: 10.1.0
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
      react-json-view: 1.21.3_3a28dae5d20d968467088dcb8f1d3843
      tslib: 2.4.0
    transitivePeerDependencies:
      - '@parcel/css'
      - '@swc/core'
      - '@types/react'
      - bufferutil
      - csso
      - debug
      - encoding
      - esbuild
      - eslint
      - lightningcss
      - supports-color
      - typescript
      - uglify-js
      - utf-8-validate
      - vue-template-compiler
      - webpack-cli
    dev: false

  /@docusaurus/plugin-google-analytics/2.0.1_dccc44159aab2d15be0b73def9353315:
    resolution: {integrity: sha512-d5qb+ZeQcg1Czoxc+RacETjLdp2sN/TAd7PGN/GrvtijCdgNmvVAtZ9QgajBTG0YbJFVPTeZ39ad2bpoOexX0w==}
    engines: {node: '>=16.14'}
    peerDependencies:
      react: ^16.8.4 || ^17.0.0
      react-dom: ^16.8.4 || ^17.0.0
    dependencies:
      '@docusaurus/core': 2.0.1_03b15cadcc31ab8446516aafa5c14946
      '@docusaurus/types': 2.0.1_react-dom@17.0.2+react@17.0.2
      '@docusaurus/utils-validation': 2.0.1_@docusaurus+types@2.0.1
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
      tslib: 2.4.0
    transitivePeerDependencies:
      - '@parcel/css'
      - '@swc/core'
      - bufferutil
      - csso
      - debug
      - esbuild
      - eslint
      - lightningcss
      - supports-color
      - typescript
      - uglify-js
      - utf-8-validate
      - vue-template-compiler
      - webpack-cli
    dev: false

  /@docusaurus/plugin-google-gtag/2.0.1_dccc44159aab2d15be0b73def9353315:
    resolution: {integrity: sha512-qiRufJe2FvIyzICbkjm4VbVCI1hyEju/CebfDKkKh2ZtV4q6DM1WZG7D6VoQSXL8MrMFB895gipOM4BwdM8VsQ==}
    engines: {node: '>=16.14'}
    peerDependencies:
      react: ^16.8.4 || ^17.0.0
      react-dom: ^16.8.4 || ^17.0.0
    dependencies:
      '@docusaurus/core': 2.0.1_03b15cadcc31ab8446516aafa5c14946
      '@docusaurus/types': 2.0.1_react-dom@17.0.2+react@17.0.2
      '@docusaurus/utils-validation': 2.0.1_@docusaurus+types@2.0.1
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
      tslib: 2.4.0
    transitivePeerDependencies:
      - '@parcel/css'
      - '@swc/core'
      - bufferutil
      - csso
      - debug
      - esbuild
      - eslint
      - lightningcss
      - supports-color
      - typescript
      - uglify-js
      - utf-8-validate
      - vue-template-compiler
      - webpack-cli
    dev: false

  /@docusaurus/plugin-sitemap/2.0.1_dccc44159aab2d15be0b73def9353315:
    resolution: {integrity: sha512-KcYuIUIp2JPzUf+Xa7W2BSsjLgN1/0h+VAz7D/C3RYjAgC5ApPX8wO+TECmGfunl/m7WKGUmLabfOon/as64kQ==}
    engines: {node: '>=16.14'}
    peerDependencies:
      react: ^16.8.4 || ^17.0.0
      react-dom: ^16.8.4 || ^17.0.0
    dependencies:
      '@docusaurus/core': 2.0.1_03b15cadcc31ab8446516aafa5c14946
      '@docusaurus/logger': 2.0.1
      '@docusaurus/types': 2.0.1_react-dom@17.0.2+react@17.0.2
      '@docusaurus/utils': 2.0.1_@docusaurus+types@2.0.1
      '@docusaurus/utils-common': 2.0.1_@docusaurus+types@2.0.1
      '@docusaurus/utils-validation': 2.0.1_@docusaurus+types@2.0.1
      fs-extra: 10.1.0
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
      sitemap: 7.1.1
      tslib: 2.4.0
    transitivePeerDependencies:
      - '@parcel/css'
      - '@swc/core'
      - bufferutil
      - csso
      - debug
      - esbuild
      - eslint
      - lightningcss
      - supports-color
      - typescript
      - uglify-js
      - utf-8-validate
      - vue-template-compiler
      - webpack-cli
    dev: false

  /@docusaurus/preset-classic/2.0.1_9d6b0445b2f7e7c4255e4576e99c0a82:
    resolution: {integrity: sha512-nOoniTg46My1qdDlLWeFs55uEmxOJ+9WMF8KKG8KMCu5LAvpemMi7rQd4x8Tw+xiPHZ/sQzH9JmPTMPRE4QGPw==}
    engines: {node: '>=16.14'}
    peerDependencies:
      react: ^16.8.4 || ^17.0.0
      react-dom: ^16.8.4 || ^17.0.0
    dependencies:
      '@docusaurus/core': 2.0.1_03b15cadcc31ab8446516aafa5c14946
      '@docusaurus/plugin-content-blog': 2.0.1_dccc44159aab2d15be0b73def9353315
      '@docusaurus/plugin-content-docs': 2.0.1_dccc44159aab2d15be0b73def9353315
      '@docusaurus/plugin-content-pages': 2.0.1_dccc44159aab2d15be0b73def9353315
      '@docusaurus/plugin-debug': 2.0.1_21c6688b25fc7b10b455f050726d0269
      '@docusaurus/plugin-google-analytics': 2.0.1_dccc44159aab2d15be0b73def9353315
      '@docusaurus/plugin-google-gtag': 2.0.1_dccc44159aab2d15be0b73def9353315
      '@docusaurus/plugin-sitemap': 2.0.1_dccc44159aab2d15be0b73def9353315
      '@docusaurus/theme-classic': 2.0.1_dccc44159aab2d15be0b73def9353315
      '@docusaurus/theme-common': 2.0.1_03b15cadcc31ab8446516aafa5c14946
      '@docusaurus/theme-search-algolia': 2.0.1_f7d771387367e6c67009df8df5fa0249
      '@docusaurus/types': 2.0.1_react-dom@17.0.2+react@17.0.2
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
    transitivePeerDependencies:
      - '@algolia/client-search'
      - '@parcel/css'
      - '@swc/core'
      - '@types/react'
      - bufferutil
      - csso
      - debug
      - encoding
      - esbuild
      - eslint
      - lightningcss
      - supports-color
      - typescript
      - uglify-js
      - utf-8-validate
      - vue-template-compiler
      - webpack-cli
    dev: false

  /@docusaurus/react-loadable/5.5.2_react@17.0.2:
    resolution: {integrity: sha512-A3dYjdBGuy0IGT+wyLIGIKLRE+sAk1iNk0f1HjNDysO7u8lhL4N3VEm+FAubmJbAztn94F7MxBTPmnixbiyFdQ==}
    peerDependencies:
      react: '*'
    dependencies:
      '@types/react': 17.0.50
      prop-types: 15.8.1
      react: 17.0.2

  /@docusaurus/theme-classic/2.0.1_dccc44159aab2d15be0b73def9353315:
    resolution: {integrity: sha512-0jfigiqkUwIuKOw7Me5tqUM9BBvoQX7qqeevx7v4tkYQexPhk3VYSZo7aRuoJ9oyW5makCTPX551PMJzmq7+sw==}
    engines: {node: '>=16.14'}
    peerDependencies:
      react: ^16.8.4 || ^17.0.0
      react-dom: ^16.8.4 || ^17.0.0
    dependencies:
      '@docusaurus/core': 2.0.1_03b15cadcc31ab8446516aafa5c14946
      '@docusaurus/mdx-loader': 2.0.1_27da9a628ab289b1954f8d3232ecc53e
      '@docusaurus/module-type-aliases': 2.0.1_react-dom@17.0.2+react@17.0.2
      '@docusaurus/plugin-content-blog': 2.0.1_dccc44159aab2d15be0b73def9353315
      '@docusaurus/plugin-content-docs': 2.0.1_dccc44159aab2d15be0b73def9353315
      '@docusaurus/plugin-content-pages': 2.0.1_dccc44159aab2d15be0b73def9353315
      '@docusaurus/theme-common': 2.0.1_03b15cadcc31ab8446516aafa5c14946
      '@docusaurus/theme-translations': 2.0.1
      '@docusaurus/types': 2.0.1_react-dom@17.0.2+react@17.0.2
      '@docusaurus/utils': 2.0.1_@docusaurus+types@2.0.1
      '@docusaurus/utils-common': 2.0.1_@docusaurus+types@2.0.1
      '@docusaurus/utils-validation': 2.0.1_@docusaurus+types@2.0.1
      '@mdx-js/react': 1.6.22_react@17.0.2
      clsx: 1.2.1
      copy-text-to-clipboard: 3.0.1
      infima: 0.2.0-alpha.42
      lodash: 4.17.21
      nprogress: 0.2.0
      postcss: 8.4.16
      prism-react-renderer: 1.3.5_react@17.0.2
      prismjs: 1.29.0
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
      react-router-dom: 5.3.3_react@17.0.2
      rtlcss: 3.5.0
      tslib: 2.4.0
      utility-types: 3.10.0
    transitivePeerDependencies:
      - '@parcel/css'
      - '@swc/core'
      - bufferutil
      - csso
      - debug
      - esbuild
      - eslint
      - lightningcss
      - supports-color
      - typescript
      - uglify-js
      - utf-8-validate
      - vue-template-compiler
      - webpack-cli
    dev: false

  /@docusaurus/theme-common/2.0.1_03b15cadcc31ab8446516aafa5c14946:
    resolution: {integrity: sha512-I3b6e/ryiTQMsbES40cP0DRGnfr0E2qghVq+XecyMKjBPejISoSFEDn0MsnbW8Q26k1Dh/0qDH8QKDqaZZgLhA==}
    engines: {node: '>=16.14'}
    peerDependencies:
      react: ^16.8.4 || ^17.0.0
      react-dom: ^16.8.4 || ^17.0.0
    dependencies:
      '@docusaurus/mdx-loader': 2.0.1_27da9a628ab289b1954f8d3232ecc53e
      '@docusaurus/module-type-aliases': 2.0.1_react-dom@17.0.2+react@17.0.2
      '@docusaurus/plugin-content-blog': 2.0.1_dccc44159aab2d15be0b73def9353315
      '@docusaurus/plugin-content-docs': 2.0.1_dccc44159aab2d15be0b73def9353315
      '@docusaurus/plugin-content-pages': 2.0.1_dccc44159aab2d15be0b73def9353315
      '@docusaurus/utils': 2.0.1_@docusaurus+types@2.0.1
      '@types/history': 4.7.11
      '@types/react': 17.0.50
      '@types/react-router-config': 5.0.6
      clsx: 1.2.1
      parse-numeric-range: 1.3.0
      prism-react-renderer: 1.3.5_react@17.0.2
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
      tslib: 2.4.0
      utility-types: 3.10.0
    transitivePeerDependencies:
      - '@docusaurus/types'
      - '@parcel/css'
      - '@swc/core'
      - bufferutil
      - csso
      - debug
      - esbuild
      - eslint
      - lightningcss
      - supports-color
      - typescript
      - uglify-js
      - utf-8-validate
      - vue-template-compiler
      - webpack-cli
    dev: false

  /@docusaurus/theme-common/2.0.1_dccc44159aab2d15be0b73def9353315:
    resolution: {integrity: sha512-I3b6e/ryiTQMsbES40cP0DRGnfr0E2qghVq+XecyMKjBPejISoSFEDn0MsnbW8Q26k1Dh/0qDH8QKDqaZZgLhA==}
    engines: {node: '>=16.14'}
    peerDependencies:
      react: ^16.8.4 || ^17.0.0
      react-dom: ^16.8.4 || ^17.0.0
    dependencies:
      '@docusaurus/mdx-loader': 2.0.1_react-dom@17.0.2+react@17.0.2
      '@docusaurus/module-type-aliases': 2.0.1_react-dom@17.0.2+react@17.0.2
      '@docusaurus/plugin-content-blog': 2.0.1_dccc44159aab2d15be0b73def9353315
      '@docusaurus/plugin-content-docs': 2.0.1_dccc44159aab2d15be0b73def9353315
      '@docusaurus/plugin-content-pages': 2.0.1_dccc44159aab2d15be0b73def9353315
      '@docusaurus/utils': 2.0.1
      '@types/history': 4.7.11
      '@types/react': 17.0.50
      '@types/react-router-config': 5.0.6
      clsx: 1.2.1
      parse-numeric-range: 1.3.0
      prism-react-renderer: 1.3.5_react@17.0.2
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
      tslib: 2.4.0
      utility-types: 3.10.0
    transitivePeerDependencies:
      - '@docusaurus/types'
      - '@parcel/css'
      - '@swc/core'
      - bufferutil
      - csso
      - debug
      - esbuild
      - eslint
      - lightningcss
      - supports-color
      - typescript
      - uglify-js
      - utf-8-validate
      - vue-template-compiler
      - webpack-cli
    dev: false

  /@docusaurus/theme-search-algolia/2.0.1_f7d771387367e6c67009df8df5fa0249:
    resolution: {integrity: sha512-cw3NaOSKbYlsY6uNj4PgO+5mwyQ3aEWre5RlmvjStaz2cbD15Nr69VG8Rd/F6Q5VsCT8BvSdkPDdDG5d/ACexg==}
    engines: {node: '>=16.14'}
    peerDependencies:
      react: ^16.8.4 || ^17.0.0
      react-dom: ^16.8.4 || ^17.0.0
    dependencies:
      '@docsearch/react': 3.2.1_9bbfc5620c12350ea9a0dd9002ff2069
      '@docusaurus/core': 2.0.1_03b15cadcc31ab8446516aafa5c14946
      '@docusaurus/logger': 2.0.1
      '@docusaurus/plugin-content-docs': 2.0.1_dccc44159aab2d15be0b73def9353315
      '@docusaurus/theme-common': 2.0.1_03b15cadcc31ab8446516aafa5c14946
      '@docusaurus/theme-translations': 2.0.1
      '@docusaurus/utils': 2.0.1_@docusaurus+types@2.0.1
      '@docusaurus/utils-validation': 2.0.1_@docusaurus+types@2.0.1
      algoliasearch: 4.14.2
      algoliasearch-helper: 3.11.1_algoliasearch@4.14.2
      clsx: 1.2.1
      eta: 1.12.3
      fs-extra: 10.1.0
      lodash: 4.17.21
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
      tslib: 2.4.0
      utility-types: 3.10.0
    transitivePeerDependencies:
      - '@algolia/client-search'
      - '@docusaurus/types'
      - '@parcel/css'
      - '@swc/core'
      - '@types/react'
      - bufferutil
      - csso
      - debug
      - esbuild
      - eslint
      - lightningcss
      - supports-color
      - typescript
      - uglify-js
      - utf-8-validate
      - vue-template-compiler
      - webpack-cli
    dev: false

  /@docusaurus/theme-translations/2.0.0-rc.1:
    resolution: {integrity: sha512-JLhNdlnbQhxVQzOnLyiCaTzKFa1lpVrM3nCrkGQKscoG2rY6ARGYMgMN2DkoH6hm7TflQ8+PE1S5MzzASeLs4Q==}
    engines: {node: '>=16.14'}
    dependencies:
      fs-extra: 10.1.0
      tslib: 2.4.0
    dev: false

  /@docusaurus/theme-translations/2.0.1:
    resolution: {integrity: sha512-v1MYYlbsdX+rtKnXFcIAn9ar0Z6K0yjqnCYS0p/KLCLrfJwfJ8A3oRJw2HiaIb8jQfk1WMY2h5Qi1p4vHOekQw==}
    engines: {node: '>=16.14'}
    dependencies:
      fs-extra: 10.1.0
      tslib: 2.4.0
    dev: false

  /@docusaurus/types/2.0.0-rc.1_react-dom@17.0.2+react@17.0.2:
    resolution: {integrity: sha512-wX25FOZa/aKnCGA5ljWPaDpMW3TuTbs0BtjQ8WTC557p8zDvuz4r+g2/FPHsgWE0TKwUMf4usQU1m3XpJLPN+g==}
    peerDependencies:
      react: ^16.8.4 || ^17.0.0
      react-dom: ^16.8.4 || ^17.0.0
    dependencies:
      '@types/history': 4.7.11
      '@types/react': 17.0.50
      commander: 5.1.0
      joi: 17.6.0
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
      react-helmet-async: 1.3.0_react-dom@17.0.2+react@17.0.2
      utility-types: 3.10.0
      webpack: 5.74.0
      webpack-merge: 5.8.0
    transitivePeerDependencies:
      - '@swc/core'
      - esbuild
      - uglify-js
      - webpack-cli
    dev: false

  /@docusaurus/types/2.0.1_react-dom@17.0.2+react@17.0.2:
    resolution: {integrity: sha512-o+4hAFWkj3sBszVnRTAnNqtAIuIW0bNaYyDwQhQ6bdz3RAPEq9cDKZxMpajsj4z2nRty8XjzhyufAAjxFTyrfg==}
    peerDependencies:
      react: ^16.8.4 || ^17.0.0
      react-dom: ^16.8.4 || ^17.0.0
    dependencies:
      '@types/history': 4.7.11
      '@types/react': 17.0.50
      commander: 5.1.0
      joi: 17.6.0
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
      react-helmet-async: 1.3.0_react-dom@17.0.2+react@17.0.2
      utility-types: 3.10.0
      webpack: 5.74.0
      webpack-merge: 5.8.0
    transitivePeerDependencies:
      - '@swc/core'
      - esbuild
      - uglify-js
      - webpack-cli

  /@docusaurus/utils-common/2.0.0-rc.1_@docusaurus+types@2.0.0-rc.1:
    resolution: {integrity: sha512-+iZICpeFPZJ9oGJXuG92WTWee6WRnVx5BdzlcfuKf/f5KQX8PvwXR2tDME78FGGhShB8zr+vjuNEXuLvXT7j2A==}
    engines: {node: '>=16.14'}
    peerDependencies:
      '@docusaurus/types': '*'
    peerDependenciesMeta:
      '@docusaurus/types':
        optional: true
    dependencies:
      '@docusaurus/types': 2.0.0-rc.1_react-dom@17.0.2+react@17.0.2
      tslib: 2.4.0
    dev: false

  /@docusaurus/utils-common/2.0.1:
    resolution: {integrity: sha512-kajCCDCXRd1HFH5EUW31MPaQcsyNlGakpkDoTBtBvpa4EIPvWaSKy7TIqYKHrZjX4tnJ0YbEJvaXfjjgdq5xSg==}
    engines: {node: '>=16.14'}
    peerDependencies:
      '@docusaurus/types': '*'
    peerDependenciesMeta:
      '@docusaurus/types':
        optional: true
    dependencies:
      tslib: 2.4.0

  /@docusaurus/utils-common/2.0.1_@docusaurus+types@2.0.1:
    resolution: {integrity: sha512-kajCCDCXRd1HFH5EUW31MPaQcsyNlGakpkDoTBtBvpa4EIPvWaSKy7TIqYKHrZjX4tnJ0YbEJvaXfjjgdq5xSg==}
    engines: {node: '>=16.14'}
    peerDependencies:
      '@docusaurus/types': '*'
    peerDependenciesMeta:
      '@docusaurus/types':
        optional: true
    dependencies:
      '@docusaurus/types': 2.0.1_react-dom@17.0.2+react@17.0.2
      tslib: 2.4.0
    dev: false

  /@docusaurus/utils-validation/2.0.0-rc.1_@docusaurus+types@2.0.0-rc.1:
    resolution: {integrity: sha512-lj36gm9Ksu4tt/EUeLDWoMbXe3sfBxeIPIUUdqYcBYkF/rpQkh+uL/dncjNGiw6uvBOqXhOfsFVP045HtgShVw==}
    engines: {node: '>=16.14'}
    dependencies:
      '@docusaurus/logger': 2.0.0-rc.1
      '@docusaurus/utils': 2.0.0-rc.1_@docusaurus+types@2.0.0-rc.1
      joi: 17.6.0
      js-yaml: 4.1.0
      tslib: 2.4.0
    transitivePeerDependencies:
      - '@docusaurus/types'
      - '@swc/core'
      - esbuild
      - supports-color
      - uglify-js
      - webpack-cli
    dev: false

  /@docusaurus/utils-validation/2.0.1:
    resolution: {integrity: sha512-f14AnwFBy4/1A19zWthK+Ii80YDz+4qt8oPpK3julywXsheSxPBqgsND3LVBBvB2p3rJHvbo2m3HyB9Tco1JRw==}
    engines: {node: '>=16.14'}
    dependencies:
      '@docusaurus/logger': 2.0.1
      '@docusaurus/utils': 2.0.1
      joi: 17.6.0
      js-yaml: 4.1.0
      tslib: 2.4.0
    transitivePeerDependencies:
      - '@docusaurus/types'
      - '@swc/core'
      - esbuild
      - supports-color
      - uglify-js
      - webpack-cli

  /@docusaurus/utils-validation/2.0.1_@docusaurus+types@2.0.1:
    resolution: {integrity: sha512-f14AnwFBy4/1A19zWthK+Ii80YDz+4qt8oPpK3julywXsheSxPBqgsND3LVBBvB2p3rJHvbo2m3HyB9Tco1JRw==}
    engines: {node: '>=16.14'}
    dependencies:
      '@docusaurus/logger': 2.0.1
      '@docusaurus/utils': 2.0.1_@docusaurus+types@2.0.1
      joi: 17.6.0
      js-yaml: 4.1.0
      tslib: 2.4.0
    transitivePeerDependencies:
      - '@docusaurus/types'
      - '@swc/core'
      - esbuild
      - supports-color
      - uglify-js
      - webpack-cli
    dev: false

  /@docusaurus/utils/2.0.0-rc.1_@docusaurus+types@2.0.0-rc.1:
    resolution: {integrity: sha512-ym9I1OwIYbKs1LGaUajaA/vDG8VweJj/6YoZjHp+eDQHhTRIrHXiYoGDqorafRhftKwnA1EnyomuXpNd9bq8Gg==}
    engines: {node: '>=16.14'}
    peerDependencies:
      '@docusaurus/types': '*'
    peerDependenciesMeta:
      '@docusaurus/types':
        optional: true
    dependencies:
      '@docusaurus/logger': 2.0.0-rc.1
      '@docusaurus/types': 2.0.0-rc.1_react-dom@17.0.2+react@17.0.2
      '@svgr/webpack': 6.3.1
      file-loader: 6.2.0_webpack@5.74.0
      fs-extra: 10.1.0
      github-slugger: 1.4.0
      globby: 11.1.0
      gray-matter: 4.0.3
      js-yaml: 4.1.0
      lodash: 4.17.21
      micromatch: 4.0.5
      resolve-pathname: 3.0.0
      shelljs: 0.8.5
      tslib: 2.4.0
      url-loader: 4.1.1_file-loader@6.2.0+webpack@5.74.0
      webpack: 5.74.0
    transitivePeerDependencies:
      - '@swc/core'
      - esbuild
      - supports-color
      - uglify-js
      - webpack-cli
    dev: false

  /@docusaurus/utils/2.0.1:
    resolution: {integrity: sha512-u2Vdl/eoVwMfUjDCkg7FjxoiwFs/XhVVtNxQEw8cvB+qaw6QWyT73m96VZzWtUb1fDOefHoZ+bZ0ObFeKk9lMQ==}
    engines: {node: '>=16.14'}
    peerDependencies:
      '@docusaurus/types': '*'
    peerDependenciesMeta:
      '@docusaurus/types':
        optional: true
    dependencies:
      '@docusaurus/logger': 2.0.1
      '@svgr/webpack': 6.3.1
      file-loader: 6.2.0_webpack@5.74.0
      fs-extra: 10.1.0
      github-slugger: 1.4.0
      globby: 11.1.0
      gray-matter: 4.0.3
      js-yaml: 4.1.0
      lodash: 4.17.21
      micromatch: 4.0.5
      resolve-pathname: 3.0.0
      shelljs: 0.8.5
      tslib: 2.4.0
      url-loader: 4.1.1_file-loader@6.2.0+webpack@5.74.0
      webpack: 5.74.0
    transitivePeerDependencies:
      - '@swc/core'
      - esbuild
      - supports-color
      - uglify-js
      - webpack-cli

  /@docusaurus/utils/2.0.1_@docusaurus+types@2.0.1:
    resolution: {integrity: sha512-u2Vdl/eoVwMfUjDCkg7FjxoiwFs/XhVVtNxQEw8cvB+qaw6QWyT73m96VZzWtUb1fDOefHoZ+bZ0ObFeKk9lMQ==}
    engines: {node: '>=16.14'}
    peerDependencies:
      '@docusaurus/types': '*'
    peerDependenciesMeta:
      '@docusaurus/types':
        optional: true
    dependencies:
      '@docusaurus/logger': 2.0.1
      '@docusaurus/types': 2.0.1_react-dom@17.0.2+react@17.0.2
      '@svgr/webpack': 6.3.1
      file-loader: 6.2.0_webpack@5.74.0
      fs-extra: 10.1.0
      github-slugger: 1.4.0
      globby: 11.1.0
      gray-matter: 4.0.3
      js-yaml: 4.1.0
      lodash: 4.17.21
      micromatch: 4.0.5
      resolve-pathname: 3.0.0
      shelljs: 0.8.5
      tslib: 2.4.0
      url-loader: 4.1.1_file-loader@6.2.0+webpack@5.74.0
      webpack: 5.74.0
    transitivePeerDependencies:
      - '@swc/core'
      - esbuild
      - supports-color
      - uglify-js
      - webpack-cli
    dev: false

  /@eslint/eslintrc/1.3.2:
    resolution: {integrity: sha512-AXYd23w1S/bv3fTs3Lz0vjiYemS08jWkI3hYyS9I1ry+0f+Yjs1wm+sU0BS8qDOPrBIkp4qHYC16I8uVtpLajQ==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    dependencies:
      ajv: 6.12.6
      debug: 4.3.4
      espree: 9.4.0
      globals: 13.17.0
      ignore: 5.2.0
      import-fresh: 3.3.0
      js-yaml: 4.1.0
      minimatch: 3.1.2
      strip-json-comments: 3.1.1
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@hapi/hoek/9.3.0:
    resolution: {integrity: sha512-/c6rf4UJlmHlC9b5BaNvzAcFv7HZ2QHaV0D4/HNlBdvFnvQq8RI4kYdhyPCl7Xj+oWvTWQ8ujhqS53LIgAe6KQ==}

  /@hapi/topo/5.1.0:
    resolution: {integrity: sha512-foQZKJig7Ob0BMAYBfcJk8d77QtOe7Wo4ox7ff1lQYoNNAb6jwcY1ncdoy2e9wQZzvNy7ODZCYJkK8kzmcAnAg==}
    dependencies:
      '@hapi/hoek': 9.3.0

  /@humanwhocodes/config-array/0.10.4:
    resolution: {integrity: sha512-mXAIHxZT3Vcpg83opl1wGlVZ9xydbfZO3r5YfRSH6Gpp2J/PfdBP0wbDa2sO6/qRbcalpoevVyW6A/fI6LfeMw==}
    engines: {node: '>=10.10.0'}
    dependencies:
      '@humanwhocodes/object-schema': 1.2.1
      debug: 4.3.4
      minimatch: 3.1.2
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@humanwhocodes/config-array/0.9.5:
    resolution: {integrity: sha512-ObyMyWxZiCu/yTisA7uzx81s40xR2fD5Cg/2Kq7G02ajkNubJf6BopgDTmDyc3U7sXpNKM8cYOw7s7Tyr+DnCw==}
    engines: {node: '>=10.10.0'}
    dependencies:
      '@humanwhocodes/object-schema': 1.2.1
      debug: 4.3.4
      minimatch: 3.1.2
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@humanwhocodes/gitignore-to-minimatch/1.0.2:
    resolution: {integrity: sha512-rSqmMJDdLFUsyxR6FMtD00nfQKKLFb1kv+qBbOVKqErvloEIJLo5bDTJTQNTYgeyp78JsA7u/NPi5jT1GR/MuA==}
    dev: true

  /@humanwhocodes/object-schema/1.2.1:
    resolution: {integrity: sha512-ZnQMnLV4e7hDlUvw8H+U8ASL02SS2Gn6+9Ac3wGGLIe7+je2AeAOxPY+izIPJDfFDb7eDjev0Us8MO1iFRN8hA==}
    dev: true

  /@istanbuljs/load-nyc-config/1.1.0:
    resolution: {integrity: sha512-VjeHSlIzpv/NyD3N0YuHfXOPDIixcA1q2ZV98wsMqcYlPmv2n3Yb2lYP9XMElnaFVXg5A7YLTeLu6V84uQDjmQ==}
    engines: {node: '>=8'}
    dependencies:
      camelcase: 5.3.1
      find-up: 4.1.0
      get-package-type: 0.1.0
      js-yaml: 3.14.1
      resolve-from: 5.0.0
    dev: true

  /@istanbuljs/schema/0.1.3:
    resolution: {integrity: sha512-ZXRY4jNvVgSVQ8DL3LTcakaAtXwTVUxE81hslsyD2AtoXW/wVob10HkOJ1X/pAlcI7D+2YoZKg5do8G/w6RYgA==}
    engines: {node: '>=8'}
    dev: true

  /@jest/console/27.5.1:
    resolution: {integrity: sha512-kZ/tNpS3NXn0mlXXXPNuDZnb4c0oZ20r4K5eemM2k30ZC3G0T02nXUvyhf5YdbXWHPEJLc9qGLxEZ216MdL+Zg==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/types': 27.5.1
      '@types/node': 14.18.23
      chalk: 4.1.2
      jest-message-util: 27.5.1
      jest-util: 27.5.1
      slash: 3.0.0
    dev: true

  /@jest/core/27.4.7:
    resolution: {integrity: sha512-n181PurSJkVMS+kClIFSX/LLvw9ExSb+4IMtD6YnfxZVerw9ANYtW0bPrm0MJu2pfe9SY9FJ9FtQ+MdZkrZwjg==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    peerDependencies:
      node-notifier: ^8.0.1 || ^9.0.0 || ^10.0.0
    peerDependenciesMeta:
      node-notifier:
        optional: true
    dependencies:
      '@jest/console': 27.5.1
      '@jest/reporters': 27.4.6
      '@jest/test-result': 27.5.1
      '@jest/transform': 27.4.6
      '@jest/types': 27.5.1
      '@types/node': 14.18.23
      ansi-escapes: 4.3.2
      chalk: 4.1.2
      emittery: 0.8.1
      exit: 0.1.2
      graceful-fs: 4.2.10
      jest-changed-files: 27.5.1
      jest-config: 27.4.7
      jest-haste-map: 27.5.1
      jest-message-util: 27.5.1
      jest-regex-util: 27.5.1
      jest-resolve: 27.4.6
      jest-resolve-dependencies: 27.5.1
      jest-runner: 27.5.1
      jest-runtime: 27.5.1
      jest-snapshot: 27.4.6
      jest-util: 27.5.1
      jest-validate: 27.5.1
      jest-watcher: 27.5.1
      micromatch: 4.0.5
      rimraf: 3.0.2
      slash: 3.0.0
      strip-ansi: 6.0.1
    transitivePeerDependencies:
      - bufferutil
      - canvas
      - supports-color
      - ts-node
      - utf-8-validate
    dev: true

  /@jest/environment/27.5.1:
    resolution: {integrity: sha512-/WQjhPJe3/ghaol/4Bq480JKXV/Rfw8nQdN7f41fM8VDHLcxKXou6QyXAh3EFr9/bVG3x74z1NWDkP87EiY8gA==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/fake-timers': 27.5.1
      '@jest/types': 27.5.1
      '@types/node': 14.18.23
      jest-mock: 27.5.1
    dev: true

  /@jest/expect-utils/29.0.3:
    resolution: {integrity: sha512-i1xUkau7K/63MpdwiRqaxgZOjxYs4f0WMTGJnYwUKubsNRZSeQbLorS7+I4uXVF9KQ5r61BUPAUMZ7Lf66l64Q==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    dependencies:
      jest-get-type: 29.0.0
    dev: true

  /@jest/fake-timers/27.5.1:
    resolution: {integrity: sha512-/aPowoolwa07k7/oM3aASneNeBGCmGQsc3ugN4u6s4C/+s5M64MFo/+djTdiwcbQlRfFElGuDXWzaWj6QgKObQ==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/types': 27.5.1
      '@sinonjs/fake-timers': 8.1.0
      '@types/node': 14.18.23
      jest-message-util: 27.5.1
      jest-mock: 27.5.1
      jest-util: 27.5.1
    dev: true

  /@jest/globals/27.5.1:
    resolution: {integrity: sha512-ZEJNB41OBQQgGzgyInAv0UUfDDj3upmHydjieSxFvTRuZElrx7tXg/uVQ5hYVEwiXs3+aMsAeEc9X7xiSKCm4Q==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/environment': 27.5.1
      '@jest/types': 27.5.1
      expect: 27.5.1
    dev: true

  /@jest/reporters/27.4.6:
    resolution: {integrity: sha512-+Zo9gV81R14+PSq4wzee4GC2mhAN9i9a7qgJWL90Gpx7fHYkWpTBvwWNZUXvJByYR9tAVBdc8VxDWqfJyIUrIQ==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    peerDependencies:
      node-notifier: ^8.0.1 || ^9.0.0 || ^10.0.0
    peerDependenciesMeta:
      node-notifier:
        optional: true
    dependencies:
      '@bcoe/v8-coverage': 0.2.3
      '@jest/console': 27.5.1
      '@jest/test-result': 27.5.1
      '@jest/transform': 27.4.6
      '@jest/types': 27.5.1
      '@types/node': 14.18.23
      chalk: 4.1.2
      collect-v8-coverage: 1.0.1
      exit: 0.1.2
      glob: 7.2.3
      graceful-fs: 4.2.10
      istanbul-lib-coverage: 3.2.0
      istanbul-lib-instrument: 5.2.0
      istanbul-lib-report: 3.0.0
      istanbul-lib-source-maps: 4.0.1
      istanbul-reports: 3.1.5
      jest-haste-map: 27.5.1
      jest-resolve: 27.4.6
      jest-util: 27.5.1
      jest-worker: 27.5.1
      slash: 3.0.0
      source-map: 0.6.1
      string-length: 4.0.2
      terminal-link: 2.1.1
      v8-to-istanbul: 8.1.1
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@jest/schemas/29.0.0:
    resolution: {integrity: sha512-3Ab5HgYIIAnS0HjqJHQYZS+zXc4tUmTmBH3z83ajI6afXp8X3ZtdLX+nXx+I7LNkJD7uN9LAVhgnjDgZa2z0kA==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    dependencies:
      '@sinclair/typebox': 0.24.41
    dev: true

  /@jest/source-map/27.5.1:
    resolution: {integrity: sha512-y9NIHUYF3PJRlHk98NdC/N1gl88BL08aQQgu4k4ZopQkCw9t9cV8mtl3TV8b/YCB8XaVTFrmUTAJvjsntDireg==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      callsites: 3.1.0
      graceful-fs: 4.2.10
      source-map: 0.6.1
    dev: true

  /@jest/test-result/27.5.1:
    resolution: {integrity: sha512-EW35l2RYFUcUQxFJz5Cv5MTOxlJIQs4I7gxzi2zVU7PJhOwfYq1MdC5nhSmYjX1gmMmLPvB3sIaC+BkcHRBfag==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/console': 27.5.1
      '@jest/types': 27.5.1
      '@types/istanbul-lib-coverage': 2.0.4
      collect-v8-coverage: 1.0.1
    dev: true

  /@jest/test-sequencer/27.5.1:
    resolution: {integrity: sha512-LCheJF7WB2+9JuCS7VB/EmGIdQuhtqjRNI9A43idHv3E4KltCTsPsLxvdaubFHSYwY/fNjMWjl6vNRhDiN7vpQ==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/test-result': 27.5.1
      graceful-fs: 4.2.10
      jest-haste-map: 27.5.1
      jest-runtime: 27.5.1
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@jest/transform/27.4.6:
    resolution: {integrity: sha512-9MsufmJC8t5JTpWEQJ0OcOOAXaH5ioaIX6uHVBLBMoCZPfKKQF+EqP8kACAvCZ0Y1h2Zr3uOccg8re+Dr5jxyw==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@babel/core': 7.18.13
      '@jest/types': 27.5.1
      babel-plugin-istanbul: 6.1.1
      chalk: 4.1.2
      convert-source-map: 1.8.0
      fast-json-stable-stringify: 2.1.0
      graceful-fs: 4.2.10
      jest-haste-map: 27.5.1
      jest-regex-util: 27.5.1
      jest-util: 27.5.1
      micromatch: 4.0.5
      pirates: 4.0.5
      slash: 3.0.0
      source-map: 0.6.1
      write-file-atomic: 3.0.3
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@jest/transform/27.5.1:
    resolution: {integrity: sha512-ipON6WtYgl/1329g5AIJVbUuEh0wZVbdpGwC99Jw4LwuoBNS95MVphU6zOeD9pDkon+LLbFL7lOQRapbB8SCHw==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@babel/core': 7.18.13
      '@jest/types': 27.5.1
      babel-plugin-istanbul: 6.1.1
      chalk: 4.1.2
      convert-source-map: 1.8.0
      fast-json-stable-stringify: 2.1.0
      graceful-fs: 4.2.10
      jest-haste-map: 27.5.1
      jest-regex-util: 27.5.1
      jest-util: 27.5.1
      micromatch: 4.0.5
      pirates: 4.0.5
      slash: 3.0.0
      source-map: 0.6.1
      write-file-atomic: 3.0.3
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@jest/types/27.5.1:
    resolution: {integrity: sha512-Cx46iJ9QpwQTjIdq5VJu2QTMMs3QlEjI0x1QbBP5W1+nMzyc2XmimiRR/CbX9TO0cPTeUlxWMOu8mslYsJ8DEw==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@types/istanbul-lib-coverage': 2.0.4
      '@types/istanbul-reports': 3.0.1
      '@types/node': 14.18.23
      '@types/yargs': 16.0.4
      chalk: 4.1.2
    dev: true

  /@jest/types/29.0.3:
    resolution: {integrity: sha512-coBJmOQvurXjN1Hh5PzF7cmsod0zLIOXpP8KD161mqNlroMhLcwpODiEzi7ZsRl5Z/AIuxpeNm8DCl43F4kz8A==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    dependencies:
      '@jest/schemas': 29.0.0
      '@types/istanbul-lib-coverage': 2.0.4
      '@types/istanbul-reports': 3.0.1
      '@types/node': 14.18.23
      '@types/yargs': 17.0.12
      chalk: 4.1.2
    dev: true

  /@jridgewell/gen-mapping/0.1.1:
    resolution: {integrity: sha512-sQXCasFk+U8lWYEe66WxRDOE9PjVz4vSM51fTu3Hw+ClTpUSQb718772vH3pyS5pShp6lvQM7SxgIDXXXmOX7w==}
    engines: {node: '>=6.0.0'}
    dependencies:
      '@jridgewell/set-array': 1.1.2
      '@jridgewell/sourcemap-codec': 1.4.14

  /@jridgewell/gen-mapping/0.3.2:
    resolution: {integrity: sha512-mh65xKQAzI6iBcFzwv28KVWSmCkdRBWoOh+bYQGW3+6OZvbbN3TqMGo5hqYxQniRcH9F2VZIoJCm4pa3BPDK/A==}
    engines: {node: '>=6.0.0'}
    dependencies:
      '@jridgewell/set-array': 1.1.2
      '@jridgewell/sourcemap-codec': 1.4.14
      '@jridgewell/trace-mapping': 0.3.15

  /@jridgewell/resolve-uri/3.1.0:
    resolution: {integrity: sha512-F2msla3tad+Mfht5cJq7LSXcdudKTWCVYUgw6pLFOOHSTtZlj6SWNYAp+AhuqLmWdBO2X5hPrLcu8cVP8fy28w==}
    engines: {node: '>=6.0.0'}

  /@jridgewell/set-array/1.1.2:
    resolution: {integrity: sha512-xnkseuNADM0gt2bs+BvhO0p78Mk762YnZdsuzFV018NoG1Sj1SCQvpSqa7XUaTam5vAGasABV9qXASMKnFMwMw==}
    engines: {node: '>=6.0.0'}

  /@jridgewell/source-map/0.3.2:
    resolution: {integrity: sha512-m7O9o2uR8k2ObDysZYzdfhb08VuEml5oWGiosa1VdaPZ/A6QyPkAJuwN0Q1lhULOf6B7MtQmHENS743hWtCrgw==}
    dependencies:
      '@jridgewell/gen-mapping': 0.3.2
      '@jridgewell/trace-mapping': 0.3.15

  /@jridgewell/sourcemap-codec/1.4.14:
    resolution: {integrity: sha512-XPSJHWmi394fuUuzDnGz1wiKqWfo1yXecHQMRf2l6hztTO+nPru658AyDngaBe7isIxEkRsPR3FZh+s7iVa4Uw==}

  /@jridgewell/trace-mapping/0.3.15:
    resolution: {integrity: sha512-oWZNOULl+UbhsgB51uuZzglikfIKSUBO/M9W2OfEjn7cmqoAiCgmv9lyACTUacZwBz0ITnJ2NqjU8Tx0DHL88g==}
    dependencies:
      '@jridgewell/resolve-uri': 3.1.0
      '@jridgewell/sourcemap-codec': 1.4.14

  /@leichtgewicht/ip-codec/2.0.4:
    resolution: {integrity: sha512-Hcv+nVC0kZnQ3tD9GVu5xSMR4VVYOteQIr/hwFPVEvPdlXqgGEuRjiheChHgdM+JyqdgNcmzZOX/tnl0JOiI7A==}

  /@mdx-js/mdx/1.6.22:
    resolution: {integrity: sha512-AMxuLxPz2j5/6TpF/XSdKpQP1NlG0z11dFOlq+2IP/lSgl11GY8ji6S/rgsViN/L0BDvHvUMruRb7ub+24LUYA==}
    dependencies:
      '@babel/core': 7.12.9
      '@babel/plugin-syntax-jsx': 7.12.1_@babel+core@7.12.9
      '@babel/plugin-syntax-object-rest-spread': 7.8.3_@babel+core@7.12.9
      '@mdx-js/util': 1.6.22
      babel-plugin-apply-mdx-type-prop: 1.6.22_@babel+core@7.12.9
      babel-plugin-extract-import-names: 1.6.22
      camelcase-css: 2.0.1
      detab: 2.0.4
      hast-util-raw: 6.0.1
      lodash.uniq: 4.5.0
      mdast-util-to-hast: 10.0.1
      remark-footnotes: 2.0.0
      remark-mdx: 1.6.22
      remark-parse: 8.0.3
      remark-squeeze-paragraphs: 4.0.0
      style-to-object: 0.3.0
      unified: 9.2.0
      unist-builder: 2.0.3
      unist-util-visit: 2.0.3
    transitivePeerDependencies:
      - supports-color

  /@mdx-js/react/1.6.22_react@17.0.2:
    resolution: {integrity: sha512-TDoPum4SHdfPiGSAaRBw7ECyI8VaHpK8GJugbJIJuqyh6kzw9ZLJZW3HGL3NNrJGxcAixUvqROm+YuQOo5eXtg==}
    peerDependencies:
      react: ^16.13.1 || ^17.0.0
    dependencies:
      react: 17.0.2
    dev: false

  /@mdx-js/util/1.6.22:
    resolution: {integrity: sha512-H1rQc1ZOHANWBvPcW+JpGwr+juXSxM8Q8YCkm3GhZd8REu1fHR3z99CErO1p9pkcfcxZnMdIZdIsXkOHY0NilA==}

  /@microsoft/api-documenter/7.19.13:
    resolution: {integrity: sha512-wlvbPz1/WC0ZlBYz5oHCYOO7JB1Eh2QTObDdaTeIXRyCGkq2y7DF+0/rXNCtuhR1kM9elvl+IZV1VJzm8z4i1Q==}
    hasBin: true
    dependencies:
      '@microsoft/api-extractor-model': 7.24.1
      '@microsoft/tsdoc': 0.14.1
      '@rushstack/node-core-library': 3.51.2
      '@rushstack/ts-command-line': 4.12.3
      colors: 1.2.5
      js-yaml: 3.13.1
      resolve: 1.17.0

  /@microsoft/api-extractor-model/7.23.3:
    resolution: {integrity: sha512-HpsWzG6jrWHrTlIg53kmp/IVQPBHUZc+8dunnr9VXrmDjVBehaXxp9A6jhTQ/bd7W1m5TYfAvwCmseC1+9FCuA==}
    dependencies:
      '@microsoft/tsdoc': 0.14.1
      '@microsoft/tsdoc-config': 0.16.2
      '@rushstack/node-core-library': 3.51.1
    dev: false

  /@microsoft/api-extractor-model/7.24.1:
    resolution: {integrity: sha512-H2KrRbO3beDnH2Fwt+3zXgK8KagFEzHHWNUR7weSEOssabGH5T/aADNR0k1FBidKpXokrvMM6SHamdMCVJjlBg==}
    dependencies:
      '@microsoft/tsdoc': 0.14.1
      '@microsoft/tsdoc-config': 0.16.2
      '@rushstack/node-core-library': 3.51.2

  /@microsoft/api-extractor/7.31.1:
    resolution: {integrity: sha512-rWEE+S1to8B2X8E8fVttwmCNS7yfvTNzlFGdla/OT8bJeS94L7Lw1Wkynwsl59gb46yvMZrQDXiRkXWzxgvc8g==}
    hasBin: true
    dependencies:
      '@microsoft/api-extractor-model': 7.24.1
      '@microsoft/tsdoc': 0.14.1
      '@microsoft/tsdoc-config': 0.16.2
      '@rushstack/node-core-library': 3.51.2
      '@rushstack/rig-package': 0.3.15
      '@rushstack/ts-command-line': 4.12.3
      colors: 1.2.5
      lodash: 4.17.21
      resolve: 1.17.0
      semver: 7.3.7
      source-map: 0.6.1
      typescript: 4.7.4
    dev: true

  /@microsoft/tsdoc-config/0.16.2:
    resolution: {integrity: sha512-OGiIzzoBLgWWR0UdRJX98oYO+XKGf7tiK4Zk6tQ/E4IJqGCe7dvkTvgDZV5cFJUzLGDOjeAXrnZoA6QkVySuxw==}
    dependencies:
      '@microsoft/tsdoc': 0.14.2
      ajv: 6.12.6
      jju: 1.4.0
      resolve: 1.19.0

  /@microsoft/tsdoc/0.14.1:
    resolution: {integrity: sha512-6Wci+Tp3CgPt/B9B0a3J4s3yMgLNSku6w5TV6mN+61C71UqsRBv2FUibBf3tPGlNxebgPHMEUzKpb1ggE8KCKw==}

  /@microsoft/tsdoc/0.14.2:
    resolution: {integrity: sha512-9b8mPpKrfeGRuhFH5iO1iwCLeIIsV6+H1sRfxbkoGXIyQE2BTsPd9zqSqQJ+pv5sJ/hT5M1zvOFL02MnEezFug==}

  /@nodelib/fs.scandir/2.1.5:
    resolution: {integrity: sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==}
    engines: {node: '>= 8'}
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      run-parallel: 1.2.0

  /@nodelib/fs.stat/2.0.5:
    resolution: {integrity: sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==}
    engines: {node: '>= 8'}

  /@nodelib/fs.walk/1.2.8:
    resolution: {integrity: sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==}
    engines: {node: '>= 8'}
    dependencies:
      '@nodelib/fs.scandir': 2.1.5
      fastq: 1.13.0

  /@polka/url/1.0.0-next.21:
    resolution: {integrity: sha512-a5Sab1C4/icpTZVzZc5Ghpz88yQtGOyNqYXcZgOssB2uuAr+wF/MvN6bgtW32q7HHrvBki+BsZ0OuNv6EV3K9g==}

  /@rushstack/eslint-config/3.0.1_eslint@8.21.0+typescript@4.7.4:
    resolution: {integrity: sha512-9OIB2T6fYsgMNUVGjopgT8NZv7x4shXsq1KqT8fX0VVVzJ6/XA7+nSBXHYFzYH+8Liux7ApdzyaZNxaF0Ex7Sw==}
    peerDependencies:
      eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
      typescript: '>=4.7.0'
    dependencies:
      '@rushstack/eslint-patch': 1.2.0
      '@rushstack/eslint-plugin': 0.10.0_eslint@8.21.0+typescript@4.7.4
      '@rushstack/eslint-plugin-packlets': 0.5.0_eslint@8.21.0+typescript@4.7.4
      '@rushstack/eslint-plugin-security': 0.4.0_eslint@8.21.0+typescript@4.7.4
      '@typescript-eslint/eslint-plugin': 5.30.7_0e23bc9de590ca56e24ce3e421b2689b
      '@typescript-eslint/experimental-utils': 5.30.7_eslint@8.21.0+typescript@4.7.4
      '@typescript-eslint/parser': 5.30.7_eslint@8.21.0+typescript@4.7.4
      '@typescript-eslint/typescript-estree': 5.30.7_typescript@4.7.4
      eslint: 8.21.0
      eslint-plugin-promise: 6.0.1_eslint@8.21.0
      eslint-plugin-react: 7.27.1_eslint@8.21.0
      eslint-plugin-tsdoc: 0.2.17
      typescript: 4.7.4
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@rushstack/eslint-patch/1.2.0:
    resolution: {integrity: sha512-sXo/qW2/pAcmT43VoRKOJbDOfV3cYpq3szSVfIThQXNt+E4DfKj361vaAt3c88U5tPUxzEswam7GW48PJqtKAg==}
    dev: true

  /@rushstack/eslint-plugin-packlets/0.5.0_eslint@8.21.0+typescript@4.7.4:
    resolution: {integrity: sha512-I160nHeAGzA0q4g3cR7kiHNgiU1HqrYto52+lEmxLAdbBllqc6IOyiWQfCDb5ug0f+Y8bTwMQHiUrI7XclZB/Q==}
    peerDependencies:
      eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
    dependencies:
      '@rushstack/tree-pattern': 0.2.4
      '@typescript-eslint/experimental-utils': 5.30.7_eslint@8.21.0+typescript@4.7.4
      eslint: 8.21.0
    transitivePeerDependencies:
      - supports-color
      - typescript
    dev: true

  /@rushstack/eslint-plugin-security/0.4.0_eslint@8.21.0+typescript@4.7.4:
    resolution: {integrity: sha512-jRFtrOnZZcuJ2MRA9RtoeyKiFQ60iKu7SDF1wkc7M9nHL5C1HkFApX6nTlAjY7C5B7UlV+9BP9fDmOJJmB4FSw==}
    peerDependencies:
      eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
    dependencies:
      '@rushstack/tree-pattern': 0.2.4
      '@typescript-eslint/experimental-utils': 5.30.7_eslint@8.21.0+typescript@4.7.4
      eslint: 8.21.0
    transitivePeerDependencies:
      - supports-color
      - typescript
    dev: true

  /@rushstack/eslint-plugin/0.10.0_eslint@8.21.0+typescript@4.7.4:
    resolution: {integrity: sha512-39DCBD6s7Y5XQxvcMmitXfupkReGcg0lmtil9mrGHkDoyiUln90sOWtpkSl6LqUrSL3lx7N2wRvJiJlwGIPYFQ==}
    peerDependencies:
      eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
    dependencies:
      '@rushstack/tree-pattern': 0.2.4
      '@typescript-eslint/experimental-utils': 5.30.7_eslint@8.21.0+typescript@4.7.4
      eslint: 8.21.0
    transitivePeerDependencies:
      - supports-color
      - typescript
    dev: true

  /@rushstack/heft-config-file/0.9.6:
    resolution: {integrity: sha512-dk+7ZyPc4r620b82sx0hafvwAWKzGGDf4QDSRo5S6+X0XCVvuNXJb3pfINWL+4boH/nX/hSlUA4Apm505wAdaw==}
    engines: {node: '>=10.13.0'}
    dependencies:
      '@rushstack/node-core-library': 3.51.2
      '@rushstack/rig-package': 0.3.15
      jsonpath-plus: 4.0.0
    dev: true

  /@rushstack/heft-jest-plugin/0.3.34_@rushstack+heft@0.47.9:
    resolution: {integrity: sha512-gbAhACOMUCVVfBW6IX6bFgxSwygfRbpfWfSd7YV+h4RtXZp53tDa02BkuMaHDSBoyDEBqdz2HhyWVhsdm8MMuQ==}
    requiresBuild: true
    peerDependencies:
      '@rushstack/heft': ^0.47.9
    dependencies:
      '@jest/core': 27.4.7
      '@jest/reporters': 27.4.6
      '@jest/transform': 27.4.6
      '@rushstack/heft': 0.47.9
      '@rushstack/heft-config-file': 0.9.6
      '@rushstack/node-core-library': 3.51.2
      jest-config: 27.4.7
      jest-resolve: 27.4.6
      jest-snapshot: 27.4.6
      lodash: 4.17.21
    transitivePeerDependencies:
      - bufferutil
      - canvas
      - node-notifier
      - supports-color
      - ts-node
      - utf-8-validate
    dev: true

  /@rushstack/heft-node-rig/1.10.11_@rushstack+heft@0.47.9:
    resolution: {integrity: sha512-YfHcHdXI0PPDEBq0L9EsWW/99yGLpF1PnJsGcaL2H0inQwSjfxB5bAtbNO3/jclgOJZarAWdLCudkikrj9AFew==}
    peerDependencies:
      '@rushstack/heft': ^0.47.9
    dependencies:
      '@microsoft/api-extractor': 7.31.1
      '@rushstack/heft': 0.47.9
      '@rushstack/heft-jest-plugin': 0.3.34_@rushstack+heft@0.47.9
      eslint: 8.7.0
      jest-environment-node: 27.4.6
      typescript: 4.7.4
    transitivePeerDependencies:
      - bufferutil
      - canvas
      - node-notifier
      - supports-color
      - ts-node
      - utf-8-validate
    dev: true

  /@rushstack/heft-sass-plugin/0.5.15_@rushstack+heft@0.47.9:
    resolution: {integrity: sha512-2zufkG6WDblV9QWYGyFJm0t4UUpb2plGf53wlt7P+uZEVi2pWBWSg6wZVoE4XM0h+tmoNhexaaHzBTmGI52f6A==}
    peerDependencies:
      '@rushstack/heft': ^0.47.9
    dependencies:
      '@rushstack/heft': 0.47.9
      '@rushstack/heft-config-file': 0.9.6
      '@rushstack/node-core-library': 3.51.2
      '@rushstack/typings-generator': 0.7.23
      node-sass: 6.0.1
      postcss: 8.4.16
      postcss-modules: 1.5.0
    dev: true

  /@rushstack/heft-web-rig/0.11.11_@rushstack+heft@0.47.9:
    resolution: {integrity: sha512-haPG3nv+UDOCusGmG+nQ6cRFkjBPWho3JA5v562rH7oyOGyA7uaWtcFeBlLg8I1vCsZpDR3f9wkEpKtBiNPKaA==}
    peerDependencies:
      '@rushstack/heft': ^0.47.9
    dependencies:
      '@microsoft/api-extractor': 7.31.1
      '@rushstack/heft': 0.47.9
      '@rushstack/heft-jest-plugin': 0.3.34_@rushstack+heft@0.47.9
      '@rushstack/heft-sass-plugin': 0.5.15_@rushstack+heft@0.47.9
      '@rushstack/heft-webpack5-plugin': 0.5.49_64cb83e7fbda99e7ee878d7c5aa50006
      autoprefixer: 10.4.11_postcss@8.4.16
      css-loader: 6.6.0_webpack@5.68.0
      css-minimizer-webpack-plugin: 3.4.1_webpack@5.68.0
      eslint: 8.7.0
      html-webpack-plugin: 5.5.0_webpack@5.68.0
      jest-environment-jsdom: 27.4.6
      mini-css-extract-plugin: 2.5.3_webpack@5.68.0
      postcss: 8.4.16
      postcss-loader: 6.2.1_postcss@8.4.16+webpack@5.68.0
      sass: 1.49.11
      sass-loader: 12.4.0_sass@1.49.11+webpack@5.68.0
      source-map-loader: 3.0.1_webpack@5.68.0
      style-loader: 3.3.1_webpack@5.68.0
      terser-webpack-plugin: 5.3.6_webpack@5.68.0
      typescript: 4.7.4
      url-loader: 4.1.1_webpack@5.68.0
      webpack: 5.68.0
      webpack-bundle-analyzer: 4.5.0
      webpack-merge: 5.8.0
    transitivePeerDependencies:
      - '@parcel/css'
      - '@swc/core'
      - bufferutil
      - canvas
      - clean-css
      - csso
      - debug
      - esbuild
      - fibers
      - file-loader
      - node-notifier
      - node-sass
      - supports-color
      - ts-node
      - uglify-js
      - utf-8-validate
      - webpack-cli
    dev: true

  /@rushstack/heft-webpack5-plugin/0.5.49_64cb83e7fbda99e7ee878d7c5aa50006:
    resolution: {integrity: sha512-tIF2hPgAr94uY/UG2wRyU2uuQ1WMQbZZ/F7t0c1hb1KFH5BNXval/7SQxWzzSs8xLIcCAiY1H8ZOFasWfGYnBw==}
    peerDependencies:
      '@rushstack/heft': ^0.47.9
      webpack: ~5.68.0
    dependencies:
      '@rushstack/heft': 0.47.9
      '@rushstack/node-core-library': 3.51.2
      webpack: 5.68.0
      webpack-dev-server: 4.9.3_webpack@5.68.0
    transitivePeerDependencies:
      - bufferutil
      - debug
      - supports-color
      - utf-8-validate
      - webpack-cli
    dev: true

  /@rushstack/heft/0.47.9:
    resolution: {integrity: sha512-9tx7qzWMusDJ3MqML1PTY9xShiJYBMr8CagDUUgQ75NLHMITMdjRbnBnCCWV6DdI8/Z7qR0MsVkfIpQhO8cPvg==}
    engines: {node: '>=10.13.0'}
    hasBin: true
    dependencies:
      '@rushstack/heft-config-file': 0.9.6
      '@rushstack/node-core-library': 3.51.2
      '@rushstack/rig-package': 0.3.15
      '@rushstack/ts-command-line': 4.12.3
      '@types/tapable': 1.0.6
      argparse: 1.0.10
      chokidar: 3.4.3
      fast-glob: 3.2.12
      glob: 7.0.6
      glob-escape: 0.0.2
      prettier: 2.3.2
      semver: 7.3.7
      tapable: 1.1.3
      true-case-path: 2.2.1
    dev: true

  /@rushstack/node-core-library/3.50.2:
    resolution: {integrity: sha512-+zpZBcaX5s+wA0avF0Lk3sd5jbGRo5SmsEJpElJbqQd3KGFvc/hcyeNSMqV5+esJ1JuTfnE1QyRt8nvxFNTaQg==}
    dependencies:
      '@types/node': 12.20.24
      colors: 1.2.5
      fs-extra: 7.0.1
      import-lazy: 4.0.0
      jju: 1.4.0
      resolve: 1.17.0
      semver: 7.3.7
      timsort: 0.3.0
      z-schema: 5.0.4

  /@rushstack/node-core-library/3.51.1:
    resolution: {integrity: sha512-xLoUztvGpaT5CphDexDPt2WbBx8D68VS5tYOkwfr98p90y0f/wepgXlTA/q5MUeZGGucASiXKp5ysdD+GPYf9A==}
    dependencies:
      '@types/node': 12.20.24
      colors: 1.2.5
      fs-extra: 7.0.1
      import-lazy: 4.0.0
      jju: 1.4.0
      resolve: 1.17.0
      semver: 7.3.7
      z-schema: 5.0.4
    dev: false

  /@rushstack/node-core-library/3.51.2:
    resolution: {integrity: sha512-DwK2Lo62sHCsg8VsVe/WfugiL1lC5YzmhwzdWr8jLsfOCl8DzcIdLm4Plz0bOCQj/9ItJX1QGXr2jK5xw1Kzwg==}
    dependencies:
      '@types/node': 12.20.24
      colors: 1.2.5
      fs-extra: 7.0.1
      import-lazy: 4.0.0
      jju: 1.4.0
      resolve: 1.17.0
      semver: 7.3.7
      z-schema: 5.0.4

  /@rushstack/rig-package/0.3.15:
    resolution: {integrity: sha512-jxVfvO5OnkRlYRhcVDZWvwiI2l4pv37HDJRtyg5HbD8Z/I8Xj32RICgrxS5xMeGGytobrg5S6OfPOHskg7Nw+A==}
    dependencies:
      resolve: 1.17.0
      strip-json-comments: 3.1.1
    dev: true

  /@rushstack/tree-pattern/0.2.4:
    resolution: {integrity: sha512-H8i0OinWsdKM1TKEKPeRRTw85e+/7AIFpxm7q1blceZJhuxRBjCGAUZvQXZK4CMLx75xPqh/h1t5WHwFmElAPA==}
    dev: true

  /@rushstack/ts-command-line/4.12.3:
    resolution: {integrity: sha512-Pdij22RotMXzI+HWHyYCvw0RMZhiP5a6Za/96XamZ1+mxmpSm4ujf8TROKxGAHySmR5A8iNVSlzhNMnUlFQE6g==}
    dependencies:
      '@types/argparse': 1.0.38
      argparse: 1.0.10
      colors: 1.2.5
      string-argv: 0.3.1

  /@rushstack/typings-generator/0.7.23:
    resolution: {integrity: sha512-kWx3hNZ7DCfrtbfTgQjbI3+x/dGmX80T6hItRSQ32PvZ+kOrhZLGxlOLRFOfpsZlhR3QyZuzWKOUjkgYMUi0ow==}
    dependencies:
      '@rushstack/node-core-library': 3.51.2
      '@types/node': 12.20.24
      chokidar: 3.4.3
      glob: 7.0.6
    dev: true

  /@sideway/address/4.1.4:
    resolution: {integrity: sha512-7vwq+rOHVWjyXxVlR76Agnvhy8I9rpzjosTESvmhNeXOXdZZB15Fl+TI9x1SiHZH5Jv2wTGduSxFDIaq0m3DUw==}
    dependencies:
      '@hapi/hoek': 9.3.0

  /@sideway/formula/3.0.0:
    resolution: {integrity: sha512-vHe7wZ4NOXVfkoRb8T5otiENVlT7a3IAiw7H5M2+GO+9CDgcVUUsX1zalAztCmwyOr2RUTGJdgB+ZvSVqmdHmg==}

  /@sideway/pinpoint/2.0.0:
    resolution: {integrity: sha512-RNiOoTPkptFtSVzQevY/yWtZwf/RxyVnPy/OcA9HBM3MlGDnBEYL5B41H0MTn0Uec8Hi+2qUtTfG2WWZBmMejQ==}

  /@sinclair/typebox/0.24.41:
    resolution: {integrity: sha512-TJCgQurls4FipFvHeC+gfAzb+GGstL0TDwYJKQVtTeSvJIznWzP7g3bAd5gEBlr8+bIxqnWS9VGVWREDhmE8jA==}
    dev: true

  /@sindresorhus/is/0.14.0:
    resolution: {integrity: sha512-9NET910DNaIPngYnLLPeg+Ogzqsi9uM4mSboU5y6p8S5DzMTVEsJZrawi+BoDNUVBa2DhJqQYUFvMDfgU062LQ==}
    engines: {node: '>=6'}

  /@sinonjs/commons/1.8.3:
    resolution: {integrity: sha512-xkNcLAn/wZaX14RPlwizcKicDk9G3F8m2nU3L7Ukm5zBgTwiT0wsoFAHx9Jq56fJA1z/7uKGtCRu16sOUCLIHQ==}
    dependencies:
      type-detect: 4.0.8
    dev: true

  /@sinonjs/fake-timers/8.1.0:
    resolution: {integrity: sha512-OAPJUAtgeINhh/TAlUID4QTs53Njm7xzddaVlEs/SXwgtiD1tW22zAB/W1wdqfrpmikgaWQ9Fw6Ws+hsiRm5Vg==}
    dependencies:
      '@sinonjs/commons': 1.8.3
    dev: true

  /@slorber/static-site-generator-webpack-plugin/4.0.7:
    resolution: {integrity: sha512-Ug7x6z5lwrz0WqdnNFOMYrDQNTPAprvHLSh6+/fmml3qUiz6l5eq+2MzLKWtn/q5K5NpSiFsZTP/fck/3vjSxA==}
    engines: {node: '>=14'}
    dependencies:
      eval: 0.1.8
      p-map: 4.0.0
      webpack-sources: 3.2.3

  /@svgr/babel-plugin-add-jsx-attribute/6.3.1_@babel+core@7.18.13:
    resolution: {integrity: sha512-jDBKArXYO1u0B1dmd2Nf8Oy6aTF5vLDfLoO9Oon/GLkqZ/NiggYWZA+a2HpUMH4ITwNqS3z43k8LWApB8S583w==}
    engines: {node: '>=10'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13

  /@svgr/babel-plugin-remove-jsx-attribute/6.3.1_@babel+core@7.18.13:
    resolution: {integrity: sha512-dQzyJ4prwjcFd929T43Z8vSYiTlTu8eafV40Z2gO7zy/SV5GT+ogxRJRBIKWomPBOiaVXFg3jY4S5hyEN3IBjQ==}
    engines: {node: '>=10'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13

  /@svgr/babel-plugin-remove-jsx-empty-expression/6.3.1_@babel+core@7.18.13:
    resolution: {integrity: sha512-HBOUc1XwSU67fU26V5Sfb8MQsT0HvUyxru7d0oBJ4rA2s4HW3PhyAPC7fV/mdsSGpAvOdd8Wpvkjsr0fWPUO7A==}
    engines: {node: '>=10'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13

  /@svgr/babel-plugin-replace-jsx-attribute-value/6.3.1_@babel+core@7.18.13:
    resolution: {integrity: sha512-C12e6aN4BXAolRrI601gPn5MDFCRHO7C4TM8Kks+rDtl8eEq+NN1sak0eAzJu363x3TmHXdZn7+Efd2nr9I5dA==}
    engines: {node: '>=10'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13

  /@svgr/babel-plugin-svg-dynamic-title/6.3.1_@babel+core@7.18.13:
    resolution: {integrity: sha512-6NU55Mmh3M5u2CfCCt6TX29/pPneutrkJnnDCHbKZnjukZmmgUAZLtZ2g6ZoSPdarowaQmAiBRgAHqHmG0vuqA==}
    engines: {node: '>=10'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13

  /@svgr/babel-plugin-svg-em-dimensions/6.3.1_@babel+core@7.18.13:
    resolution: {integrity: sha512-HV1NGHYTTe1vCNKlBgq/gKuCSfaRlKcHIADn7P8w8U3Zvujdw1rmusutghJ1pZJV7pDt3Gt8ws+SVrqHnBO/Qw==}
    engines: {node: '>=10'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13

  /@svgr/babel-plugin-transform-react-native-svg/6.3.1_@babel+core@7.18.13:
    resolution: {integrity: sha512-2wZhSHvTolFNeKDAN/ZmIeSz2O9JSw72XD+o2bNp2QAaWqa8KGpn5Yk5WHso6xqfSAiRzAE+GXlsrBO4UP9LLw==}
    engines: {node: '>=10'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13

  /@svgr/babel-plugin-transform-svg-component/6.3.1_@babel+core@7.18.13:
    resolution: {integrity: sha512-cZ8Tr6ZAWNUFfDeCKn/pGi976iWSkS8ijmEYKosP+6ktdZ7lW9HVLHojyusPw3w0j8PI4VBeWAXAmi/2G7owxw==}
    engines: {node: '>=12'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13

  /@svgr/babel-preset/6.3.1_@babel+core@7.18.13:
    resolution: {integrity: sha512-tQtWtzuMMQ3opH7je+MpwfuRA1Hf3cKdSgTtAYwOBDfmhabP7rcTfBi3E7V3MuwJNy/Y02/7/RutvwS1W4Qv9g==}
    engines: {node: '>=10'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@svgr/babel-plugin-add-jsx-attribute': 6.3.1_@babel+core@7.18.13
      '@svgr/babel-plugin-remove-jsx-attribute': 6.3.1_@babel+core@7.18.13
      '@svgr/babel-plugin-remove-jsx-empty-expression': 6.3.1_@babel+core@7.18.13
      '@svgr/babel-plugin-replace-jsx-attribute-value': 6.3.1_@babel+core@7.18.13
      '@svgr/babel-plugin-svg-dynamic-title': 6.3.1_@babel+core@7.18.13
      '@svgr/babel-plugin-svg-em-dimensions': 6.3.1_@babel+core@7.18.13
      '@svgr/babel-plugin-transform-react-native-svg': 6.3.1_@babel+core@7.18.13
      '@svgr/babel-plugin-transform-svg-component': 6.3.1_@babel+core@7.18.13

  /@svgr/core/6.3.1:
    resolution: {integrity: sha512-Sm3/7OdXbQreemf9aO25keerZSbnKMpGEfmH90EyYpj1e8wMD4TuwJIb3THDSgRMWk1kYJfSRulELBy4gVgZUA==}
    engines: {node: '>=10'}
    dependencies:
      '@svgr/plugin-jsx': 6.3.1_@svgr+core@6.3.1
      camelcase: 6.3.0
      cosmiconfig: 7.0.1
    transitivePeerDependencies:
      - supports-color

  /@svgr/hast-util-to-babel-ast/6.3.1:
    resolution: {integrity: sha512-NgyCbiTQIwe3wHe/VWOUjyxmpUmsrBjdoIxKpXt3Nqc3TN30BpJG22OxBvVzsAh9jqep0w0/h8Ywvdk3D9niNQ==}
    engines: {node: '>=10'}
    dependencies:
      '@babel/types': 7.19.0
      entities: 4.4.0

  /@svgr/plugin-jsx/6.3.1_@svgr+core@6.3.1:
    resolution: {integrity: sha512-r9+0mYG3hD4nNtUgsTXWGYJomv/bNd7kC16zvsM70I/bGeoCi/3lhTmYqeN6ChWX317OtQCSZZbH4wq9WwoXbw==}
    engines: {node: '>=10'}
    peerDependencies:
      '@svgr/core': ^6.0.0
    dependencies:
      '@babel/core': 7.18.13
      '@svgr/babel-preset': 6.3.1_@babel+core@7.18.13
      '@svgr/core': 6.3.1
      '@svgr/hast-util-to-babel-ast': 6.3.1
      svg-parser: 2.0.4
    transitivePeerDependencies:
      - supports-color

  /@svgr/plugin-svgo/6.3.1_@svgr+core@6.3.1:
    resolution: {integrity: sha512-yJIjTDKPYqzFVjmsbH5EdIwEsmKxjxdXSGJVLeUgwZOZPAkNQmD1v7LDbOdOKbR44FG8465Du+zWPdbYGnbMbw==}
    engines: {node: '>=10'}
    peerDependencies:
      '@svgr/core': ^6.0.0
    dependencies:
      '@svgr/core': 6.3.1
      cosmiconfig: 7.0.1
      deepmerge: 4.2.2
      svgo: 2.8.0

  /@svgr/webpack/6.3.1:
    resolution: {integrity: sha512-eODxwIUShLxSMaRjzJtrj9wg89D75JLczvWg9SaB5W+OtVTkiC1vdGd8+t+pf5fTlBOy4RRXAq7x1E3DUl3D0A==}
    engines: {node: '>=10'}
    dependencies:
      '@babel/core': 7.18.13
      '@babel/plugin-transform-react-constant-elements': 7.18.12_@babel+core@7.18.13
      '@babel/preset-env': 7.19.1_@babel+core@7.18.13
      '@babel/preset-react': 7.18.6_@babel+core@7.18.13
      '@babel/preset-typescript': 7.18.6_@babel+core@7.18.13
      '@svgr/core': 6.3.1
      '@svgr/plugin-jsx': 6.3.1_@svgr+core@6.3.1
      '@svgr/plugin-svgo': 6.3.1_@svgr+core@6.3.1
    transitivePeerDependencies:
      - supports-color

  /@szmarczak/http-timer/1.1.2:
    resolution: {integrity: sha512-XIB2XbzHTN6ieIjfIMV9hlVcfPU26s2vafYWQcZHWXHOxiaRZYEDKEwdl129Zyg50+foYV2jCgtrqSA6qNuNSA==}
    engines: {node: '>=6'}
    dependencies:
      defer-to-connect: 1.1.3

  /@tootallnate/once/1.1.2:
    resolution: {integrity: sha512-RbzJvlNzmRq5c3O09UipeuXno4tA1FE6ikOjxZK0tuxVv3412l64l5t1W5pj4+rJq9vpkm/kwiR07aZXnsKPxw==}
    engines: {node: '>= 6'}
    dev: true

  /@trysound/sax/0.2.0:
    resolution: {integrity: sha512-L7z9BgrNEcYyUYtF+HaEfiS5ebkh9jXqbszz7pC0hRBPaatV0XjSD3+eHrpqFemQfgwiFF0QPIarnIihIDn7OA==}
    engines: {node: '>=10.13.0'}

  /@types/argparse/1.0.38:
    resolution: {integrity: sha512-ebDJ9b0e702Yr7pWgB0jzm+CX4Srzz8RcXtLJDJB+BSccqMa36uyH/zUsSYao5+BD1ytv3k3rPYCq4mAE1hsXA==}

  /@types/babel__core/7.1.19:
    resolution: {integrity: sha512-WEOTgRsbYkvA/KCsDwVEGkd7WAr1e3g31VHQ8zy5gul/V1qKullU/BU5I68X5v7V3GnB9eotmom4v5a5gjxorw==}
    dependencies:
      '@babel/parser': 7.19.1
      '@babel/types': 7.19.0
      '@types/babel__generator': 7.6.4
      '@types/babel__template': 7.4.1
      '@types/babel__traverse': 7.18.1
    dev: true

  /@types/babel__generator/7.6.4:
    resolution: {integrity: sha512-tFkciB9j2K755yrTALxD44McOrk+gfpIpvC3sxHjRawj6PfnQxrse4Clq5y/Rq+G3mrBurMax/lG8Qn2t9mSsg==}
    dependencies:
      '@babel/types': 7.19.0
    dev: true

  /@types/babel__template/7.4.1:
    resolution: {integrity: sha512-azBFKemX6kMg5Io+/rdGT0dkGreboUVR0Cdm3fz9QJWpaQGJRQXl7C+6hOTCZcMll7KFyEQpgbYI2lHdsS4U7g==}
    dependencies:
      '@babel/parser': 7.19.1
      '@babel/types': 7.19.0
    dev: true

  /@types/babel__traverse/7.18.1:
    resolution: {integrity: sha512-FSdLaZh2UxaMuLp9lixWaHq/golWTRWOnRsAXzDTDSDOQLuZb1nsdCt6pJSPWSEQt2eFZ2YVk3oYhn+1kLMeMA==}
    dependencies:
      '@babel/types': 7.19.0
    dev: true

  /@types/body-parser/1.19.2:
    resolution: {integrity: sha512-ALYone6pm6QmwZoAgeyNksccT9Q4AWZQ6PvfwR37GT6r6FWUPguq6sUmNGSMV2Wr761oQoBxwGGa6DR5o1DC9g==}
    dependencies:
      '@types/connect': 3.4.35
      '@types/node': 14.18.23

  /@types/bonjour/3.5.10:
    resolution: {integrity: sha512-p7ienRMiS41Nu2/igbJxxLDWrSZ0WxM8UQgCeO9KhoVF7cOVFkrKsiDr1EsJIla8vV3oEEjGcz11jc5yimhzZw==}
    dependencies:
      '@types/node': 14.18.23

  /@types/connect-history-api-fallback/1.3.5:
    resolution: {integrity: sha512-h8QJa8xSb1WD4fpKBDcATDNGXghFj6/3GRWG6dhmRcu0RX1Ubasur2Uvx5aeEwlf0MwblEC2bMzzMQntxnw/Cw==}
    dependencies:
      '@types/express-serve-static-core': 4.17.31
      '@types/node': 14.18.23

  /@types/connect/3.4.35:
    resolution: {integrity: sha512-cdeYyv4KWoEgpBISTxWvqYsVy444DOqehiF3fM3ne10AmJ62RSyNkUnxMJXHQWRQQX2eR94m5y1IZyDwBjV9FQ==}
    dependencies:
      '@types/node': 14.18.23

  /@types/eslint-scope/3.7.4:
    resolution: {integrity: sha512-9K4zoImiZc3HlIp6AVUDE4CWYx22a+lhSZMYNpbjW04+YF0KWj4pJXnEMjdnFTiQibFFmElcsasJXDbdI/EPhA==}
    dependencies:
      '@types/eslint': 8.4.6
      '@types/estree': 0.0.51

  /@types/eslint/8.4.6:
    resolution: {integrity: sha512-/fqTbjxyFUaYNO7VcW5g+4npmqVACz1bB7RTHYuLj+PRjw9hrCwrUXVQFpChUS0JsyEFvMZ7U/PfmvWgxJhI9g==}
    dependencies:
      '@types/estree': 0.0.51
      '@types/json-schema': 7.0.11

  /@types/estree/0.0.50:
    resolution: {integrity: sha512-C6N5s2ZFtuZRj54k2/zyRhNDjJwwcViAM3Nbm8zjBpbqAdZ00mr0CFxvSKeO8Y/e03WVFLpQMdHYVfUd6SB+Hw==}
    dev: true

  /@types/estree/0.0.51:
    resolution: {integrity: sha512-CuPgU6f3eT/XgKKPqKd/gLZV1Xmvf1a2R5POBOGQa6uv82xpls89HU5zKeVoyR8XzHd1RGNOlQlvUe3CFkjWNQ==}

  /@types/express-serve-static-core/4.17.31:
    resolution: {integrity: sha512-DxMhY+NAsTwMMFHBTtJFNp5qiHKJ7TeqOo23zVEM9alT1Ml27Q3xcTH0xwxn7Q0BbMcVEJOs/7aQtUWupUQN3Q==}
    dependencies:
      '@types/node': 14.18.23
      '@types/qs': 6.9.7
      '@types/range-parser': 1.2.4

  /@types/express/4.17.14:
    resolution: {integrity: sha512-TEbt+vaPFQ+xpxFLFssxUDXj5cWCxZJjIcB7Yg0k0GMHGtgtQgpvx/MUQUeAkNbA9AAGrwkAsoeItdTgS7FMyg==}
    dependencies:
      '@types/body-parser': 1.19.2
      '@types/express-serve-static-core': 4.17.31
      '@types/qs': 6.9.7
      '@types/serve-static': 1.15.0

  /@types/graceful-fs/4.1.5:
    resolution: {integrity: sha512-anKkLmZZ+xm4p8JWBf4hElkM4XR+EZeA2M9BAkkTldmcyDY4mbdIJnRghDJH3Ov5ooY7/UAoENtmdMSkaAd7Cw==}
    dependencies:
      '@types/node': 14.18.23
    dev: true

  /@types/hast/2.3.4:
    resolution: {integrity: sha512-wLEm0QvaoawEDoTRwzTXp4b4jpwiJDvR5KMnFnVodm3scufTlBOWRD6N1OBf9TZMhjlNsSfcO5V+7AF4+Vy+9g==}
    dependencies:
      '@types/unist': 2.0.6

  /@types/heft-jest/1.0.3:
    resolution: {integrity: sha512-Z8u264kbGYY4+NER7zMox9OKp270/igaHqhLnCvNJ8CrFl/CTC8zUE4V3c6FDjN/rukIVreuhkfLlbchTcW9Vg==}
    dependencies:
      '@types/jest': 29.0.2
    dev: true

  /@types/history/4.7.11:
    resolution: {integrity: sha512-qjDJRrmvBMiTx+jyLxvLfJU7UznFuokDv4f3WRuriHKERccVpFU+8XMQUAbDzoiJCsmexxRExQeMwwCdamSKDA==}

  /@types/history/5.0.0:
    resolution: {integrity: sha512-hy8b7Y1J8OGe6LbAjj3xniQrj3v6lsivCcrmf4TzSgPzLkhIeKgc5IZnT7ReIqmEuodjfO8EYAuoFvIrHi/+jQ==}
    deprecated: This is a stub types definition. history provides its own type definitions, so you do not need this installed.
    dependencies:
      history: 5.3.0
    dev: true

  /@types/html-minifier-terser/6.1.0:
    resolution: {integrity: sha512-oh/6byDPnL1zeNXFrDXFLyZjkr1MsBG667IM792caf1L2UPOOMf65NFzjUH/ltyfwjAGfs1rsX1eftK0jC/KIg==}

  /@types/http-proxy/1.17.9:
    resolution: {integrity: sha512-QsbSjA/fSk7xB+UXlCT3wHBy5ai9wOcNDWwZAtud+jXhwOM3l+EYZh8Lng4+/6n8uar0J7xILzqftJdJ/Wdfkw==}
    dependencies:
      '@types/node': 14.18.23

  /@types/istanbul-lib-coverage/2.0.4:
    resolution: {integrity: sha512-z/QT1XN4K4KYuslS23k62yDIDLwLFkzxOuMplDtObz0+y7VqJCaO2o+SPwHCvLFZh7xazvvoor2tA/hPz9ee7g==}
    dev: true

  /@types/istanbul-lib-report/3.0.0:
    resolution: {integrity: sha512-plGgXAPfVKFoYfa9NpYDAkseG+g6Jr294RqeqcqDixSbU34MZVJRi/P+7Y8GDpzkEwLaGZZOpKIEmeVZNtKsrg==}
    dependencies:
      '@types/istanbul-lib-coverage': 2.0.4
    dev: true

  /@types/istanbul-reports/3.0.1:
    resolution: {integrity: sha512-c3mAZEuK0lvBp8tmuL74XRKn1+y2dcwOUpH7x4WrF6gk1GIgiluDRgMYQtw2OFcBvAJWlt6ASU3tSqxp0Uu0Aw==}
    dependencies:
      '@types/istanbul-lib-report': 3.0.0
    dev: true

  /@types/jest/29.0.2:
    resolution: {integrity: sha512-TaklkwSEtvwJpleiKBHgEBySIQlcZ08gYP/s5wdtdLnjz9uxjnDd7U+Y0JWACebkqBc+jtbol2PEtEW0wQV2zQ==}
    dependencies:
      expect: 29.0.3
      pretty-format: 29.0.3
    dev: true

  /@types/js-cookie/3.0.2:
    resolution: {integrity: sha512-6+0ekgfusHftJNYpihfkMu8BWdeHs9EOJuGcSofErjstGPfPGEu9yTu4t460lTzzAMl2cM5zngQJqPMHbbnvYA==}
    dev: true

  /@types/json-schema/7.0.11:
    resolution: {integrity: sha512-wOuvG1SN4Us4rez+tylwwwCV1psiNVOkJeM3AUWUNWg/jDQY2+HE/444y5gc+jBmRqASOm2Oeh5c1axHobwRKQ==}

  /@types/mdast/3.0.10:
    resolution: {integrity: sha512-W864tg/Osz1+9f4lrGTZpCSO5/z4608eUp19tbozkq2HJK6i3z1kT0H9tlADXuYIb1YYOBByU4Jsqkk75q48qA==}
    dependencies:
      '@types/unist': 2.0.6

  /@types/mime/3.0.1:
    resolution: {integrity: sha512-Y4XFY5VJAuw0FgAqPNd6NNoV44jbq9Bz2L7Rh/J6jLTiHBSBJa9fxqQIvkIld4GsoDOcCbvzOUAbLPsSKKg+uA==}

  /@types/minimist/1.2.2:
    resolution: {integrity: sha512-jhuKLIRrhvCPLqwPcx6INqmKeiA5EWrsCOPhrlFSrbrmU4ZMPjj5Ul/oLCMDO98XRUIwVm78xICz4EPCektzeQ==}
    dev: true

  /@types/node/12.20.24:
    resolution: {integrity: sha512-yxDeaQIAJlMav7fH5AQqPH1u8YIuhYJXYBzxaQ4PifsU0GDO38MSdmEDeRlIxrKbC6NbEaaEHDanWb+y30U8SQ==}

  /@types/node/14.18.23:
    resolution: {integrity: sha512-MhbCWN18R4GhO8ewQWAFK4TGQdBpXWByukz7cWyJmXhvRuCIaM/oWytGPqVmDzgEnnaIc9ss6HbU5mUi+vyZPA==}

  /@types/node/17.0.45:
    resolution: {integrity: sha512-w+tIMs3rq2afQdsPJlODhoUEKzFP1ayaoyl1CcnwtIlsVe7K7bA1NGm4s3PraqTLlXnbIN84zuBlxBWo1u9BLw==}
    dev: false

  /@types/normalize-package-data/2.4.1:
    resolution: {integrity: sha512-Gj7cI7z+98M282Tqmp2K5EIsoouUEzbBJhQQzDE3jSIRk6r9gsz0oUokqIUR4u1R3dMHo0pDHM7sNOHyhulypw==}
    dev: true

  /@types/parse-json/4.0.0:
    resolution: {integrity: sha512-//oorEZjL6sbPcKUaCdIGlIUeH26mgzimjBB77G6XRgnDl/L5wOnpyBGRe/Mmf5CVW3PwEBE1NjiMZ/ssFh4wA==}

  /@types/parse5/5.0.3:
    resolution: {integrity: sha512-kUNnecmtkunAoQ3CnjmMkzNU/gtxG8guhi+Fk2U/kOpIKjIMKnXGp4IJCgQJrXSgMsWYimYG4TGjz/UzbGEBTw==}

  /@types/prettier/2.7.0:
    resolution: {integrity: sha512-RI1L7N4JnW5gQw2spvL7Sllfuf1SaHdrZpCHiBlCXjIlufi1SMNnbu2teze3/QE67Fg2tBlH7W+mi4hVNk4p0A==}
    dev: true

  /@types/prop-types/15.7.5:
    resolution: {integrity: sha512-JCB8C6SnDoQf0cNycqd/35A7MjcnK+ZTqE7judS6o7utxUCg6imJg3QK2qzHKszlTjcj2cn+NwMB2i96ubpj7w==}

  /@types/qs/6.9.7:
    resolution: {integrity: sha512-FGa1F62FT09qcrueBA6qYTrJPVDzah9a+493+o2PCXsesWHIn27G98TsSMs3WPNbZIEj4+VJf6saSFpvD+3Zsw==}

  /@types/range-parser/1.2.4:
    resolution: {integrity: sha512-EEhsLsD6UsDM1yFhAvy0Cjr6VwmpMWqFBCb9w07wVugF7w9nfajxLuVmngTIpgS6svCnm6Vaw+MZhoDCKnOfsw==}

  /@types/react-dom/17.0.17:
    resolution: {integrity: sha512-VjnqEmqGnasQKV0CWLevqMTXBYG9GbwuE6x3VetERLh0cq2LTptFE73MrQi2S7GkKXCf2GgwItB/melLnxfnsg==}
    dependencies:
      '@types/react': 17.0.50
    dev: true

  /@types/react-router-config/5.0.6:
    resolution: {integrity: sha512-db1mx37a1EJDf1XeX8jJN7R3PZABmJQXR8r28yUjVMFSjkmnQo6X6pOEEmNl+Tp2gYQOGPdYbFIipBtdElZ3Yg==}
    dependencies:
      '@types/history': 4.7.11
      '@types/react': 17.0.50
      '@types/react-router': 5.1.19
    dev: false

  /@types/react-router-dom/5.3.3:
    resolution: {integrity: sha512-kpqnYK4wcdm5UaWI3fLcELopqLrHgLqNsdpHauzlQktfkHL3npOSwtj1Uz9oKBAzs7lFtVkV8j83voAz2D8fhw==}
    dependencies:
      '@types/history': 4.7.11
      '@types/react': 17.0.50
      '@types/react-router': 5.1.19

  /@types/react-router/5.1.19:
    resolution: {integrity: sha512-Fv/5kb2STAEMT3wHzdKQK2z8xKq38EDIGVrutYLmQVVLe+4orDFquU52hQrULnEHinMKv9FSA6lf9+uNT1ITtA==}
    dependencies:
      '@types/history': 4.7.11
      '@types/react': 17.0.50

  /@types/react/17.0.50:
    resolution: {integrity: sha512-ZCBHzpDb5skMnc1zFXAXnL3l1FAdi+xZvwxK+PkglMmBrwjpp9nKaWuEvrGnSifCJmBFGxZOOFuwC6KH/s0NuA==}
    dependencies:
      '@types/prop-types': 15.7.5
      '@types/scheduler': 0.16.2
      csstype: 3.1.1

  /@types/retry/0.12.0:
    resolution: {integrity: sha512-wWKOClTTiizcZhXnPY4wikVAwmdYHp8q6DmC+EJUzAMsycb7HB32Kh9RN4+0gExjmPmZSAQjgURXIGATPegAvA==}

  /@types/sax/1.2.4:
    resolution: {integrity: sha512-pSAff4IAxJjfAXUG6tFkO7dsSbTmf8CtUpfhhZ5VhkRpC4628tJhh3+V6H1E+/Gs9piSzYKT5yzHO5M4GG9jkw==}
    dependencies:
      '@types/node': 14.18.23
    dev: false

  /@types/scheduler/0.16.2:
    resolution: {integrity: sha512-hppQEBDmlwhFAXKJX2KnWLYu5yMfi91yazPb2l+lbJiwW+wdo1gNeRA+3RgNSO39WYX2euey41KEwnqesU2Jew==}

  /@types/serve-index/1.9.1:
    resolution: {integrity: sha512-d/Hs3nWDxNL2xAczmOVZNj92YZCS6RGxfBPjKzuu/XirCgXdpKEb88dYNbrYGint6IVWLNP+yonwVAuRC0T2Dg==}
    dependencies:
      '@types/express': 4.17.14

  /@types/serve-static/1.15.0:
    resolution: {integrity: sha512-z5xyF6uh8CbjAu9760KDKsH2FcDxZ2tFCsA4HIMWE6IkiYMXfVoa+4f9KX+FN0ZLsaMw1WNG2ETLA6N+/YA+cg==}
    dependencies:
      '@types/mime': 3.0.1
      '@types/node': 14.18.23

  /@types/sockjs/0.3.33:
    resolution: {integrity: sha512-f0KEEe05NvUnat+boPTZ0dgaLZ4SfSouXUgv5noUiefG2ajgKjmETo9ZJyuqsl7dfl2aHlLJUiki6B4ZYldiiw==}
    dependencies:
      '@types/node': 14.18.23

  /@types/stack-utils/2.0.1:
    resolution: {integrity: sha512-Hl219/BT5fLAaz6NDkSuhzasy49dwQS/DSdu4MdggFB8zcXv7vflBI3xp7FEmkmdDkBUI2bPUNeMttp2knYdxw==}
    dev: true

  /@types/tapable/1.0.6:
    resolution: {integrity: sha512-W+bw9ds02rAQaMvaLYxAbJ6cvguW/iJXNT6lTssS1ps6QdrMKttqEAMEG/b5CR8TZl3/L7/lH0ZV5nNR1LXikA==}
    dev: true

  /@types/unist/2.0.6:
    resolution: {integrity: sha512-PBjIUxZHOuj0R15/xuwJYjFi+KZdNFrehocChv4g5hu6aFroHue8m0lBP0POdK2nKzbw0cgV1mws8+V/JAcEkQ==}

  /@types/ws/8.5.3:
    resolution: {integrity: sha512-6YOoWjruKj1uLf3INHH7D3qTXwFfEsg1kf3c0uDdSBJwfa/llkwIjrAGV7j7mVgGNbzTQ3HiHKKDXl6bJPD97w==}
    dependencies:
      '@types/node': 14.18.23

  /@types/yargs-parser/21.0.0:
    resolution: {integrity: sha512-iO9ZQHkZxHn4mSakYV0vFHAVDyEOIJQrV2uZ06HxEPcx+mt8swXoZHIbaaJ2crJYFfErySgktuTZ3BeLz+XmFA==}
    dev: true

  /@types/yargs/16.0.4:
    resolution: {integrity: sha512-T8Yc9wt/5LbJyCaLiHPReJa0kApcIgJ7Bn735GjItUfh08Z1pJvu8QZqb9s+mMvKV6WUQRV7K2R46YbjMXTTJw==}
    dependencies:
      '@types/yargs-parser': 21.0.0
    dev: true

  /@types/yargs/17.0.12:
    resolution: {integrity: sha512-Nz4MPhecOFArtm81gFQvQqdV7XYCrWKx5uUt6GNHredFHn1i2mtWqXTON7EPXMtNi1qjtjEM/VCHDhcHsAMLXQ==}
    dependencies:
      '@types/yargs-parser': 21.0.0
    dev: true

  /@typescript-eslint/eslint-plugin/5.30.7_0e23bc9de590ca56e24ce3e421b2689b:
    resolution: {integrity: sha512-l4L6Do+tfeM2OK0GJsU7TUcM/1oN/N25xHm3Jb4z3OiDU4Lj8dIuxX9LpVMS9riSXQs42D1ieX7b85/r16H9Fw==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    peerDependencies:
      '@typescript-eslint/parser': ^5.0.0
      eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true
    dependencies:
      '@typescript-eslint/parser': 5.30.7_eslint@8.21.0+typescript@4.7.4
      '@typescript-eslint/scope-manager': 5.30.7
      '@typescript-eslint/type-utils': 5.30.7_eslint@8.21.0+typescript@4.7.4
      '@typescript-eslint/utils': 5.30.7_eslint@8.21.0+typescript@4.7.4
      debug: 4.3.4
      eslint: 8.21.0
      functional-red-black-tree: 1.0.1
      ignore: 5.2.0
      regexpp: 3.2.0
      semver: 7.3.7
      tsutils: 3.21.0_typescript@4.7.4
      typescript: 4.7.4
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@typescript-eslint/experimental-utils/5.30.7_eslint@8.21.0+typescript@4.7.4:
    resolution: {integrity: sha512-r218ZVL0zFBYzEq8/9K2ZhRgsmKUhm8xd3sWChgvTbmP98kHGuY83IUl64SS9fx9OSBM9vMLdzBfox4eDdm/ZQ==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    peerDependencies:
      eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
    dependencies:
      '@typescript-eslint/utils': 5.30.7_eslint@8.21.0+typescript@4.7.4
      eslint: 8.21.0
    transitivePeerDependencies:
      - supports-color
      - typescript
    dev: true

  /@typescript-eslint/parser/5.30.7_eslint@8.21.0+typescript@4.7.4:
    resolution: {integrity: sha512-Rg5xwznHWWSy7v2o0cdho6n+xLhK2gntImp0rJroVVFkcYFYQ8C8UJTSuTw/3CnExBmPjycjmUJkxVmjXsld6A==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    peerDependencies:
      eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true
    dependencies:
      '@typescript-eslint/scope-manager': 5.30.7
      '@typescript-eslint/types': 5.30.7
      '@typescript-eslint/typescript-estree': 5.30.7_typescript@4.7.4
      debug: 4.3.4
      eslint: 8.21.0
      typescript: 4.7.4
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@typescript-eslint/scope-manager/5.30.7:
    resolution: {integrity: sha512-7BM1bwvdF1UUvt+b9smhqdc/eniOnCKxQT/kj3oXtj3LqnTWCAM0qHRHfyzCzhEfWX0zrW7KqXXeE4DlchZBKw==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    dependencies:
      '@typescript-eslint/types': 5.30.7
      '@typescript-eslint/visitor-keys': 5.30.7
    dev: true

  /@typescript-eslint/type-utils/5.30.7_eslint@8.21.0+typescript@4.7.4:
    resolution: {integrity: sha512-nD5qAE2aJX/YLyKMvOU5jvJyku4QN5XBVsoTynFrjQZaDgDV6i7QHFiYCx10wvn7hFvfuqIRNBtsgaLe0DbWhw==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    peerDependencies:
      eslint: '*'
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true
    dependencies:
      '@typescript-eslint/utils': 5.30.7_eslint@8.21.0+typescript@4.7.4
      debug: 4.3.4
      eslint: 8.21.0
      tsutils: 3.21.0_typescript@4.7.4
      typescript: 4.7.4
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@typescript-eslint/types/5.30.7:
    resolution: {integrity: sha512-ocVkETUs82+U+HowkovV6uxf1AnVRKCmDRNUBUUo46/5SQv1owC/EBFkiu4MOHeZqhKz2ktZ3kvJJ1uFqQ8QPg==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    dev: true

  /@typescript-eslint/typescript-estree/5.30.7_typescript@4.7.4:
    resolution: {integrity: sha512-tNslqXI1ZdmXXrHER83TJ8OTYl4epUzJC0aj2i4DMDT4iU+UqLT3EJeGQvJ17BMbm31x5scSwo3hPM0nqQ1AEA==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    peerDependencies:
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true
    dependencies:
      '@typescript-eslint/types': 5.30.7
      '@typescript-eslint/visitor-keys': 5.30.7
      debug: 4.3.4
      globby: 11.1.0
      is-glob: 4.0.3
      semver: 7.3.7
      tsutils: 3.21.0_typescript@4.7.4
      typescript: 4.7.4
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@typescript-eslint/utils/5.30.7_eslint@8.21.0+typescript@4.7.4:
    resolution: {integrity: sha512-Z3pHdbFw+ftZiGUnm1GZhkJgVqsDL5CYW2yj+TB2mfXDFOMqtbzQi2dNJIyPqPbx9mv2kUxS1gU+r2gKlKi1rQ==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    peerDependencies:
      eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
    dependencies:
      '@types/json-schema': 7.0.11
      '@typescript-eslint/scope-manager': 5.30.7
      '@typescript-eslint/types': 5.30.7
      '@typescript-eslint/typescript-estree': 5.30.7_typescript@4.7.4
      eslint: 8.21.0
      eslint-scope: 5.1.1
      eslint-utils: 3.0.0_eslint@8.21.0
    transitivePeerDependencies:
      - supports-color
      - typescript
    dev: true

  /@typescript-eslint/visitor-keys/5.30.7:
    resolution: {integrity: sha512-KrRXf8nnjvcpxDFOKej4xkD7657+PClJs5cJVSG7NNoCNnjEdc46juNAQt7AyuWctuCgs6mVRc1xGctEqrjxWw==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    dependencies:
      '@typescript-eslint/types': 5.30.7
      eslint-visitor-keys: 3.3.0
    dev: true

  /@webassemblyjs/ast/1.11.1:
    resolution: {integrity: sha512-ukBh14qFLjxTQNTXocdyksN5QdM28S1CxHt2rdskFyL+xFV7VremuBLVbmCePj+URalXBENx/9Lm7lnhihtCSw==}
    dependencies:
      '@webassemblyjs/helper-numbers': 1.11.1
      '@webassemblyjs/helper-wasm-bytecode': 1.11.1

  /@webassemblyjs/floating-point-hex-parser/1.11.1:
    resolution: {integrity: sha512-iGRfyc5Bq+NnNuX8b5hwBrRjzf0ocrJPI6GWFodBFzmFnyvrQ83SHKhmilCU/8Jv67i4GJZBMhEzltxzcNagtQ==}

  /@webassemblyjs/helper-api-error/1.11.1:
    resolution: {integrity: sha512-RlhS8CBCXfRUR/cwo2ho9bkheSXG0+NwooXcc3PAILALf2QLdFyj7KGsKRbVc95hZnhnERon4kW/D3SZpp6Tcg==}

  /@webassemblyjs/helper-buffer/1.11.1:
    resolution: {integrity: sha512-gwikF65aDNeeXa8JxXa2BAk+REjSyhrNC9ZwdT0f8jc4dQQeDQ7G4m0f2QCLPJiMTTO6wfDmRmj/pW0PsUvIcA==}

  /@webassemblyjs/helper-numbers/1.11.1:
    resolution: {integrity: sha512-vDkbxiB8zfnPdNK9Rajcey5C0w+QJugEglN0of+kmO8l7lDb77AnlKYQF7aarZuCrv+l0UvqL+68gSDr3k9LPQ==}
    dependencies:
      '@webassemblyjs/floating-point-hex-parser': 1.11.1
      '@webassemblyjs/helper-api-error': 1.11.1
      '@xtuc/long': 4.2.2

  /@webassemblyjs/helper-wasm-bytecode/1.11.1:
    resolution: {integrity: sha512-PvpoOGiJwXeTrSf/qfudJhwlvDQxFgelbMqtq52WWiXC6Xgg1IREdngmPN3bs4RoO83PnL/nFrxucXj1+BX62Q==}

  /@webassemblyjs/helper-wasm-section/1.11.1:
    resolution: {integrity: sha512-10P9No29rYX1j7F3EVPX3JvGPQPae+AomuSTPiF9eBQeChHI6iqjMIwR9JmOJXwpnn/oVGDk7I5IlskuMwU/pg==}
    dependencies:
      '@webassemblyjs/ast': 1.11.1
      '@webassemblyjs/helper-buffer': 1.11.1
      '@webassemblyjs/helper-wasm-bytecode': 1.11.1
      '@webassemblyjs/wasm-gen': 1.11.1

  /@webassemblyjs/ieee754/1.11.1:
    resolution: {integrity: sha512-hJ87QIPtAMKbFq6CGTkZYJivEwZDbQUgYd3qKSadTNOhVY7p+gfP6Sr0lLRVTaG1JjFj+r3YchoqRYxNH3M0GQ==}
    dependencies:
      '@xtuc/ieee754': 1.2.0

  /@webassemblyjs/leb128/1.11.1:
    resolution: {integrity: sha512-BJ2P0hNZ0u+Th1YZXJpzW6miwqQUGcIHT1G/sf72gLVD9DZ5AdYTqPNbHZh6K1M5VmKvFXwGSWZADz+qBWxeRw==}
    dependencies:
      '@xtuc/long': 4.2.2

  /@webassemblyjs/utf8/1.11.1:
    resolution: {integrity: sha512-9kqcxAEdMhiwQkHpkNiorZzqpGrodQQ2IGrHHxCy+Ozng0ofyMA0lTqiLkVs1uzTRejX+/O0EOT7KxqVPuXosQ==}

  /@webassemblyjs/wasm-edit/1.11.1:
    resolution: {integrity: sha512-g+RsupUC1aTHfR8CDgnsVRVZFJqdkFHpsHMfJuWQzWU3tvnLC07UqHICfP+4XyL2tnr1amvl1Sdp06TnYCmVkA==}
    dependencies:
      '@webassemblyjs/ast': 1.11.1
      '@webassemblyjs/helper-buffer': 1.11.1
      '@webassemblyjs/helper-wasm-bytecode': 1.11.1
      '@webassemblyjs/helper-wasm-section': 1.11.1
      '@webassemblyjs/wasm-gen': 1.11.1
      '@webassemblyjs/wasm-opt': 1.11.1
      '@webassemblyjs/wasm-parser': 1.11.1
      '@webassemblyjs/wast-printer': 1.11.1

  /@webassemblyjs/wasm-gen/1.11.1:
    resolution: {integrity: sha512-F7QqKXwwNlMmsulj6+O7r4mmtAlCWfO/0HdgOxSklZfQcDu0TpLiD1mRt/zF25Bk59FIjEuGAIyn5ei4yMfLhA==}
    dependencies:
      '@webassemblyjs/ast': 1.11.1
      '@webassemblyjs/helper-wasm-bytecode': 1.11.1
      '@webassemblyjs/ieee754': 1.11.1
      '@webassemblyjs/leb128': 1.11.1
      '@webassemblyjs/utf8': 1.11.1

  /@webassemblyjs/wasm-opt/1.11.1:
    resolution: {integrity: sha512-VqnkNqnZlU5EB64pp1l7hdm3hmQw7Vgqa0KF/KCNO9sIpI6Fk6brDEiX+iCOYrvMuBWDws0NkTOxYEb85XQHHw==}
    dependencies:
      '@webassemblyjs/ast': 1.11.1
      '@webassemblyjs/helper-buffer': 1.11.1
      '@webassemblyjs/wasm-gen': 1.11.1
      '@webassemblyjs/wasm-parser': 1.11.1

  /@webassemblyjs/wasm-parser/1.11.1:
    resolution: {integrity: sha512-rrBujw+dJu32gYB7/Lup6UhdkPx9S9SnobZzRVL7VcBH9Bt9bCBLEuX/YXOOtBsOZ4NQrRykKhffRWHvigQvOA==}
    dependencies:
      '@webassemblyjs/ast': 1.11.1
      '@webassemblyjs/helper-api-error': 1.11.1
      '@webassemblyjs/helper-wasm-bytecode': 1.11.1
      '@webassemblyjs/ieee754': 1.11.1
      '@webassemblyjs/leb128': 1.11.1
      '@webassemblyjs/utf8': 1.11.1

  /@webassemblyjs/wast-printer/1.11.1:
    resolution: {integrity: sha512-IQboUWM4eKzWW+N/jij2sRatKMh99QEelo3Eb2q0qXkvPRISAj8Qxtmw5itwqK+TTkBuUIE45AxYPToqPtL5gg==}
    dependencies:
      '@webassemblyjs/ast': 1.11.1
      '@xtuc/long': 4.2.2

  /@xtuc/ieee754/1.2.0:
    resolution: {integrity: sha512-DX8nKgqcGwsc0eJSqYt5lwP4DH5FlHnmuWWBRy7X0NcaGR0ZtuyeESgMwTYVEtxmsNGY+qit4QYT/MIYTOTPeA==}

  /@xtuc/long/4.2.2:
    resolution: {integrity: sha512-NuHqBY1PB/D8xU6s/thBgOAiAP7HOYDQ32+BFZILJ8ivkUkAHQnWfn6WhL79Owj1qmUnoN/YPhktdIoucipkAQ==}

  /abab/2.0.6:
    resolution: {integrity: sha512-j2afSsaIENvHZN2B8GOpF566vZ5WVk5opAiMTvWgaQT8DkbOqsTfvNAvHoRGU2zzP8cPoqys+xHTRDWW8L+/BA==}
    dev: true

  /abbrev/1.1.1:
    resolution: {integrity: sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==}
    dev: true

  /accepts/1.3.8:
    resolution: {integrity: sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==}
    engines: {node: '>= 0.6'}
    dependencies:
      mime-types: 2.1.35
      negotiator: 0.6.3

  /acorn-globals/6.0.0:
    resolution: {integrity: sha512-ZQl7LOWaF5ePqqcX4hLuv/bLXYQNfNWw2c0/yX/TsPRKamzHcTGQnlCjHT3TsmkOUVEPS3crCxiPfdzE/Trlhg==}
    dependencies:
      acorn: 7.4.1
      acorn-walk: 7.2.0
    dev: true

  /acorn-import-assertions/1.8.0_acorn@8.8.0:
    resolution: {integrity: sha512-m7VZ3jwz4eK6A4Vtt8Ew1/mNbP24u0FhdyfA7fSvnJR6LMdfOYnmuIrrJAgrYfYJ10F/otaHTtrtrtmHdMNzEw==}
    peerDependencies:
      acorn: ^8
    dependencies:
      acorn: 8.8.0

  /acorn-jsx/5.3.2_acorn@8.8.0:
    resolution: {integrity: sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==}
    peerDependencies:
      acorn: ^6.0.0 || ^7.0.0 || ^8.0.0
    dependencies:
      acorn: 8.8.0
    dev: true

  /acorn-walk/7.2.0:
    resolution: {integrity: sha512-OPdCF6GsMIP+Az+aWfAAOEt2/+iVDKE7oy6lJ098aoe59oAmK76qV6Gw60SbZ8jHuG2wH058GF4pLFbYamYrVA==}
    engines: {node: '>=0.4.0'}
    dev: true

  /acorn-walk/8.2.0:
    resolution: {integrity: sha512-k+iyHEuPgSw6SbuDpGQM+06HQUa04DZ3o+F6CSzXMvvI5KMvnaEqXe+YVe555R9nn6GPt404fos4wcgpw12SDA==}
    engines: {node: '>=0.4.0'}

  /acorn/7.4.1:
    resolution: {integrity: sha512-nQyp0o1/mNdbTO1PO6kHkwSrmgZ0MT/jCCpNiwbUjGoRN4dlBhqJtoQuCnEOKzgTVwg0ZWiCoQy6SxMebQVh8A==}
    engines: {node: '>=0.4.0'}
    hasBin: true
    dev: true

  /acorn/8.8.0:
    resolution: {integrity: sha512-QOxyigPVrpZ2GXT+PFyZTl6TtOFc5egxHIP9IlQ+RbupQuX4RkT/Bee4/kQuC02Xkzg84JcT7oLYtDIQxp+v7w==}
    engines: {node: '>=0.4.0'}
    hasBin: true

  /address/1.2.1:
    resolution: {integrity: sha512-B+6bi5D34+fDYENiH5qOlA0cV2rAGKuWZ9LeyUUehbXy8e0VS9e498yO0Jeeh+iM+6KbfudHTFjXw2MmJD4QRA==}
    engines: {node: '>= 10.0.0'}

  /agent-base/6.0.2:
    resolution: {integrity: sha512-RZNwNclF7+MS/8bDg70amg32dyeZGZxiDuQmZxKLAlQjr3jGyLx+4Kkk58UO7D2QdgFIQCovuSuZESne6RG6XQ==}
    engines: {node: '>= 6.0.0'}
    dependencies:
      debug: 4.3.4
    transitivePeerDependencies:
      - supports-color
    dev: true

  /aggregate-error/3.1.0:
    resolution: {integrity: sha512-4I7Td01quW/RpocfNayFdFVk1qSuoh0E7JrbRJ16nH01HhKFQ88INq9Sd+nd72zqRySlr9BmDA8xlEJ6vJMrYA==}
    engines: {node: '>=8'}
    dependencies:
      clean-stack: 2.2.0
      indent-string: 4.0.0

  /ajv-formats/2.1.1:
    resolution: {integrity: sha512-Wx0Kx52hxE7C18hkMEggYlEifqWZtYaRgouJor+WMdPnQyEK13vgEWyVNup7SoeeoLMsr4kf5h6dOW11I15MUA==}
    peerDependenciesMeta:
      ajv:
        optional: true
    dependencies:
      ajv: 8.11.0

  /ajv-keywords/3.5.2_ajv@6.12.6:
    resolution: {integrity: sha512-5p6WTN0DdTGVQk6VjcEju19IgaHudalcfabD7yhDGeA6bcQnmL+CpveLJq/3hvfwd1aof6L386Ougkx6RfyMIQ==}
    peerDependencies:
      ajv: ^6.9.1
    dependencies:
      ajv: 6.12.6

  /ajv-keywords/5.1.0_ajv@8.11.0:
    resolution: {integrity: sha512-YCS/JNFAUyr5vAuhk1DWm1CBxRHW9LbJ2ozWeemrIqpbsqKjHVxYPyi5GC0rjZIT5JxJ3virVTS8wk4i/Z+krw==}
    peerDependencies:
      ajv: ^8.8.2
    dependencies:
      ajv: 8.11.0
      fast-deep-equal: 3.1.3

  /ajv/6.12.6:
    resolution: {integrity: sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==}
    dependencies:
      fast-deep-equal: 3.1.3
      fast-json-stable-stringify: 2.1.0
      json-schema-traverse: 0.4.1
      uri-js: 4.4.1

  /ajv/8.11.0:
    resolution: {integrity: sha512-wGgprdCvMalC0BztXvitD2hC04YffAvtsUn93JbGXYLAtCUO4xd17mCCZQxUOItiBwZvJScWo8NIvQMQ71rdpg==}
    dependencies:
      fast-deep-equal: 3.1.3
      json-schema-traverse: 1.0.0
      require-from-string: 2.0.2
      uri-js: 4.4.1

  /algoliasearch-helper/3.11.1_algoliasearch@4.14.2:
    resolution: {integrity: sha512-mvsPN3eK4E0bZG0/WlWJjeqe/bUD2KOEVOl0GyL/TGXn6wcpZU8NOuztGHCUKXkyg5gq6YzUakVTmnmSSO5Yiw==}
    peerDependencies:
      algoliasearch: '>= 3.1 < 6'
    dependencies:
      '@algolia/events': 4.0.1
      algoliasearch: 4.14.2
    dev: false

  /algoliasearch/4.14.2:
    resolution: {integrity: sha512-ngbEQonGEmf8dyEh5f+uOIihv4176dgbuOZspiuhmTTBRBuzWu3KCGHre6uHj5YyuC7pNvQGzB6ZNJyZi0z+Sg==}
    dependencies:
      '@algolia/cache-browser-local-storage': 4.14.2
      '@algolia/cache-common': 4.14.2
      '@algolia/cache-in-memory': 4.14.2
      '@algolia/client-account': 4.14.2
      '@algolia/client-analytics': 4.14.2
      '@algolia/client-common': 4.14.2
      '@algolia/client-personalization': 4.14.2
      '@algolia/client-search': 4.14.2
      '@algolia/logger-common': 4.14.2
      '@algolia/logger-console': 4.14.2
      '@algolia/requester-browser-xhr': 4.14.2
      '@algolia/requester-common': 4.14.2
      '@algolia/requester-node-http': 4.14.2
      '@algolia/transporter': 4.14.2

  /amdefine/1.0.1:
    resolution: {integrity: sha512-S2Hw0TtNkMJhIabBwIojKL9YHO5T0n5eNqWJ7Lrlel/zDbftQpxpapi8tZs3X1HWa+u+QeydGmzzNU0m09+Rcg==}
    engines: {node: '>=0.4.2'}
    dev: true

  /ansi-align/3.0.1:
    resolution: {integrity: sha512-IOfwwBF5iczOjp/WeY4YxyjqAFMQoZufdQWDd19SEExbVLNXqvpzSJ/M7Za4/sCPmQ0+GRquoA7bGcINcxew6w==}
    dependencies:
      string-width: 4.2.3

  /ansi-escapes/4.3.2:
    resolution: {integrity: sha512-gKXj5ALrKWQLsYG9jlTRmR/xKluxHV+Z9QEwNIgCfM1/uwPMCuzVVnh5mwTd+OuBZcwSIMbqssNWRm1lE51QaQ==}
    engines: {node: '>=8'}
    dependencies:
      type-fest: 0.21.3
    dev: true

  /ansi-html-community/0.0.8:
    resolution: {integrity: sha512-1APHAyr3+PCamwNw3bXCPp4HFLONZt/yIH0sZp0/469KWNTEy+qN5jQ3GVX6DMZ1UXAi34yVwtTeaG/HpBuuzw==}
    engines: {'0': node >= 0.8.0}
    hasBin: true

  /ansi-regex/2.1.1:
    resolution: {integrity: sha512-TIGnTpdo+E3+pCyAluZvtED5p5wCqLdezCyhPZzKPcxvFplEt4i+W7OONCKgeZFT3+y5NZZfOOS/Bdcanm1MYA==}
    engines: {node: '>=0.10.0'}
    dev: true

  /ansi-regex/4.1.1:
    resolution: {integrity: sha512-ILlv4k/3f6vfQ4OoP2AGvirOktlQ98ZEL1k9FaQjxa3L1abBgbuTDAdPOpvbGncC0BTVQrl+OM8xZGK6tWXt7g==}
    engines: {node: '>=6'}
    dev: true

  /ansi-regex/5.0.1:
    resolution: {integrity: sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==}
    engines: {node: '>=8'}

  /ansi-regex/6.0.1:
    resolution: {integrity: sha512-n5M855fKb2SsfMIiFFoVrABHJC8QtHwVx+mHWP3QcEqBHYienj5dHSgjbxtC0WEZXYt4wcD6zrQElDPhFuZgfA==}
    engines: {node: '>=12'}

  /ansi-styles/2.2.1:
    resolution: {integrity: sha512-kmCevFghRiWM7HB5zTPULl4r9bVFSWjz62MhqizDGUrq2NWuNMQyuv4tHHoKJHs69M/MF64lEcHdYIocrdWQYA==}
    engines: {node: '>=0.10.0'}
    dev: true

  /ansi-styles/3.2.1:
    resolution: {integrity: sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==}
    engines: {node: '>=4'}
    dependencies:
      color-convert: 1.9.3

  /ansi-styles/4.3.0:
    resolution: {integrity: sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==}
    engines: {node: '>=8'}
    dependencies:
      color-convert: 2.0.1

  /ansi-styles/5.2.0:
    resolution: {integrity: sha512-Cxwpt2SfTzTtXcfOlzGEee8O+c+MmUgGrNiBcXnuWxuFJHe6a5Hz7qwhwe5OgaSYI0IJvkLqWX1ASG+cJOkEiA==}
    engines: {node: '>=10'}
    dev: true

  /ansi-styles/6.1.1:
    resolution: {integrity: sha512-qDOv24WjnYuL+wbwHdlsYZFy+cgPtrYw0Tn7GLORicQp9BkQLzrgI3Pm4VyR9ERZ41YTn7KlMPuL1n05WdZvmg==}
    engines: {node: '>=12'}

  /anymatch/3.1.2:
    resolution: {integrity: sha512-P43ePfOAIupkguHUycrc4qJ9kz8ZiuOUijaETwX7THt0Y/GNK7v0aa8rY816xWjZ7rJdA5XdMcpVFTKMq+RvWg==}
    engines: {node: '>= 8'}
    dependencies:
      normalize-path: 3.0.0
      picomatch: 2.3.1

  /aproba/1.2.0:
    resolution: {integrity: sha512-Y9J6ZjXtoYh8RnXVCMOU/ttDmk1aBjunq9vO0ta5x85WDQiQfUF9sIPBITdbiiIVcBo03Hi3jMxigBtsddlXRw==}
    dev: true

  /are-we-there-yet/1.1.7:
    resolution: {integrity: sha512-nxwy40TuMiUGqMyRHgCSWZ9FM4VAoRP4xUYSTv5ImRog+h9yISPbVH7H8fASCIzYn9wlEv4zvFL7uKDMCFQm3g==}
    dependencies:
      delegates: 1.0.0
      readable-stream: 2.3.7
    dev: true

  /arg/5.0.2:
    resolution: {integrity: sha512-PYjyFOLKQ9y57JvQ6QLo8dAgNqswh8M1RMJYdQduT6xbWSgK36P/Z/v+p888pM69jMMfS8Xd8F6I1kQ/I9HUGg==}
    dev: false

  /argparse/1.0.10:
    resolution: {integrity: sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==}
    dependencies:
      sprintf-js: 1.0.3

  /argparse/2.0.1:
    resolution: {integrity: sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==}

  /array-flatten/1.1.1:
    resolution: {integrity: sha512-PCVAQswWemu6UdxsDFFX/+gVeYqKAod3D3UVm91jHwynguOwAvYPhx8nNlM++NqRcK6CxxpUafjmhIdKiHibqg==}

  /array-flatten/2.1.2:
    resolution: {integrity: sha512-hNfzcOV8W4NdualtqBFPyVO+54DSJuZGY9qT4pRroB6S9e3iiido2ISIC5h9R2sPJ8H3FHCIiEnsv1lPXO3KtQ==}

  /array-includes/3.1.5:
    resolution: {integrity: sha512-iSDYZMMyTPkiFasVqfuAQnWAYcvO/SeBSCGKePoEthjp4LEMTe4uLc7b025o4jAZpHhihh8xPo99TNWUWWkGDQ==}
    engines: {node: '>= 0.4'}
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.4
      es-abstract: 1.20.2
      get-intrinsic: 1.1.3
      is-string: 1.0.7
    dev: true

  /array-union/2.1.0:
    resolution: {integrity: sha512-HGyxoOTYUyCM6stUe6EJgnd4EoewAI7zMdfqO+kGjnlZmBDz/cR5pf8r/cR4Wq60sL/p0IkcjUEEPwS3GFrIyw==}
    engines: {node: '>=8'}

  /array.prototype.flatmap/1.3.0:
    resolution: {integrity: sha512-PZC9/8TKAIxcWKdyeb77EzULHPrIX/tIZebLJUQOMR1OwYosT8yggdfWScfTBCDj5utONvOuPQQumYsU2ULbkg==}
    engines: {node: '>= 0.4'}
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.4
      es-abstract: 1.20.2
      es-shim-unscopables: 1.0.0
    dev: true

  /arrify/1.0.1:
    resolution: {integrity: sha512-3CYzex9M9FGQjCGMGyi6/31c8GJbgb0qGyrx5HWxPd0aCwh4cB2YjMb2Xf9UuoogrMrlO9cTqnB5rI5GHZTcUA==}
    engines: {node: '>=0.10.0'}
    dev: true

  /asap/2.0.6:
    resolution: {integrity: sha512-BSHWgDSAiKs50o2Re8ppvp3seVHXSRM44cdSsT9FfNEUUZLOGWVCsiWaRPWM1Znn+mqZ1OfVZ3z3DWEzSp7hRA==}
    dev: false

  /asn1/0.2.6:
    resolution: {integrity: sha512-ix/FxPn0MDjeyJ7i/yoHGFt/EX6LyNbxSEhPPXODPL+KB0VPk86UYfL0lMdy+KCnv+fmvIzySwaK5COwqVbWTQ==}
    dependencies:
      safer-buffer: 2.1.2
    dev: true

  /assert-plus/1.0.0:
    resolution: {integrity: sha512-NfJ4UzBCcQGLDlQq7nHxH+tv3kyZ0hHQqF5BO6J7tNJeP5do1llPr8dZ8zHonfhAu0PHAdMkSo+8o0wxg9lZWw==}
    engines: {node: '>=0.8'}
    dev: true

  /async-foreach/0.1.3:
    resolution: {integrity: sha512-VUeSMD8nEGBWaZK4lizI1sf3yEC7pnAQ/mrI7pC2fBz2s/tq5jWWEngTwaf0Gruu/OoXRGLGg1XFqpYBiGTYJA==}
    dev: true

  /asynckit/0.4.0:
    resolution: {integrity: sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q==}
    dev: true

  /at-least-node/1.0.0:
    resolution: {integrity: sha512-+q/t7Ekv1EDY2l6Gda6LLiX14rU9TV20Wa3ofeQmwPFZbOMo9DXrLbOjFaaclkXKWidIaopwAObQDqwWtGUjqg==}
    engines: {node: '>= 4.0.0'}

  /autoprefixer/10.4.11_postcss@8.4.16:
    resolution: {integrity: sha512-5lHp6DgRodxlBLSkzHOTcufWFflH1ewfy2hvFQyjrblBFlP/0Yh4O/Wrg4ow8WRlN3AAUFFLAQwX8hTptzqVHg==}
    engines: {node: ^10 || ^12 || >=14}
    hasBin: true
    peerDependencies:
      postcss: ^8.1.0
    dependencies:
      browserslist: 4.21.4
      caniuse-lite: 1.0.30001400
      fraction.js: 4.2.0
      normalize-range: 0.1.2
      picocolors: 1.0.0
      postcss: 8.4.16
      postcss-value-parser: 4.2.0

  /aws-sign2/0.7.0:
    resolution: {integrity: sha512-08kcGqnYf/YmjoRhfxyu+CLxBjUtHLXLXX/vUfx9l2LYzG3c1m61nrpyFUZI6zeS+Li/wWMMidD9KgrqtGq3mA==}
    dev: true

  /aws4/1.11.0:
    resolution: {integrity: sha512-xh1Rl34h6Fi1DC2WWKfxUTVqRsNnr6LsKz2+hfwDxQJWmrx8+c7ylaqBMcHfl1U1r2dsifOvKX3LQuLNZ+XSvA==}
    dev: true

  /axios/0.25.0:
    resolution: {integrity: sha512-cD8FOb0tRH3uuEe6+evtAbgJtfxr7ly3fQjYcMcuPlgkwVS9xboaVIpcDV+cYQe+yGykgwZCs1pzjntcGa6l5g==}
    dependencies:
      follow-redirects: 1.15.2
    transitivePeerDependencies:
      - debug

  /axios/0.26.1:
    resolution: {integrity: sha512-fPwcX4EvnSHuInCMItEhAGnaSEXRBjtzh9fOtsE6E1G6p7vl7edEeZe11QHf18+6+9gR5PbKV/sGKNaD8YaMeA==}
    dependencies:
      follow-redirects: 1.15.2
    transitivePeerDependencies:
      - debug
    dev: false

  /babel-jest/27.5.1_@babel+core@7.18.13:
    resolution: {integrity: sha512-cdQ5dXjGRd0IBRATiQ4mZGlGlRE8kJpjPOixdNRdT+m3UcNqmYWN6rK6nvtXYfY3D76cb8s/O1Ss8ea24PIwcg==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    peerDependencies:
      '@babel/core': ^7.8.0
    dependencies:
      '@babel/core': 7.18.13
      '@jest/transform': 27.5.1
      '@jest/types': 27.5.1
      '@types/babel__core': 7.1.19
      babel-plugin-istanbul: 6.1.1
      babel-preset-jest: 27.5.1_@babel+core@7.18.13
      chalk: 4.1.2
      graceful-fs: 4.2.10
      slash: 3.0.0
    transitivePeerDependencies:
      - supports-color
    dev: true

  /babel-loader/8.2.5_987cc70bded3fa81b046dafa8784ef98:
    resolution: {integrity: sha512-OSiFfH89LrEMiWd4pLNqGz4CwJDtbs2ZVc+iGu2HrkRfPxId9F2anQj38IxWpmRfsUY0aBZYi1EFcd3mhtRMLQ==}
    engines: {node: '>= 8.9'}
    peerDependencies:
      '@babel/core': ^7.0.0
      webpack: '>=2'
    dependencies:
      '@babel/core': 7.18.13
      find-cache-dir: 3.3.2
      loader-utils: 2.0.2
      make-dir: 3.1.0
      schema-utils: 2.7.1
      webpack: 5.74.0

  /babel-plugin-apply-mdx-type-prop/1.6.22_@babel+core@7.12.9:
    resolution: {integrity: sha512-VefL+8o+F/DfK24lPZMtJctrCVOfgbqLAGZSkxwhazQv4VxPg3Za/i40fu22KR2m8eEda+IfSOlPLUSIiLcnCQ==}
    peerDependencies:
      '@babel/core': ^7.11.6
    dependencies:
      '@babel/core': 7.12.9
      '@babel/helper-plugin-utils': 7.10.4
      '@mdx-js/util': 1.6.22

  /babel-plugin-dynamic-import-node/2.3.3:
    resolution: {integrity: sha512-jZVI+s9Zg3IqA/kdi0i6UDCybUI3aSBLnglhYbSSjKlV7yF1F/5LWv8MakQmvYpnbJDS6fcBL2KzHSxNCMtWSQ==}
    dependencies:
      object.assign: 4.1.4

  /babel-plugin-extract-import-names/1.6.22:
    resolution: {integrity: sha512-yJ9BsJaISua7d8zNT7oRG1ZLBJCIdZ4PZqmH8qa9N5AK01ifk3fnkc98AXhtzE7UkfCsEumvoQWgoYLhOnJ7jQ==}
    dependencies:
      '@babel/helper-plugin-utils': 7.10.4

  /babel-plugin-istanbul/6.1.1:
    resolution: {integrity: sha512-Y1IQok9821cC9onCx5otgFfRm7Lm+I+wwxOx738M/WLPZ9Q42m4IG5W0FNX8WLL2gYMZo3JkuXIH2DOpWM+qwA==}
    engines: {node: '>=8'}
    dependencies:
      '@babel/helper-plugin-utils': 7.19.0
      '@istanbuljs/load-nyc-config': 1.1.0
      '@istanbuljs/schema': 0.1.3
      istanbul-lib-instrument: 5.2.0
      test-exclude: 6.0.0
    transitivePeerDependencies:
      - supports-color
    dev: true

  /babel-plugin-jest-hoist/27.5.1:
    resolution: {integrity: sha512-50wCwD5EMNW4aRpOwtqzyZHIewTYNxLA4nhB+09d8BIssfNfzBRhkBIHiaPv1Si226TQSvp8gxAJm2iY2qs2hQ==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@babel/template': 7.18.10
      '@babel/types': 7.19.0
      '@types/babel__core': 7.1.19
      '@types/babel__traverse': 7.18.1
    dev: true

  /babel-plugin-polyfill-corejs2/0.3.3_@babel+core@7.18.13:
    resolution: {integrity: sha512-8hOdmFYFSZhqg2C/JgLUQ+t52o5nirNwaWM2B9LWteozwIvM14VSwdsCAUET10qT+kmySAlseadmfeeSWFCy+Q==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/compat-data': 7.19.1
      '@babel/core': 7.18.13
      '@babel/helper-define-polyfill-provider': 0.3.3_@babel+core@7.18.13
      semver: 6.3.0
    transitivePeerDependencies:
      - supports-color

  /babel-plugin-polyfill-corejs3/0.6.0_@babel+core@7.18.13:
    resolution: {integrity: sha512-+eHqR6OPcBhJOGgsIar7xoAB1GcSwVUA3XjAd7HJNzOXT4wv6/H7KIdA/Nc60cvUlDbKApmqNvD1B1bzOt4nyA==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-define-polyfill-provider': 0.3.3_@babel+core@7.18.13
      core-js-compat: 3.25.1
    transitivePeerDependencies:
      - supports-color

  /babel-plugin-polyfill-regenerator/0.4.1_@babel+core@7.18.13:
    resolution: {integrity: sha512-NtQGmyQDXjQqQ+IzRkBVwEOz9lQ4zxAQZgoAYEtU9dJjnl1Oc98qnN7jcp+bE7O7aYzVpavXE3/VKXNzUbh7aw==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/helper-define-polyfill-provider': 0.3.3_@babel+core@7.18.13
    transitivePeerDependencies:
      - supports-color

  /babel-preset-current-node-syntax/1.0.1_@babel+core@7.18.13:
    resolution: {integrity: sha512-M7LQ0bxarkxQoN+vz5aJPsLBn77n8QgTFmo8WK0/44auK2xlCXrYcUxHFxgU7qW5Yzw/CjmLRK2uJzaCd7LvqQ==}
    peerDependencies:
      '@babel/core': ^7.0.0
    dependencies:
      '@babel/core': 7.18.13
      '@babel/plugin-syntax-async-generators': 7.8.4_@babel+core@7.18.13
      '@babel/plugin-syntax-bigint': 7.8.3_@babel+core@7.18.13
      '@babel/plugin-syntax-class-properties': 7.12.13_@babel+core@7.18.13
      '@babel/plugin-syntax-import-meta': 7.10.4_@babel+core@7.18.13
      '@babel/plugin-syntax-json-strings': 7.8.3_@babel+core@7.18.13
      '@babel/plugin-syntax-logical-assignment-operators': 7.10.4_@babel+core@7.18.13
      '@babel/plugin-syntax-nullish-coalescing-operator': 7.8.3_@babel+core@7.18.13
      '@babel/plugin-syntax-numeric-separator': 7.10.4_@babel+core@7.18.13
      '@babel/plugin-syntax-object-rest-spread': 7.8.3_@babel+core@7.18.13
      '@babel/plugin-syntax-optional-catch-binding': 7.8.3_@babel+core@7.18.13
      '@babel/plugin-syntax-optional-chaining': 7.8.3_@babel+core@7.18.13
      '@babel/plugin-syntax-top-level-await': 7.14.5_@babel+core@7.18.13
    dev: true

  /babel-preset-jest/27.5.1_@babel+core@7.18.13:
    resolution: {integrity: sha512-Nptf2FzlPCWYuJg41HBqXVT8ym6bXOevuCTbhxlUpjwtysGaIWFvDEjp4y+G7fl13FgOdjs7P/DmErqH7da0Ag==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    peerDependencies:
      '@babel/core': ^7.0.0
    dependencies:
      '@babel/core': 7.18.13
      babel-plugin-jest-hoist: 27.5.1
      babel-preset-current-node-syntax: 1.0.1_@babel+core@7.18.13
    dev: true

  /bail/1.0.5:
    resolution: {integrity: sha512-xFbRxM1tahm08yHBP16MMjVUAvDaBMD38zsM9EMAUN61omwLmKlOpB/Zku5QkjZ8TZ4vn53pj+t518cH0S03RQ==}

  /balanced-match/1.0.2:
    resolution: {integrity: sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==}

  /base16/1.0.0:
    resolution: {integrity: sha512-pNdYkNPiJUnEhnfXV56+sQy8+AaPcG3POZAUnwr4EeqCUZFz4u2PePbo3e5Gj4ziYPCWGUZT9RHisvJKnwFuBQ==}
    dev: false

  /batch/0.6.1:
    resolution: {integrity: sha1-3DQxT05nkxgJP8dgJyUl+UvyXBY=}

  /bcrypt-pbkdf/1.0.2:
    resolution: {integrity: sha512-qeFIXtP4MSoi6NLqO12WfqARWWuCKi2Rn/9hJLEmtB5yTNr9DqFWkJRCf2qShWzPeAMRnOgCrq0sg/KLv5ES9w==}
    dependencies:
      tweetnacl: 0.14.5
    dev: true

  /big.js/5.2.2:
    resolution: {integrity: sha512-vyL2OymJxmarO8gxMr0mhChsO9QGwhynfuu4+MHTAW6czfq9humCB7rKpUjDd9YUiDPU4mzpyupFSvOClAwbmQ==}

  /binary-extensions/2.2.0:
    resolution: {integrity: sha512-jDctJ/IVQbZoJykoeHbhXpOlNBqGNcwXJKJog42E5HDPUwQTSdjCHdihjj0DlnheQ7blbT6dHOafNAiS8ooQKA==}
    engines: {node: '>=8'}

  /body-parser/1.20.0:
    resolution: {integrity: sha512-DfJ+q6EPcGKZD1QWUjSpqp+Q7bDQTsQIF4zfUAtZ6qk+H/3/QRhg9CEp39ss+/T2vw0+HaidC0ecJj/DRLIaKg==}
    engines: {node: '>= 0.8', npm: 1.2.8000 || >= 1.4.16}
    dependencies:
      bytes: 3.1.2
      content-type: 1.0.4
      debug: 2.6.9
      depd: 2.0.0
      destroy: 1.2.0
      http-errors: 2.0.0
      iconv-lite: 0.4.24
      on-finished: 2.4.1
      qs: 6.10.3
      raw-body: 2.5.1
      type-is: 1.6.18
      unpipe: 1.0.0

  /bonjour-service/1.0.14:
    resolution: {integrity: sha512-HIMbgLnk1Vqvs6B4Wq5ep7mxvj9sGz5d1JJyDNSGNIdA/w2MCz6GTjWTdjqOJV1bEPj+6IkxDvWNFKEBxNt4kQ==}
    dependencies:
      array-flatten: 2.1.2
      dns-equal: 1.0.0
      fast-deep-equal: 3.1.3
      multicast-dns: 7.2.5

  /boolbase/1.0.0:
    resolution: {integrity: sha512-JZOSA7Mo9sNGB8+UjSgzdLtokWAky1zbztM3WRLCbZ70/3cTANmQmOdR7y2g+J0e2WXywy1yS468tY+IruqEww==}

  /boxen/5.1.2:
    resolution: {integrity: sha512-9gYgQKXx+1nP8mP7CzFyaUARhg7D3n1dF/FnErWmu9l6JvGpNUN278h0aSb+QjoiKSWG+iZ3uHrcqk0qrY9RQQ==}
    engines: {node: '>=10'}
    dependencies:
      ansi-align: 3.0.1
      camelcase: 6.3.0
      chalk: 4.1.2
      cli-boxes: 2.2.1
      string-width: 4.2.3
      type-fest: 0.20.2
      widest-line: 3.1.0
      wrap-ansi: 7.0.0

  /boxen/6.2.1:
    resolution: {integrity: sha512-H4PEsJXfFI/Pt8sjDWbHlQPx4zL/bvSQjcilJmaulGt5mLDorHOHpmdXAJcBcmru7PhYSp/cDMWRko4ZUMFkSw==}
    engines: {node: ^12.20.0 || ^14.13.1 || >=16.0.0}
    dependencies:
      ansi-align: 3.0.1
      camelcase: 6.3.0
      chalk: 4.1.2
      cli-boxes: 3.0.0
      string-width: 5.1.2
      type-fest: 2.19.0
      widest-line: 4.0.1
      wrap-ansi: 8.0.1

  /brace-expansion/1.1.11:
    resolution: {integrity: sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==}
    dependencies:
      balanced-match: 1.0.2
      concat-map: 0.0.1

  /braces/3.0.2:
    resolution: {integrity: sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==}
    engines: {node: '>=8'}
    dependencies:
      fill-range: 7.0.1

  /browser-process-hrtime/1.0.0:
    resolution: {integrity: sha512-9o5UecI3GhkpM6DrXr69PblIuWxPKk9Y0jHBRhdocZ2y7YECBFCsHm79Pr3OyR2AvjhDkabFJaDJMYRazHgsow==}
    dev: true

  /browserslist/4.21.4:
    resolution: {integrity: sha512-CBHJJdDmgjl3daYjN5Cp5kbTf1mUhZoS+beLklHIvkOWscs83YAhLlF3Wsh/lciQYAcbBJgTOD44VtG31ZM4Hw==}
    engines: {node: ^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7}
    hasBin: true
    dependencies:
      caniuse-lite: 1.0.30001400
      electron-to-chromium: 1.4.251
      node-releases: 2.0.6
      update-browserslist-db: 1.0.9_browserslist@4.21.4

  /bser/2.1.1:
    resolution: {integrity: sha512-gQxTNE/GAfIIrmHLUE3oJyp5FO6HRBfhjnw4/wMmA63ZGDJnWBmgY/lyQBpnDUkGmAhbSe39tx2d/iTOAfglwQ==}
    dependencies:
      node-int64: 0.4.0
    dev: true

  /buffer-from/1.1.2:
    resolution: {integrity: sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ==}

  /bytes/3.0.0:
    resolution: {integrity: sha1-0ygVQE1olpn4Wk6k+odV3ROpYEg=}
    engines: {node: '>= 0.8'}

  /bytes/3.1.2:
    resolution: {integrity: sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==}
    engines: {node: '>= 0.8'}

  /cacheable-request/6.1.0:
    resolution: {integrity: sha512-Oj3cAGPCqOZX7Rz64Uny2GYAZNliQSqfbePrgAQ1wKAihYmCUnraBtJtKcGR4xz7wF+LoJC+ssFZvv5BgF9Igg==}
    engines: {node: '>=8'}
    dependencies:
      clone-response: 1.0.3
      get-stream: 5.2.0
      http-cache-semantics: 4.1.0
      keyv: 3.1.0
      lowercase-keys: 2.0.0
      normalize-url: 4.5.1
      responselike: 1.0.2

  /call-bind/1.0.2:
    resolution: {integrity: sha512-7O+FbCihrB5WGbFYesctwmTKae6rOiIzmz1icreWJ+0aA7LJfuqhEso2T9ncpcFtzMQtzXf2QGGueWJGTYsqrA==}
    dependencies:
      function-bind: 1.1.1
      get-intrinsic: 1.1.3

  /callsites/3.1.0:
    resolution: {integrity: sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==}
    engines: {node: '>=6'}

  /camel-case/4.1.2:
    resolution: {integrity: sha512-gxGWBrTT1JuMx6R+o5PTXMmUnhnVzLQ9SNutD4YqKtI6ap897t3tKECYla6gCWEkplXnlNybEkZg9GEGxKFCgw==}
    dependencies:
      pascal-case: 3.1.2
      tslib: 2.4.0

  /camelcase-css/2.0.1:
    resolution: {integrity: sha512-QOSvevhslijgYwRx6Rv7zKdMF8lbRmx+uQGx2+vDc+KI/eBnsy9kit5aj23AgGu3pa4t9AgwbnXWqS+iOY+2aA==}
    engines: {node: '>= 6'}

  /camelcase-keys/6.2.2:
    resolution: {integrity: sha512-YrwaA0vEKazPBkn0ipTiMpSajYDSe+KjQfrjhcBMxJt/znbvlHd8Pw/Vamaz5EB4Wfhs3SUR3Z9mwRu/P3s3Yg==}
    engines: {node: '>=8'}
    dependencies:
      camelcase: 5.3.1
      map-obj: 4.3.0
      quick-lru: 4.0.1
    dev: true

  /camelcase/5.3.1:
    resolution: {integrity: sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==}
    engines: {node: '>=6'}
    dev: true

  /camelcase/6.3.0:
    resolution: {integrity: sha512-Gmy6FhYlCY7uOElZUSbxo2UCDH8owEk996gkbrpsgGtrJLM3J7jGxl9Ic7Qwwj4ivOE5AWZWRMecDdF7hqGjFA==}
    engines: {node: '>=10'}

  /caniuse-api/3.0.0:
    resolution: {integrity: sha512-bsTwuIg/BZZK/vreVTYYbSWoe2F+71P7K5QGEX+pT250DZbfU1MQ5prOKpPR+LL6uWKK3KMwMCAS74QB3Um1uw==}
    dependencies:
      browserslist: 4.21.4
      caniuse-lite: 1.0.30001400
      lodash.memoize: 4.1.2
      lodash.uniq: 4.5.0

  /caniuse-lite/1.0.30001400:
    resolution: {integrity: sha512-Mv659Hn65Z4LgZdJ7ge5JTVbE3rqbJaaXgW5LEI9/tOaXclfIZ8DW7D7FCWWWmWiiPS7AC48S8kf3DApSxQdgA==}

  /caseless/0.12.0:
    resolution: {integrity: sha512-4tYFyifaFfGacoiObjJegolkwSU4xQNGbVgUiNYVUxbQ2x2lUsFvY4hVgVzGiIe6WLOPqycWXA40l+PWsxthUw==}
    dev: true

  /ccount/1.1.0:
    resolution: {integrity: sha512-vlNK021QdI7PNeiUh/lKkC/mNHHfV0m/Ad5JoI0TYtlBnJAslM/JIkm/tGC88bkLIwO6OQ5uV6ztS6kVAtCDlg==}

  /chalk/1.1.3:
    resolution: {integrity: sha512-U3lRVLMSlsCfjqYPbLyVv11M9CPW4I728d6TCKMAOJueEeB9/8o+eSsMnxPJD+Q+K909sdESg7C+tIkoH6on1A==}
    engines: {node: '>=0.10.0'}
    dependencies:
      ansi-styles: 2.2.1
      escape-string-regexp: 1.0.5
      has-ansi: 2.0.0
      strip-ansi: 3.0.1
      supports-color: 2.0.0
    dev: true

  /chalk/2.4.2:
    resolution: {integrity: sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==}
    engines: {node: '>=4'}
    dependencies:
      ansi-styles: 3.2.1
      escape-string-regexp: 1.0.5
      supports-color: 5.5.0

  /chalk/4.1.2:
    resolution: {integrity: sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==}
    engines: {node: '>=10'}
    dependencies:
      ansi-styles: 4.3.0
      supports-color: 7.2.0

  /char-regex/1.0.2:
    resolution: {integrity: sha512-kWWXztvZ5SBQV+eRgKFeh8q5sLuZY2+8WUIzlxWVTg+oGwY14qylx1KbKzHd8P6ZYkAg0xyIDU9JMHhyJMZ1jw==}
    engines: {node: '>=10'}
    dev: true

  /character-entities-legacy/1.1.4:
    resolution: {integrity: sha512-3Xnr+7ZFS1uxeiUDvV02wQ+QDbc55o97tIV5zHScSPJpcLm/r0DFPcoY3tYRp+VZukxuMeKgXYmsXQHO05zQeA==}

  /character-entities/1.2.4:
    resolution: {integrity: sha512-iBMyeEHxfVnIakwOuDXpVkc54HijNgCyQB2w0VfGQThle6NXn50zU6V/u+LDhxHcDUPojn6Kpga3PTAD8W1bQw==}

  /character-reference-invalid/1.1.4:
    resolution: {integrity: sha512-mKKUkUbhPpQlCOfIuZkvSEgktjPFIsZKRRbC6KWVEMvlzblj3i3asQv5ODsrwt0N3pHAEvjP8KTQPHkp0+6jOg==}

  /cheerio-select/2.1.0:
    resolution: {integrity: sha512-9v9kG0LvzrlcungtnJtpGNxY+fzECQKhK4EGJX2vByejiMX84MFNQw4UxPJl3bFbTMw+Dfs37XaIkCwTZfLh4g==}
    dependencies:
      boolbase: 1.0.0
      css-select: 5.1.0
      css-what: 6.1.0
      domelementtype: 2.3.0
      domhandler: 5.0.3
      domutils: 3.0.1
    dev: false

  /cheerio/1.0.0-rc.12:
    resolution: {integrity: sha512-VqR8m68vM46BNnuZ5NtnGBKIE/DfN0cRIzg9n40EIq9NOv90ayxLBXA8fXC5gquFRGJSTRqBq25Jt2ECLR431Q==}
    engines: {node: '>= 6'}
    dependencies:
      cheerio-select: 2.1.0
      dom-serializer: 2.0.0
      domhandler: 5.0.3
      domutils: 3.0.1
      htmlparser2: 8.0.1
      parse5: 7.1.1
      parse5-htmlparser2-tree-adapter: 7.0.0
    dev: false

  /chokidar/3.4.3:
    resolution: {integrity: sha512-DtM3g7juCXQxFVSNPNByEC2+NImtBuxQQvWlHunpJIS5Ocr0lG306cC7FCi7cEA0fzmybPUIl4txBIobk1gGOQ==}
    engines: {node: '>= 8.10.0'}
    dependencies:
      anymatch: 3.1.2
      braces: 3.0.2
      glob-parent: 5.1.2
      is-binary-path: 2.1.0
      is-glob: 4.0.3
      normalize-path: 3.0.0
      readdirp: 3.5.0
    optionalDependencies:
      fsevents: 2.1.3
    dev: true

  /chokidar/3.5.3:
    resolution: {integrity: sha512-Dr3sfKRP6oTcjf2JmUmFJfeVMvXBdegxB0iVQ5eb2V10uFJUCAS8OByZdVAyVb8xXNz3GjjTgj9kLWsZTqE6kw==}
    engines: {node: '>= 8.10.0'}
    dependencies:
      anymatch: 3.1.2
      braces: 3.0.2
      glob-parent: 5.1.2
      is-binary-path: 2.1.0
      is-glob: 4.0.3
      normalize-path: 3.0.0
      readdirp: 3.6.0
    optionalDependencies:
      fsevents: 2.3.2

  /chownr/2.0.0:
    resolution: {integrity: sha512-bIomtDF5KGpdogkLd9VspvFzk9KfpyyGlS8YFVZl7TGPBHL5snIOnxeshwVgPteQ9b4Eydl+pVbIyE1DcvCWgQ==}
    engines: {node: '>=10'}
    dev: true

  /chrome-trace-event/1.0.3:
    resolution: {integrity: sha512-p3KULyQg4S7NIHixdwbGX+nFHkoBiA4YQmyWtjb8XngSKV124nJmRysgAeujbUVb15vh+RvFUfCPqU7rXk+hZg==}
    engines: {node: '>=6.0'}

  /ci-info/2.0.0:
    resolution: {integrity: sha512-5tK7EtrZ0N+OLFMthtqOj4fI2Jeb88C4CAZPu25LDVUgXJ0A3Js4PMGqrn0JU1W0Mh1/Z8wZzYPxqUrXeBboCQ==}

  /ci-info/3.4.0:
    resolution: {integrity: sha512-t5QdPT5jq3o262DOQ8zA6E1tlH2upmUc4Hlvrbx1pGYJuiiHl7O7rvVNI+l8HTVhd/q3Qc9vqimkNk5yiXsAug==}
    dev: true

  /cjs-module-lexer/1.2.2:
    resolution: {integrity: sha512-cOU9usZw8/dXIXKtwa8pM0OTJQuJkxMN6w30csNRUerHfeQ5R6U3kkU/FtJeIf3M202OHfY2U8ccInBG7/xogA==}
    dev: true

  /clean-css/5.3.1:
    resolution: {integrity: sha512-lCr8OHhiWCTw4v8POJovCoh4T7I9U11yVsPjMWWnnMmp9ZowCxyad1Pathle/9HjaDp+fdQKjO9fQydE6RHTZg==}
    engines: {node: '>= 10.0'}
    dependencies:
      source-map: 0.6.1

  /clean-stack/2.2.0:
    resolution: {integrity: sha512-4diC9HaTE+KRAMWhDhrGOECgWZxoevMc5TlkObMqNSsVU62PYzXZ/SMTjzyGAFF1YusgxGcSWTEXBhp0CPwQ1A==}
    engines: {node: '>=6'}

  /cli-boxes/2.2.1:
    resolution: {integrity: sha512-y4coMcylgSCdVinjiDBuR8PCC2bLjyGTwEmPb9NHR/QaNU6EUOXcTY/s6VjGMD6ENSEaeQYHCY0GNGS5jfMwPw==}
    engines: {node: '>=6'}

  /cli-boxes/3.0.0:
    resolution: {integrity: sha512-/lzGpEWL/8PfI0BmBOPRwp0c/wFNX1RdUML3jK/RcSBA9T8mZDdQpqYBKtCFTOfQbwPqWEOpjqW+Fnayc0969g==}
    engines: {node: '>=10'}

  /cli-table3/0.6.3:
    resolution: {integrity: sha512-w5Jac5SykAeZJKntOxJCrm63Eg5/4dhMWIcuTbo9rpE+brgaSZo0RuNJZeOyMgsUdhDeojvgyQLmjI+K50ZGyg==}
    engines: {node: 10.* || >= 12.*}
    dependencies:
      string-width: 4.2.3
    optionalDependencies:
      '@colors/colors': 1.5.0

  /cliui/5.0.0:
    resolution: {integrity: sha512-PYeGSEmmHM6zvoef2w8TPzlrnNpXIjTipYK780YswmIP9vjxmd6Y2a3CB2Ks6/AU8NHjZugXvo8w3oWM2qnwXA==}
    dependencies:
      string-width: 3.1.0
      strip-ansi: 5.2.0
      wrap-ansi: 5.1.0
    dev: true

  /clone-deep/4.0.1:
    resolution: {integrity: sha512-neHB9xuzh/wk0dIHweyAXv2aPGZIVk3pLMe+/RNzINf17fe0OG96QroktYAUm7SM1PBnzTabaLboqqxDyMU+SQ==}
    engines: {node: '>=6'}
    dependencies:
      is-plain-object: 2.0.4
      kind-of: 6.0.3
      shallow-clone: 3.0.1

  /clone-response/1.0.3:
    resolution: {integrity: sha512-ROoL94jJH2dUVML2Y/5PEDNaSHgeOdSDicUyS7izcF63G6sTc/FTjLub4b8Il9S8S0beOfYt0TaA5qvFK+w0wA==}
    dependencies:
      mimic-response: 1.0.1

  /clsx/1.2.1:
    resolution: {integrity: sha512-EcR6r5a8bj6pu3ycsa/E/cKVGuTgZJZdsyUYHOksG/UHIiKfjxzRxYJpyVBwYaQeOvghal9fcc4PidlgzugAQg==}
    engines: {node: '>=6'}
    dev: false

  /co/4.6.0:
    resolution: {integrity: sha512-QVb0dM5HvG+uaxitm8wONl7jltx8dqhfU33DcqtOZcLSVIKSDDLDi7+0LbAKiyI8hD9u42m2YxXSkMGWThaecQ==}
    engines: {iojs: '>= 1.0.0', node: '>= 0.12.0'}
    dev: true

  /code-point-at/1.1.0:
    resolution: {integrity: sha512-RpAVKQA5T63xEj6/giIbUEtZwJ4UFIc3ZtvEkiaUERylqe8xb5IvqcgOurZLahv93CLKfxcw5YI+DZcUBRyLXA==}
    engines: {node: '>=0.10.0'}
    dev: true

  /collapse-white-space/1.0.6:
    resolution: {integrity: sha512-jEovNnrhMuqyCcjfEJA56v0Xq8SkIoPKDyaHahwo3POf4qcSXqMYuwNcOTzp74vTsR9Tn08z4MxWqAhcekogkQ==}

  /collect-v8-coverage/1.0.1:
    resolution: {integrity: sha512-iBPtljfCNcTKNAto0KEtDfZ3qzjJvqE3aTGZsbhjSBlorqpXJlaWWtPO35D+ZImoC3KWejX64o+yPGxhWSTzfg==}
    dev: true

  /color-convert/1.9.3:
    resolution: {integrity: sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==}
    dependencies:
      color-name: 1.1.3

  /color-convert/2.0.1:
    resolution: {integrity: sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==}
    engines: {node: '>=7.0.0'}
    dependencies:
      color-name: 1.1.4

  /color-name/1.1.3:
    resolution: {integrity: sha512-72fSenhMw2HZMTVHeCA9KCmpEIbzWiQsjN+BHcBbS9vr1mtt+vJjPdksIBNUmKAW8TFUDPJK5SUU3QhE9NEXDw==}

  /color-name/1.1.4:
    resolution: {integrity: sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==}

  /colord/2.9.3:
    resolution: {integrity: sha512-jeC1axXpnb0/2nn/Y1LPuLdgXBLH7aDcHu4KEKfqw3CUhX7ZpfBSlPKyqXE6btIgEzfWtrX3/tyBCaCvXvMkOw==}

  /colorette/2.0.19:
    resolution: {integrity: sha512-3tlv/dIP7FWvj3BsbHrGLJ6l/oKh1O3TcgBqMn+yyCagOxc23fyzDS6HypQbgxWbkpDnf52p1LuR4eWDQ/K9WQ==}

  /colors/1.2.5:
    resolution: {integrity: sha512-erNRLao/Y3Fv54qUa0LBB+//Uf3YwMUmdJinN20yMXm9zdKKqH9wt7R9IIVZ+K7ShzfpLV/Zg8+VyrBJYB4lpg==}
    engines: {node: '>=0.1.90'}

  /combine-promises/1.1.0:
    resolution: {integrity: sha512-ZI9jvcLDxqwaXEixOhArm3r7ReIivsXkpbyEWyeOhzz1QS0iSgBPnWvEqvIQtYyamGCYA88gFhmUrs9hrrQ0pg==}
    engines: {node: '>=10'}

  /combined-stream/1.0.8:
    resolution: {integrity: sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==}
    engines: {node: '>= 0.8'}
    dependencies:
      delayed-stream: 1.0.0
    dev: true

  /comma-separated-tokens/1.0.8:
    resolution: {integrity: sha512-GHuDRO12Sypu2cV70d1dkA2EUmXHgntrzbpvOB+Qy+49ypNfGgFQIC2fhhXbnyrJRynDCAARsT7Ou0M6hirpfw==}

  /commander/2.20.3:
    resolution: {integrity: sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ==}

  /commander/5.1.0:
    resolution: {integrity: sha512-P0CysNDQ7rtVw4QIQtm+MRxV66vKFSvlsQvGYXZWR3qFU0jlMKHZZZgw8e+8DSah4UDKMqnknRDQz+xuQXQ/Zg==}
    engines: {node: '>= 6'}

  /commander/7.2.0:
    resolution: {integrity: sha512-QrWXB+ZQSVPmIWIhtEO9H+gwHaMGYiF5ChvoJ+K9ZGHG/sVsa6yiesAD1GC/x46sET00Xlwo1u49RVVVzvcSkw==}
    engines: {node: '>= 10'}

  /commander/8.3.0:
    resolution: {integrity: sha512-OkTL9umf+He2DZkUq8f8J9of7yL6RJKI24dVITBmNfZBmri9zYZQrKkuXiKhyfPSu8tUhnVBB1iKXevvnlR4Ww==}
    engines: {node: '>= 12'}

  /commondir/1.0.1:
    resolution: {integrity: sha512-W9pAhw0ja1Edb5GVdIF1mjZw/ASI0AlShXM83UUGe2DVr5TdAPEA1OA8m/g8zWp9x6On7gqufY+FatDbC3MDQg==}

  /compressible/2.0.18:
    resolution: {integrity: sha512-AF3r7P5dWxL8MxyITRMlORQNaOA2IkAFaTr4k7BUumjPtRpGDTZpl0Pb1XCO6JeDCBdp126Cgs9sMxqSjgYyRg==}
    engines: {node: '>= 0.6'}
    dependencies:
      mime-db: 1.52.0

  /compression/1.7.4:
    resolution: {integrity: sha512-jaSIDzP9pZVS4ZfQ+TzvtiWhdpFhE2RDHz8QJkpX9SIpLq88VueF5jJw6t+6CUQcAoA6t+x89MLrWAqpfDE8iQ==}
    engines: {node: '>= 0.8.0'}
    dependencies:
      accepts: 1.3.8
      bytes: 3.0.0
      compressible: 2.0.18
      debug: 2.6.9
      on-headers: 1.0.2
      safe-buffer: 5.1.2
      vary: 1.1.2

  /concat-map/0.0.1:
    resolution: {integrity: sha1-2Klr13/Wjfd5OnMDajug1UBdR3s=}

  /configstore/5.0.1:
    resolution: {integrity: sha512-aMKprgk5YhBNyH25hj8wGt2+D52Sw1DRRIzqBwLp2Ya9mFmY8KPvvtvmna8SxVR9JMZ4kzMD68N22vlaRpkeFA==}
    engines: {node: '>=8'}
    dependencies:
      dot-prop: 5.3.0
      graceful-fs: 4.2.10
      make-dir: 3.1.0
      unique-string: 2.0.0
      write-file-atomic: 3.0.3
      xdg-basedir: 4.0.0

  /connect-history-api-fallback/2.0.0:
    resolution: {integrity: sha512-U73+6lQFmfiNPrYbXqr6kZ1i1wiRqXnp2nhMsINseWXO8lDau0LGEffJ8kQi4EjLZympVgRdvqjAgiZ1tgzDDA==}
    engines: {node: '>=0.8'}

  /consola/2.15.3:
    resolution: {integrity: sha512-9vAdYbHj6x2fLKC4+oPH0kFzY/orMZyG2Aj+kNylHxKGJ/Ed4dpNyAQYwJOdqO4zdM7XpVHmyejQDcQHrnuXbw==}

  /console-control-strings/1.1.0:
    resolution: {integrity: sha512-ty/fTekppD2fIwRvnZAVdeOiGd1c7YXEixbgJTNzqcxJWKQnjJ/V1bNEEE6hygpM3WjwHFUVK6HTjWSzV4a8sQ==}
    dev: true

  /content-disposition/0.5.2:
    resolution: {integrity: sha512-kRGRZw3bLlFISDBgwTSA1TMBFN6J6GWDeubmDE3AF+3+yXL8hTWv8r5rkLbqYXY4RjPk/EzHnClI3zQf1cFmHA==}
    engines: {node: '>= 0.6'}

  /content-disposition/0.5.4:
    resolution: {integrity: sha512-FveZTNuGw04cxlAiWbzi6zTAL/lhehaWbTtgluJh4/E95DqMwTmha3KZN1aAWA8cFIhHzMZUvLevkw5Rqk+tSQ==}
    engines: {node: '>= 0.6'}
    dependencies:
      safe-buffer: 5.2.1

  /content-type/1.0.4:
    resolution: {integrity: sha512-hIP3EEPs8tB9AT1L+NUqtwOAps4mk2Zob89MWXMHjHWg9milF/j4osnnQLXBCBFBk/tvIG/tUc9mOUJiPBhPXA==}
    engines: {node: '>= 0.6'}

  /convert-source-map/1.8.0:
    resolution: {integrity: sha512-+OQdjP49zViI/6i7nIJpA8rAl4sV/JdPfU9nZs3VqOwGIgizICvuN2ru6fMd+4llL0tar18UYJXfZ/TWtmhUjA==}
    dependencies:
      safe-buffer: 5.1.2

  /cookie-signature/1.0.6:
    resolution: {integrity: sha1-4wOogrNCzD7oylE6eZmXNNqzriw=}

  /cookie/0.5.0:
    resolution: {integrity: sha512-YZ3GUyn/o8gfKJlnlX7g7xq4gyO6OSuhGPKaaGssGB2qgDUS0gPgtTvoyZLTt9Ab6dC4hfc9dV5arkvc/OCmrw==}
    engines: {node: '>= 0.6'}

  /copy-text-to-clipboard/3.0.1:
    resolution: {integrity: sha512-rvVsHrpFcL4F2P8ihsoLdFHmd404+CMg71S756oRSeQgqk51U3kicGdnvfkrxva0xXH92SjGS62B0XIJsbh+9Q==}
    engines: {node: '>=12'}
    dev: false

  /copy-webpack-plugin/11.0.0_webpack@5.74.0:
    resolution: {integrity: sha512-fX2MWpamkW0hZxMEg0+mYnA40LTosOSa5TqZ9GYIBzyJa9C3QUaMPSE2xAi/buNr8u89SfD9wHSQVBzrRa/SOQ==}
    engines: {node: '>= 14.15.0'}
    peerDependencies:
      webpack: ^5.1.0
    dependencies:
      fast-glob: 3.2.12
      glob-parent: 6.0.2
      globby: 13.1.2
      normalize-path: 3.0.0
      schema-utils: 4.0.0
      serialize-javascript: 6.0.0
      webpack: 5.74.0

  /core-js-compat/3.25.1:
    resolution: {integrity: sha512-pOHS7O0i8Qt4zlPW/eIFjwp+NrTPx+wTL0ctgI2fHn31sZOq89rDsmtc/A2vAX7r6shl+bmVI+678He46jgBlw==}
    dependencies:
      browserslist: 4.21.4

  /core-js-pure/3.25.1:
    resolution: {integrity: sha512-7Fr74bliUDdeJCBMxkkIuQ4xfxn/SwrVg+HkJUAoNEXVqYLv55l6Af0dJ5Lq2YBUW9yKqSkLXaS5SYPK6MGa/A==}
    requiresBuild: true

  /core-js/3.25.1:
    resolution: {integrity: sha512-sr0FY4lnO1hkQ4gLDr24K0DGnweGO1QwSj5BpfQjpSJPdqWalja4cTps29Y/PJVG/P7FYlPDkH3hO+Tr0CvDgQ==}
    requiresBuild: true

  /core-util-is/1.0.2:
    resolution: {integrity: sha512-3lqz5YjWTYnW6dlDa5TLaTCcShfar1e40rmcJVwCBJC6mWlFuj0eCHIElmG1g5kyuJ/GD+8Wn4FFCcz4gJPfaQ==}
    dev: true

  /core-util-is/1.0.3:
    resolution: {integrity: sha512-ZQBvi1DcpJ4GDqanjucZ2Hj3wEO5pZDS89BWbkcrvdxksJorwUDDZamX9ldFkp9aw2lmBDLgkObEA4DWNJ9FYQ==}

  /cosmiconfig/6.0.0:
    resolution: {integrity: sha512-xb3ZL6+L8b9JLLCx3ZdoZy4+2ECphCMo2PwqgP1tlfVq6M6YReyzBJtvWWtbDSpNr9hn96pkCiZqUcFEc+54Qg==}
    engines: {node: '>=8'}
    dependencies:
      '@types/parse-json': 4.0.0
      import-fresh: 3.3.0
      parse-json: 5.2.0
      path-type: 4.0.0
      yaml: 1.10.2

  /cosmiconfig/7.0.1:
    resolution: {integrity: sha512-a1YWNUV2HwGimB7dU2s1wUMurNKjpx60HxBB6xUM8Re+2s1g1IIfJvFR0/iCF+XHdE0GMTKTuLR32UQff4TEyQ==}
    engines: {node: '>=10'}
    dependencies:
      '@types/parse-json': 4.0.0
      import-fresh: 3.3.0
      parse-json: 5.2.0
      path-type: 4.0.0
      yaml: 1.10.2

  /cross-fetch/3.1.5:
    resolution: {integrity: sha512-lvb1SBsI0Z7GDwmuid+mU3kWVBwTVUbe7S0H52yaaAdQOXq2YktTCZdlAcNKFzE6QtRz0snpw9bNiPeOIkkQvw==}
    dependencies:
      node-fetch: 2.6.7
    transitivePeerDependencies:
      - encoding
    dev: false

  /cross-spawn/7.0.3:
    resolution: {integrity: sha512-iRDPJKUPVEND7dHPO8rkbOnPpyDygcDFtWjpeWNCgy8WP2rXcxXL8TskReQl6OrB2G7+UJrags1q15Fudc7G6w==}
    engines: {node: '>= 8'}
    dependencies:
      path-key: 3.1.1
      shebang-command: 2.0.0
      which: 2.0.2

  /crypto-random-string/2.0.0:
    resolution: {integrity: sha512-v1plID3y9r/lPhviJ1wrXpLeyUIGAZ2SHNYTEapm7/8A9nLPoyvVp3RK/EPFqn5kEznyWgYZNsRtYYIWbuG8KA==}
    engines: {node: '>=8'}

  /css-declaration-sorter/6.3.1_postcss@8.4.16:
    resolution: {integrity: sha512-fBffmak0bPAnyqc/HO8C3n2sHrp9wcqQz6ES9koRF2/mLOVAx9zIQ3Y7R29sYCteTPqMCwns4WYQoCX91Xl3+w==}
    engines: {node: ^10 || ^12 || >=14}
    peerDependencies:
      postcss: ^8.0.9
    dependencies:
      postcss: 8.4.16

  /css-loader/6.6.0_webpack@5.68.0:
    resolution: {integrity: sha512-FK7H2lisOixPT406s5gZM1S3l8GrfhEBT3ZiL2UX1Ng1XWs0y2GPllz/OTyvbaHe12VgQrIXIzuEGVlbUhodqg==}
    engines: {node: '>= 12.13.0'}
    peerDependencies:
      webpack: ^5.0.0
    dependencies:
      icss-utils: 5.1.0_postcss@8.4.16
      postcss: 8.4.16
      postcss-modules-extract-imports: 3.0.0_postcss@8.4.16
      postcss-modules-local-by-default: 4.0.0_postcss@8.4.16
      postcss-modules-scope: 3.0.0_postcss@8.4.16
      postcss-modules-values: 4.0.0_postcss@8.4.16
      postcss-value-parser: 4.2.0
      semver: 7.3.7
      webpack: 5.68.0
    dev: true

  /css-loader/6.7.1_webpack@5.74.0:
    resolution: {integrity: sha512-yB5CNFa14MbPJcomwNh3wLThtkZgcNyI2bNMRt8iE5Z8Vwl7f8vQXFAzn2HDOJvtDq2NTZBUGMSUNNyrv3/+cw==}
    engines: {node: '>= 12.13.0'}
    peerDependencies:
      webpack: ^5.0.0
    dependencies:
      icss-utils: 5.1.0_postcss@8.4.16
      postcss: 8.4.16
      postcss-modules-extract-imports: 3.0.0_postcss@8.4.16
      postcss-modules-local-by-default: 4.0.0_postcss@8.4.16
      postcss-modules-scope: 3.0.0_postcss@8.4.16
      postcss-modules-values: 4.0.0_postcss@8.4.16
      postcss-value-parser: 4.2.0
      semver: 7.3.7
      webpack: 5.74.0

  /css-minimizer-webpack-plugin/3.4.1_webpack@5.68.0:
    resolution: {integrity: sha512-1u6D71zeIfgngN2XNRJefc/hY7Ybsxd74Jm4qngIXyUEk7fss3VUzuHxLAq/R8NAba4QU9OUSaMZlbpRc7bM4Q==}
    engines: {node: '>= 12.13.0'}
    peerDependencies:
      '@parcel/css': '*'
      clean-css: '*'
      csso: '*'
      esbuild: '*'
      webpack: ^5.0.0
    peerDependenciesMeta:
      '@parcel/css':
        optional: true
      clean-css:
        optional: true
      csso:
        optional: true
      esbuild:
        optional: true
    dependencies:
      cssnano: 5.1.13_postcss@8.4.16
      jest-worker: 27.5.1
      postcss: 8.4.16
      schema-utils: 4.0.0
      serialize-javascript: 6.0.0
      source-map: 0.6.1
      webpack: 5.68.0
    dev: true

  /css-minimizer-webpack-plugin/4.1.0_clean-css@5.3.1+webpack@5.74.0:
    resolution: {integrity: sha512-Zd+yz4nta4GXi3pMqF6skO8kjzuCUbr62z8SLMGZZtxWxTGTLopOiabPGNDEyjHCRhnhdA1EfHmqLa2Oekjtng==}
    engines: {node: '>= 14.15.0'}
    peerDependencies:
      '@parcel/css': '*'
      clean-css: '*'
      csso: '*'
      esbuild: '*'
      lightningcss: '*'
      webpack: ^5.0.0
    peerDependenciesMeta:
      '@parcel/css':
        optional: true
      clean-css:
        optional: true
      csso:
        optional: true
      esbuild:
        optional: true
      lightningcss:
        optional: true
    dependencies:
      clean-css: 5.3.1
      cssnano: 5.1.13_postcss@8.4.16
      jest-worker: 27.5.1
      postcss: 8.4.16
      schema-utils: 4.0.0
      serialize-javascript: 6.0.0
      source-map: 0.6.1
      webpack: 5.74.0

  /css-modules-loader-core/1.1.0:
    resolution: {integrity: sha512-XWOBwgy5nwBn76aA+6ybUGL/3JBnCtBX9Ay9/OWIpzKYWlVHMazvJ+WtHumfi+xxdPF440cWK7JCYtt8xDifew==}
    dependencies:
      icss-replace-symbols: 1.1.0
      postcss: 6.0.1
      postcss-modules-extract-imports: 1.1.0
      postcss-modules-local-by-default: 1.2.0
      postcss-modules-scope: 1.1.0
      postcss-modules-values: 1.3.0
    dev: true

  /css-select/4.3.0:
    resolution: {integrity: sha512-wPpOYtnsVontu2mODhA19JrqWxNsfdatRKd64kmpRbQgh1KtItko5sTnEpPdpSaJszTOhEMlF/RPz28qj4HqhQ==}
    dependencies:
      boolbase: 1.0.0
      css-what: 6.1.0
      domhandler: 4.3.1
      domutils: 2.8.0
      nth-check: 2.1.1

  /css-select/5.1.0:
    resolution: {integrity: sha512-nwoRF1rvRRnnCqqY7updORDsuqKzqYJ28+oSMaJMMgOauh3fvwHqMS7EZpIPqK8GL+g9mKxF1vP/ZjSeNjEVHg==}
    dependencies:
      boolbase: 1.0.0
      css-what: 6.1.0
      domhandler: 5.0.3
      domutils: 3.0.1
      nth-check: 2.1.1
    dev: false

  /css-selector-tokenizer/0.7.3:
    resolution: {integrity: sha512-jWQv3oCEL5kMErj4wRnK/OPoBi0D+P1FR2cDCKYPaMeD2eW3/mttav8HT4hT1CKopiJI/psEULjkClhvJo4Lvg==}
    dependencies:
      cssesc: 3.0.0
      fastparse: 1.1.2
    dev: true

  /css-tree/1.1.3:
    resolution: {integrity: sha512-tRpdppF7TRazZrjJ6v3stzv93qxRcSsFmW6cX0Zm2NVKpxE1WV1HblnghVv9TreireHkqI/VDEsfolRF1p6y7Q==}
    engines: {node: '>=8.0.0'}
    dependencies:
      mdn-data: 2.0.14
      source-map: 0.6.1

  /css-what/6.1.0:
    resolution: {integrity: sha512-HTUrgRJ7r4dsZKU6GjmpfRK1O76h97Z8MfS1G0FozR+oF2kG6Vfe8JE6zwrkbxigziPHinCJ+gCPjA9EaBDtRw==}
    engines: {node: '>= 6'}

  /cssesc/3.0.0:
    resolution: {integrity: sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==}
    engines: {node: '>=4'}
    hasBin: true

  /cssnano-preset-advanced/5.3.8_postcss@8.4.16:
    resolution: {integrity: sha512-xUlLLnEB1LjpEik+zgRNlk8Y/koBPPtONZjp7JKbXigeAmCrFvq9H0pXW5jJV45bQWAlmJ0sKy+IMr0XxLYQZg==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      autoprefixer: 10.4.11_postcss@8.4.16
      cssnano-preset-default: 5.2.12_postcss@8.4.16
      postcss: 8.4.16
      postcss-discard-unused: 5.1.0_postcss@8.4.16
      postcss-merge-idents: 5.1.1_postcss@8.4.16
      postcss-reduce-idents: 5.2.0_postcss@8.4.16
      postcss-zindex: 5.1.0_postcss@8.4.16

  /cssnano-preset-default/5.2.12_postcss@8.4.16:
    resolution: {integrity: sha512-OyCBTZi+PXgylz9HAA5kHyoYhfGcYdwFmyaJzWnzxuGRtnMw/kR6ilW9XzlzlRAtB6PLT/r+prYgkef7hngFew==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      css-declaration-sorter: 6.3.1_postcss@8.4.16
      cssnano-utils: 3.1.0_postcss@8.4.16
      postcss: 8.4.16
      postcss-calc: 8.2.4_postcss@8.4.16
      postcss-colormin: 5.3.0_postcss@8.4.16
      postcss-convert-values: 5.1.2_postcss@8.4.16
      postcss-discard-comments: 5.1.2_postcss@8.4.16
      postcss-discard-duplicates: 5.1.0_postcss@8.4.16
      postcss-discard-empty: 5.1.1_postcss@8.4.16
      postcss-discard-overridden: 5.1.0_postcss@8.4.16
      postcss-merge-longhand: 5.1.6_postcss@8.4.16
      postcss-merge-rules: 5.1.2_postcss@8.4.16
      postcss-minify-font-values: 5.1.0_postcss@8.4.16
      postcss-minify-gradients: 5.1.1_postcss@8.4.16
      postcss-minify-params: 5.1.3_postcss@8.4.16
      postcss-minify-selectors: 5.2.1_postcss@8.4.16
      postcss-normalize-charset: 5.1.0_postcss@8.4.16
      postcss-normalize-display-values: 5.1.0_postcss@8.4.16
      postcss-normalize-positions: 5.1.1_postcss@8.4.16
      postcss-normalize-repeat-style: 5.1.1_postcss@8.4.16
      postcss-normalize-string: 5.1.0_postcss@8.4.16
      postcss-normalize-timing-functions: 5.1.0_postcss@8.4.16
      postcss-normalize-unicode: 5.1.0_postcss@8.4.16
      postcss-normalize-url: 5.1.0_postcss@8.4.16
      postcss-normalize-whitespace: 5.1.1_postcss@8.4.16
      postcss-ordered-values: 5.1.3_postcss@8.4.16
      postcss-reduce-initial: 5.1.0_postcss@8.4.16
      postcss-reduce-transforms: 5.1.0_postcss@8.4.16
      postcss-svgo: 5.1.0_postcss@8.4.16
      postcss-unique-selectors: 5.1.1_postcss@8.4.16

  /cssnano-utils/3.1.0_postcss@8.4.16:
    resolution: {integrity: sha512-JQNR19/YZhz4psLX/rQ9M83e3z2Wf/HdJbryzte4a3NSuafyp9w/I4U+hx5C2S9g41qlstH7DEWnZaaj83OuEA==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.16

  /cssnano/5.1.13_postcss@8.4.16:
    resolution: {integrity: sha512-S2SL2ekdEz6w6a2epXn4CmMKU4K3KpcyXLKfAYc9UQQqJRkD/2eLUG0vJ3Db/9OvO5GuAdgXw3pFbR6abqghDQ==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      cssnano-preset-default: 5.2.12_postcss@8.4.16
      lilconfig: 2.0.6
      postcss: 8.4.16
      yaml: 1.10.2

  /csso/4.2.0:
    resolution: {integrity: sha512-wvlcdIbf6pwKEk7vHj8/Bkc0B4ylXZruLvOgs9doS5eOsOpuodOV2zJChSpkp+pRpYQLQMeF04nr3Z68Sta9jA==}
    engines: {node: '>=8.0.0'}
    dependencies:
      css-tree: 1.1.3

  /cssom/0.3.8:
    resolution: {integrity: sha512-b0tGHbfegbhPJpxpiBPU2sCkigAqtM9O121le6bbOlgyV+NyGyCmVfJ6QW9eRjz8CpNfWEOYBIMIGRYkLwsIYg==}
    dev: true

  /cssom/0.4.4:
    resolution: {integrity: sha512-p3pvU7r1MyyqbTk+WbNJIgJjG2VmTIaB10rI93LzVPrmDJKkzKYMtxxyAvQXR/NS6otuzveI7+7BBq3SjBS2mw==}
    dev: true

  /cssstyle/2.3.0:
    resolution: {integrity: sha512-AZL67abkUzIuvcHqk7c09cezpGNcxUxU4Ioi/05xHk4DQeTkWmGYftIE6ctU6AEt+Gn4n1lDStOtj7FKycP71A==}
    engines: {node: '>=8'}
    dependencies:
      cssom: 0.3.8
    dev: true

  /csstype/3.1.1:
    resolution: {integrity: sha512-DJR/VvkAvSZW9bTouZue2sSxDwdTN92uHjqeKVm+0dAqdfNykRzQ95tay8aXMBAAPpUiq4Qcug2L7neoRh2Egw==}

  /dashdash/1.14.1:
    resolution: {integrity: sha512-jRFi8UDGo6j+odZiEpjazZaWqEal3w/basFjQHQEwVtZJGDpxbH1MeYluwCS8Xq5wmLJooDlMgvVarmWfGM44g==}
    engines: {node: '>=0.10'}
    dependencies:
      assert-plus: 1.0.0
    dev: true

  /data-urls/2.0.0:
    resolution: {integrity: sha512-X5eWTSXO/BJmpdIKCRuKUgSCgAN0OwliVK3yPKbwIWU1Tdw5BRajxlzMidvh+gwko9AfQ9zIj52pzF91Q3YAvQ==}
    engines: {node: '>=10'}
    dependencies:
      abab: 2.0.6
      whatwg-mimetype: 2.3.0
      whatwg-url: 8.7.0
    dev: true

  /dayjs/1.11.5:
    resolution: {integrity: sha512-CAdX5Q3YW3Gclyo5Vpqkgpj8fSdLQcRuzfX6mC6Phy0nfJ0eGYOeS7m4mt2plDWLAtA4TqTakvbboHvUxfe4iA==}
    dev: false

  /debug/2.6.9:
    resolution: {integrity: sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==}
    dependencies:
      ms: 2.0.0

  /debug/4.3.4:
    resolution: {integrity: sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==}
    engines: {node: '>=6.0'}
    peerDependencies:
      supports-color: '*'
    peerDependenciesMeta:
      supports-color:
        optional: true
    dependencies:
      ms: 2.1.2

  /decamelize-keys/1.1.0:
    resolution: {integrity: sha512-ocLWuYzRPoS9bfiSdDd3cxvrzovVMZnRDVEzAs+hWIVXGDbHxWMECij2OBuyB/An0FFW/nLuq6Kv1i/YC5Qfzg==}
    engines: {node: '>=0.10.0'}
    dependencies:
      decamelize: 1.2.0
      map-obj: 1.0.1
    dev: true

  /decamelize/1.2.0:
    resolution: {integrity: sha512-z2S+W9X73hAUUki+N+9Za2lBlun89zigOyGrsax+KUQ6wKW4ZoWpEYBkGhQjwAjjDCkWxhY0VKEhk8wzY7F5cA==}
    engines: {node: '>=0.10.0'}
    dev: true

  /decimal.js/10.4.0:
    resolution: {integrity: sha512-Nv6ENEzyPQ6AItkGwLE2PGKinZZ9g59vSh2BeH6NqPu0OTKZ5ruJsVqh/orbAnqXc9pBbgXAIrc2EyaCj8NpGg==}
    dev: true

  /decompress-response/3.3.0:
    resolution: {integrity: sha512-BzRPQuY1ip+qDonAOz42gRm/pg9F768C+npV/4JOsxRC2sq+Rlk+Q4ZCAsOhnIaMrgarILY+RMUIvMmmX1qAEA==}
    engines: {node: '>=4'}
    dependencies:
      mimic-response: 1.0.1

  /dedent/0.7.0:
    resolution: {integrity: sha512-Q6fKUPqnAHAyhiUgFU7BUzLiv0kd8saH9al7tnu5Q/okj6dnupxyTgFIBjVzJATdfIAm9NAsvXNzjaKa+bxVyA==}
    dev: true

  /deep-extend/0.6.0:
    resolution: {integrity: sha512-LOHxIOaPYdHlJRtCQfDIVZtfw/ufM8+rVj649RIHzcm/vGwQRXFt6OPqIFWsm2XEMrNIEtWR64sY1LEKD2vAOA==}
    engines: {node: '>=4.0.0'}

  /deep-is/0.1.4:
    resolution: {integrity: sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==}
    dev: true

  /deepmerge/4.2.2:
    resolution: {integrity: sha512-FJ3UgI4gIl+PHZm53knsuSFpE+nESMr7M4v9QcgB7S63Kj/6WqMiFQJpBBYz1Pt+66bZpP3Q7Lye0Oo9MPKEdg==}
    engines: {node: '>=0.10.0'}

  /default-gateway/6.0.3:
    resolution: {integrity: sha512-fwSOJsbbNzZ/CUFpqFBqYfYNLj1NbMPm8MMCIzHjC83iSJRBEGmDUxU+WP661BaBQImeC2yHwXtz+P/O9o+XEg==}
    engines: {node: '>= 10'}
    dependencies:
      execa: 5.1.1

  /defer-to-connect/1.1.3:
    resolution: {integrity: sha512-0ISdNousHvZT2EiFlZeZAHBUvSxmKswVCEf8hW7KWgG4a8MVEu/3Vb6uWYozkjylyCxe0JBIiRB1jV45S70WVQ==}

  /define-lazy-prop/2.0.0:
    resolution: {integrity: sha512-Ds09qNh8yw3khSjiJjiUInaGX9xlqZDY7JVryGxdxV7NPeuqQfplOpQ66yJFZut3jLa5zOwkXw1g9EI2uKh4Og==}
    engines: {node: '>=8'}

  /define-properties/1.1.4:
    resolution: {integrity: sha512-uckOqKcfaVvtBdsVkdPv3XjveQJsNQqmhXgRi8uhvWWuPYZCNlzT8qAyblUgNoXdHdjMTzAqeGjAoli8f+bzPA==}
    engines: {node: '>= 0.4'}
    dependencies:
      has-property-descriptors: 1.0.0
      object-keys: 1.1.1

  /del/6.1.1:
    resolution: {integrity: sha512-ua8BhapfP0JUJKC/zV9yHHDW/rDoDxP4Zhn3AkA6/xT6gY7jYXJiaeyBZznYVujhZZET+UgcbZiQ7sN3WqcImg==}
    engines: {node: '>=10'}
    dependencies:
      globby: 11.1.0
      graceful-fs: 4.2.10
      is-glob: 4.0.3
      is-path-cwd: 2.2.0
      is-path-inside: 3.0.3
      p-map: 4.0.0
      rimraf: 3.0.2
      slash: 3.0.0

  /delayed-stream/1.0.0:
    resolution: {integrity: sha512-ZySD7Nf91aLB0RxL4KGrKHBXl7Eds1DAmEdcoVawXnLD7SDhpNgtuII2aAkg7a7QS41jxPSZ17p4VdGnMHk3MQ==}
    engines: {node: '>=0.4.0'}
    dev: true

  /delegates/1.0.0:
    resolution: {integrity: sha512-bd2L678uiWATM6m5Z1VzNCErI3jiGzt6HGY8OVICs40JQq/HALfbyNJmp0UDakEY4pMMaN0Ly5om/B1VI/+xfQ==}
    dev: true

  /depd/1.1.2:
    resolution: {integrity: sha512-7emPTl6Dpo6JRXOXjLRxck+FlLRX5847cLKEn00PLAgc3g2hTZZgr+e4c2v6QpSmLeFP3n5yUo7ft6avBK/5jQ==}
    engines: {node: '>= 0.6'}

  /depd/2.0.0:
    resolution: {integrity: sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==}
    engines: {node: '>= 0.8'}

  /destroy/1.2.0:
    resolution: {integrity: sha512-2sJGJTaXIIaR1w4iJSNoN0hnMY7Gpc/n8D4qSCJw8QqFWXf7cuAgnEHxBpweaVcPevC2l3KpjYCx3NypQQgaJg==}
    engines: {node: '>= 0.8', npm: 1.2.8000 || >= 1.4.16}

  /detab/2.0.4:
    resolution: {integrity: sha512-8zdsQA5bIkoRECvCrNKPla84lyoR7DSAyf7p0YgXzBO9PDJx8KntPUay7NS6yp+KdxdVtiE5SpHKtbp2ZQyA9g==}
    dependencies:
      repeat-string: 1.6.1

  /detect-newline/3.1.0:
    resolution: {integrity: sha512-TLz+x/vEXm/Y7P7wn1EJFNLxYpUD4TgMosxY6fAVJUnJMbupHBOncxyWUG9OpTaH9EBD7uFI5LfEgmMOc54DsA==}
    engines: {node: '>=8'}
    dev: true

  /detect-node/2.1.0:
    resolution: {integrity: sha512-T0NIuQpnTvFDATNuHN5roPwSBG83rFsuO+MXXH9/3N1eFbn4wcPjttvjMLEPWJ0RGUYgQE7cGgS3tNxbqCGM7g==}

  /detect-port-alt/1.1.6:
    resolution: {integrity: sha512-5tQykt+LqfJFBEYaDITx7S7cR7mJ/zQmLXZ2qt5w04ainYZw6tBf9dBunMjVeVOdYVRUzUOE4HkY5J7+uttb5Q==}
    engines: {node: '>= 4.2.1'}
    hasBin: true
    dependencies:
      address: 1.2.1
      debug: 2.6.9

  /detect-port/1.3.0:
    resolution: {integrity: sha512-E+B1gzkl2gqxt1IhUzwjrxBKRqx1UzC3WLONHinn8S3T6lwV/agVCyitiFOsGJ/eYuEUBvD71MZHy3Pv1G9doQ==}
    engines: {node: '>= 4.2.1'}
    hasBin: true
    dependencies:
      address: 1.2.1
      debug: 2.6.9

  /diff-sequences/27.5.1:
    resolution: {integrity: sha512-k1gCAXAsNgLwEL+Y8Wvl+M6oEFj5bgazfZULpS5CneoPPXRaCCW7dm+q21Ky2VEE5X+VeRDBVg1Pcvvsr4TtNQ==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dev: true

  /diff-sequences/29.0.0:
    resolution: {integrity: sha512-7Qe/zd1wxSDL4D/X/FPjOMB+ZMDt71W94KYaq05I2l0oQqgXgs7s4ftYYmV38gBSrPz2vcygxfs1xn0FT+rKNA==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    dev: true

  /dir-glob/3.0.1:
    resolution: {integrity: sha512-WkrWp9GR4KXfKGYzOLmTuGVi1UWFfws377n9cc55/tb6DuqyF6pcQ5AbiHEshaDpY9v6oaSr2XCDidGmMwdzIA==}
    engines: {node: '>=8'}
    dependencies:
      path-type: 4.0.0

  /dns-equal/1.0.0:
    resolution: {integrity: sha512-z+paD6YUQsk+AbGCEM4PrOXSss5gd66QfcVBFTKR/HpFL9jCqikS94HYwKww6fQyO7IxrIIyUu+g0Ka9tUS2Cg==}

  /dns-packet/5.4.0:
    resolution: {integrity: sha512-EgqGeaBB8hLiHLZtp/IbaDQTL8pZ0+IvwzSHA6d7VyMDM+B9hgddEMa9xjK5oYnw0ci0JQ6g2XCD7/f6cafU6g==}
    engines: {node: '>=6'}
    dependencies:
      '@leichtgewicht/ip-codec': 2.0.4

  /doctrine/2.1.0:
    resolution: {integrity: sha512-35mSku4ZXK0vfCuHEDAwt55dg2jNajHZ1odvF+8SSr82EsZY4QmXfuWso8oEd8zRhVObSN18aM0CjSdoBX7zIw==}
    engines: {node: '>=0.10.0'}
    dependencies:
      esutils: 2.0.3
    dev: true

  /doctrine/3.0.0:
    resolution: {integrity: sha512-yS+Q5i3hBf7GBkd4KG8a7eBNNWNGLTaEwwYWUijIYM7zrlYDM0BFXHjjPWlWZ1Rg7UaddZeIDmi9jF3HmqiQ2w==}
    engines: {node: '>=6.0.0'}
    dependencies:
      esutils: 2.0.3
    dev: true

  /docusaurus-theme-search-typesense/0.5.3_a497cd86c622cab23fc44f1544f76cd7:
    resolution: {integrity: sha512-LjbUTjyFziFwrQH7l7Jn/7d+11wIr+b3t1NrQwHXQnjMuRhUFxxQgzUx4S+HH6ySoPYLEy/IUjO2c5dj1USYJg==}
    engines: {node: '>=16.14'}
    peerDependencies:
      '@docusaurus/core': 2.0.1
      '@docusaurus/theme-common': 2.0.1
      react: ^16.8.4 || ^17.0.0
      react-dom: ^16.8.4 || ^17.0.0
    dependencies:
      '@docusaurus/core': 2.0.1_dccc44159aab2d15be0b73def9353315
      '@docusaurus/logger': 2.0.0-rc.1
      '@docusaurus/plugin-content-docs': 2.0.0-rc.1_dccc44159aab2d15be0b73def9353315
      '@docusaurus/theme-common': 2.0.1_dccc44159aab2d15be0b73def9353315
      '@docusaurus/theme-translations': 2.0.0-rc.1
      '@docusaurus/utils': 2.0.1
      '@docusaurus/utils-validation': 2.0.1
      algoliasearch-helper: 3.11.1_algoliasearch@4.14.2
      clsx: 1.2.1
      eta: 1.12.3
      fs-extra: 10.1.0
      lodash: 4.17.21
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
      tslib: 2.4.0
      typesense-docsearch-react: 0.2.3_32250b37d44278fed90b18adb1b20f49
      typesense-instantsearch-adapter: 2.4.2-1_@babel+runtime@7.17.9
      utility-types: 3.10.0
    transitivePeerDependencies:
      - '@algolia/client-search'
      - '@babel/runtime'
      - '@docusaurus/types'
      - '@parcel/css'
      - '@swc/core'
      - '@types/react'
      - algoliasearch
      - bufferutil
      - csso
      - debug
      - esbuild
      - eslint
      - lightningcss
      - supports-color
      - typescript
      - uglify-js
      - utf-8-validate
      - vue-template-compiler
      - webpack-cli
    dev: false

  /dom-converter/0.2.0:
    resolution: {integrity: sha512-gd3ypIPfOMr9h5jIKq8E3sHOTCjeirnl0WK5ZdS1AW0Odt0b1PaWaHdJ4Qk4klv+YB9aJBS7mESXjFoDQPu6DA==}
    dependencies:
      utila: 0.4.0

  /dom-serializer/1.4.1:
    resolution: {integrity: sha512-VHwB3KfrcOOkelEG2ZOfxqLZdfkil8PtJi4P8N2MMXucZq2yLp75ClViUlOVwyoHEDjYU433Aq+5zWP61+RGag==}
    dependencies:
      domelementtype: 2.3.0
      domhandler: 4.3.1
      entities: 2.2.0

  /dom-serializer/2.0.0:
    resolution: {integrity: sha512-wIkAryiqt/nV5EQKqQpo3SToSOV9J0DnbJqwK7Wv/Trc92zIAYZ4FlMu+JPFW1DfGFt81ZTCGgDEabffXeLyJg==}
    dependencies:
      domelementtype: 2.3.0
      domhandler: 5.0.3
      entities: 4.4.0
    dev: false

  /domelementtype/2.3.0:
    resolution: {integrity: sha512-OLETBj6w0OsagBwdXnPdN0cnMfF9opN69co+7ZrbfPGrdpPVNBUj02spi6B1N7wChLQiPn4CSH/zJvXw56gmHw==}

  /domexception/2.0.1:
    resolution: {integrity: sha512-yxJ2mFy/sibVQlu5qHjOkf9J3K6zgmCxgJ94u2EdvDOV09H+32LtRswEcUsmUWN72pVLOEnTSRaIVVzVQgS0dg==}
    engines: {node: '>=8'}
    dependencies:
      webidl-conversions: 5.0.0
    dev: true

  /domhandler/4.3.1:
    resolution: {integrity: sha512-GrwoxYN+uWlzO8uhUXRl0P+kHE4GtVPfYzVLcUxPL7KNdHKj66vvlhiweIHqYYXWlw+T8iLMp42Lm67ghw4WMQ==}
    engines: {node: '>= 4'}
    dependencies:
      domelementtype: 2.3.0

  /domhandler/5.0.3:
    resolution: {integrity: sha512-cgwlv/1iFQiFnU96XXgROh8xTeetsnJiDsTc7TYCLFd9+/WNkIqPTxiM/8pSd8VIrhXGTf1Ny1q1hquVqDJB5w==}
    engines: {node: '>= 4'}
    dependencies:
      domelementtype: 2.3.0
    dev: false

  /domutils/2.8.0:
    resolution: {integrity: sha512-w96Cjofp72M5IIhpjgobBimYEfoPjx1Vx0BSX9P30WBdZW2WIKU0T1Bd0kz2eNZ9ikjKgHbEyKx8BB6H1L3h3A==}
    dependencies:
      dom-serializer: 1.4.1
      domelementtype: 2.3.0
      domhandler: 4.3.1

  /domutils/3.0.1:
    resolution: {integrity: sha512-z08c1l761iKhDFtfXO04C7kTdPBLi41zwOZl00WS8b5eiaebNpY00HKbztwBq+e3vyqWNwWF3mP9YLUeqIrF+Q==}
    dependencies:
      dom-serializer: 2.0.0
      domelementtype: 2.3.0
      domhandler: 5.0.3
    dev: false

  /dot-case/3.0.4:
    resolution: {integrity: sha512-Kv5nKlh6yRrdrGvxeJ2e5y2eRUpkUosIW4A2AS38zwSz27zu7ufDwQPi5Jhs3XAlGNetl3bmnGhQsMtkKJnj3w==}
    dependencies:
      no-case: 3.0.4
      tslib: 2.4.0

  /dot-prop/5.3.0:
    resolution: {integrity: sha512-QM8q3zDe58hqUqjraQOmzZ1LIH9SWQJTlEKCH4kJ2oQvLZk7RbQXvtDM2XEq3fwkV9CCvvH4LA0AV+ogFsBM2Q==}
    engines: {node: '>=8'}
    dependencies:
      is-obj: 2.0.0

  /duplexer/0.1.2:
    resolution: {integrity: sha512-jtD6YG370ZCIi/9GTaJKQxWTZD045+4R4hTk/x1UyoqadyJ9x9CgSi1RlVDQF8U2sxLLSnFkCaMihqljHIWgMg==}

  /duplexer3/0.1.5:
    resolution: {integrity: sha512-1A8za6ws41LQgv9HrE/66jyC5yuSjQ3L/KOpFtoBilsAK2iA2wuS5rTt1OCzIvtS2V7nVmedsUU+DGRcjBmOYA==}

  /eastasianwidth/0.2.0:
    resolution: {integrity: sha512-I88TYZWc9XiYHRQ4/3c5rjjfgkjhLyW2luGIheGERbNQ6OY7yTybanSpDXZa8y7VUP9YmDcYa+eyq4ca7iLqWA==}

  /ecc-jsbn/0.1.2:
    resolution: {integrity: sha512-eh9O+hwRHNbG4BLTjEl3nw044CkGm5X6LoaCf7LPp7UU8Qrt47JYNi6nPX8xjW97TKGKm1ouctg0QSpZe9qrnw==}
    dependencies:
      jsbn: 0.1.1
      safer-buffer: 2.1.2
    dev: true

  /ee-first/1.1.1:
    resolution: {integrity: sha1-WQxhFWsK4vTwJVcyoViyZrxWsh0=}

  /electron-to-chromium/1.4.251:
    resolution: {integrity: sha512-k4o4cFrWPv4SoJGGAydd07GmlRVzmeDIJ6MaEChTUjk4Dmomn189tCicSzil2oyvbPoGgg2suwPDNWq4gWRhoQ==}

  /emittery/0.8.1:
    resolution: {integrity: sha512-uDfvUjVrfGJJhymx/kz6prltenw1u7WrCg1oa94zYY8xxVpLLUu045LAT0dhDZdXG58/EpPL/5kA180fQ/qudg==}
    engines: {node: '>=10'}
    dev: true

  /emoji-regex/7.0.3:
    resolution: {integrity: sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA==}
    dev: true

  /emoji-regex/8.0.0:
    resolution: {integrity: sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==}

  /emoji-regex/9.2.2:
    resolution: {integrity: sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==}

  /emojis-list/3.0.0:
    resolution: {integrity: sha512-/kyM18EfinwXZbno9FyUGeFh87KC8HRQBQGildHZbEuRyWFOmv1U10o9BBp8XVZDVNNuQKyIGIu5ZYAAXJ0V2Q==}
    engines: {node: '>= 4'}

  /emoticon/3.2.0:
    resolution: {integrity: sha512-SNujglcLTTg+lDAcApPNgEdudaqQFiAbJCqzjNxJkvN9vAwCGi0uu8IUVvx+f16h+V44KCY6Y2yboroc9pilHg==}

  /encodeurl/1.0.2:
    resolution: {integrity: sha512-TPJXq8JqFaVYm2CWmPvnP2Iyo4ZSM7/QKcSmuMLDObfpH5fi7RUGmd/rTDf+rut/saiDiQEeVTNgAmJEdAOx0w==}
    engines: {node: '>= 0.8'}

  /end-of-stream/1.4.4:
    resolution: {integrity: sha512-+uw1inIHVPQoaVuHzRyXd21icM+cnt4CzD5rW+NC1wjOUSTOs+Te7FOv7AhN7vS9x/oIyhLP5PR1H+phQAHu5Q==}
    dependencies:
      once: 1.4.0

  /enhanced-resolve/5.10.0:
    resolution: {integrity: sha512-T0yTFjdpldGY8PmuXXR0PyQ1ufZpEGiHVrp7zHKB7jdR4qlmZHhONVM5AQOAWXuF/w3dnHbEQVrNptJgt7F+cQ==}
    engines: {node: '>=10.13.0'}
    dependencies:
      graceful-fs: 4.2.10
      tapable: 2.2.1

  /entities/2.2.0:
    resolution: {integrity: sha512-p92if5Nz619I0w+akJrLZH0MX0Pb5DX39XOwQTtXSdQQOaYH03S1uIQp4mhOZtAXrxq4ViO67YTiLBo2638o9A==}

  /entities/4.4.0:
    resolution: {integrity: sha512-oYp7156SP8LkeGD0GF85ad1X9Ai79WtRsZ2gxJqtBuzH+98YUV6jkHEKlZkMbcrjJjIVJNIDP/3WL9wQkoPbWA==}
    engines: {node: '>=0.12'}

  /env-paths/2.2.1:
    resolution: {integrity: sha512-+h1lkLKhZMTYjog1VEpJNG7NZJWcuc2DDk/qsqSTRRCOXiLjeQ1d1/udrUGhqMxUgAlwKNZ0cf2uqan5GLuS2A==}
    engines: {node: '>=6'}
    dev: true

  /error-ex/1.3.2:
    resolution: {integrity: sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==}
    dependencies:
      is-arrayish: 0.2.1

  /es-abstract/1.20.2:
    resolution: {integrity: sha512-XxXQuVNrySBNlEkTYJoDNFe5+s2yIOpzq80sUHEdPdQr0S5nTLz4ZPPPswNIpKseDDUS5yghX1gfLIHQZ1iNuQ==}
    engines: {node: '>= 0.4'}
    dependencies:
      call-bind: 1.0.2
      es-to-primitive: 1.2.1
      function-bind: 1.1.1
      function.prototype.name: 1.1.5
      get-intrinsic: 1.1.3
      get-symbol-description: 1.0.0
      has: 1.0.3
      has-property-descriptors: 1.0.0
      has-symbols: 1.0.3
      internal-slot: 1.0.3
      is-callable: 1.2.6
      is-negative-zero: 2.0.2
      is-regex: 1.1.4
      is-shared-array-buffer: 1.0.2
      is-string: 1.0.7
      is-weakref: 1.0.2
      object-inspect: 1.12.2
      object-keys: 1.1.1
      object.assign: 4.1.4
      regexp.prototype.flags: 1.4.3
      string.prototype.trimend: 1.0.5
      string.prototype.trimstart: 1.0.5
      unbox-primitive: 1.0.2
    dev: true

  /es-module-lexer/0.9.3:
    resolution: {integrity: sha512-1HQ2M2sPtxwnvOvT1ZClHyQDiggdNjURWpY2we6aMKCQiUVxTmVs2UYPLIrD84sS+kMdUwfBSylbJPwNnBrnHQ==}

  /es-shim-unscopables/1.0.0:
    resolution: {integrity: sha512-Jm6GPcCdC30eMLbZ2x8z2WuRwAws3zTBBKuusffYVUrNj/GVSUAZ+xKMaUpfNDR5IbyNA5LJbaecoUVbmUcB1w==}
    dependencies:
      has: 1.0.3
    dev: true

  /es-to-primitive/1.2.1:
    resolution: {integrity: sha512-QCOllgZJtaUo9miYBcLChTUaHNjJF3PYs1VidD7AwiEj1kYxKeQTctLAezAOH5ZKRH0g2IgPn6KwB4IT8iRpvA==}
    engines: {node: '>= 0.4'}
    dependencies:
      is-callable: 1.2.6
      is-date-object: 1.0.5
      is-symbol: 1.0.4
    dev: true

  /escalade/3.1.1:
    resolution: {integrity: sha512-k0er2gUkLf8O0zKJiAhmkTnJlTvINGv7ygDNPbeIsX/TJjGJZHuh9B2UxbsaEkmlEo9MfhrSzmhIlhRlI2GXnw==}
    engines: {node: '>=6'}

  /escape-goat/2.1.1:
    resolution: {integrity: sha512-8/uIhbG12Csjy2JEW7D9pHbreaVaS/OpN3ycnyvElTdwM5n6GY6W6e2IPemfvGZeUMqZ9A/3GqIZMgKnBhAw/Q==}
    engines: {node: '>=8'}

  /escape-html/1.0.3:
    resolution: {integrity: sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==}

  /escape-string-regexp/1.0.5:
    resolution: {integrity: sha512-vbRorB5FUQWvla16U8R/qgaFIya2qGzwDrNmCZuYKrbdSUMG6I1ZCGQRefkRVhuOkIGVne7BQ35DSfo1qvJqFg==}
    engines: {node: '>=0.8.0'}

  /escape-string-regexp/2.0.0:
    resolution: {integrity: sha512-UpzcLCXolUWcNu5HtVMHYdXJjArjsF9C0aNnquZYY4uW/Vu0miy5YoWvbV345HauVvcAUnpRuhMMcqTcGOY2+w==}
    engines: {node: '>=8'}
    dev: true

  /escape-string-regexp/4.0.0:
    resolution: {integrity: sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==}
    engines: {node: '>=10'}

  /escodegen/2.0.0:
    resolution: {integrity: sha512-mmHKys/C8BFUGI+MAWNcSYoORYLMdPzjrknd2Vc+bUsjN5bXcr8EhrNB+UTqfL1y3I9c4fw2ihgtMPQLBRiQxw==}
    engines: {node: '>=6.0'}
    hasBin: true
    dependencies:
      esprima: 4.0.1
      estraverse: 5.3.0
      esutils: 2.0.3
      optionator: 0.8.3
    optionalDependencies:
      source-map: 0.6.1
    dev: true

  /eslint-plugin-promise/6.0.1_eslint@8.21.0:
    resolution: {integrity: sha512-uM4Tgo5u3UWQiroOyDEsYcVMOo7re3zmno0IZmB5auxoaQNIceAbXEkSt8RNrKtaYehARHG06pYK6K1JhtP0Zw==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    peerDependencies:
      eslint: ^7.0.0 || ^8.0.0
    dependencies:
      eslint: 8.21.0
    dev: true

  /eslint-plugin-react/7.27.1_eslint@8.21.0:
    resolution: {integrity: sha512-meyunDjMMYeWr/4EBLTV1op3iSG3mjT/pz5gti38UzfM4OPpNc2m0t2xvKCOMU5D6FSdd34BIMFOvQbW+i8GAA==}
    engines: {node: '>=4'}
    peerDependencies:
      eslint: ^3 || ^4 || ^5 || ^6 || ^7 || ^8
    dependencies:
      array-includes: 3.1.5
      array.prototype.flatmap: 1.3.0
      doctrine: 2.1.0
      eslint: 8.21.0
      estraverse: 5.3.0
      jsx-ast-utils: 3.3.3
      minimatch: 3.1.2
      object.entries: 1.1.5
      object.fromentries: 2.0.5
      object.hasown: 1.1.1
      object.values: 1.1.5
      prop-types: 15.8.1
      resolve: 2.0.0-next.4
      semver: 6.3.0
      string.prototype.matchall: 4.0.7
    dev: true

  /eslint-plugin-tsdoc/0.2.17:
    resolution: {integrity: sha512-xRmVi7Zx44lOBuYqG8vzTXuL6IdGOeF9nHX17bjJ8+VE6fsxpdGem0/SBTmAwgYMKYB1WBkqRJVQ+n8GK041pA==}
    dependencies:
      '@microsoft/tsdoc': 0.14.2
      '@microsoft/tsdoc-config': 0.16.2
    dev: true

  /eslint-scope/5.1.1:
    resolution: {integrity: sha512-2NxwbF/hZ0KpepYN0cNbo+FN6XoK7GaHlQhgx/hIZl6Va0bF45RQOOwhLIy8lQDbuCiadSLCBnH2CFYquit5bw==}
    engines: {node: '>=8.0.0'}
    dependencies:
      esrecurse: 4.3.0
      estraverse: 4.3.0

  /eslint-scope/7.1.1:
    resolution: {integrity: sha512-QKQM/UXpIiHcLqJ5AOyIW7XZmzjkzQXYE54n1++wb0u9V/abW3l9uQnxX8Z5Xd18xyKIMTUAyQ0k1e8pz6LUrw==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    dependencies:
      esrecurse: 4.3.0
      estraverse: 5.3.0
    dev: true

  /eslint-utils/3.0.0_eslint@8.21.0:
    resolution: {integrity: sha512-uuQC43IGctw68pJA1RgbQS8/NP7rch6Cwd4j3ZBtgo4/8Flj4eGE7ZYSZRN3iq5pVUv6GPdW5Z1RFleo84uLDA==}
    engines: {node: ^10.0.0 || ^12.0.0 || >= 14.0.0}
    peerDependencies:
      eslint: '>=5'
    dependencies:
      eslint: 8.21.0
      eslint-visitor-keys: 2.1.0
    dev: true

  /eslint-utils/3.0.0_eslint@8.7.0:
    resolution: {integrity: sha512-uuQC43IGctw68pJA1RgbQS8/NP7rch6Cwd4j3ZBtgo4/8Flj4eGE7ZYSZRN3iq5pVUv6GPdW5Z1RFleo84uLDA==}
    engines: {node: ^10.0.0 || ^12.0.0 || >= 14.0.0}
    peerDependencies:
      eslint: '>=5'
    dependencies:
      eslint: 8.7.0
      eslint-visitor-keys: 2.1.0
    dev: true

  /eslint-visitor-keys/2.1.0:
    resolution: {integrity: sha512-0rSmRBzXgDzIsD6mGdJgevzgezI534Cer5L/vyMX0kHzT/jiB43jRhd9YUlMGYLQy2zprNmoT8qasCGtY+QaKw==}
    engines: {node: '>=10'}
    dev: true

  /eslint-visitor-keys/3.3.0:
    resolution: {integrity: sha512-mQ+suqKJVyeuwGYHAdjMFqjCyfl8+Ldnxuyp3ldiMBFKkvytrXUZWaiPCEav8qDHKty44bD+qV1IP4T+w+xXRA==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    dev: true

  /eslint/8.21.0:
    resolution: {integrity: sha512-/XJ1+Qurf1T9G2M5IHrsjp+xrGT73RZf23xA1z5wB1ZzzEAWSZKvRwhWxTFp1rvkvCfwcvAUNAP31bhKTTGfDA==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    hasBin: true
    dependencies:
      '@eslint/eslintrc': 1.3.2
      '@humanwhocodes/config-array': 0.10.4
      '@humanwhocodes/gitignore-to-minimatch': 1.0.2
      ajv: 6.12.6
      chalk: 4.1.2
      cross-spawn: 7.0.3
      debug: 4.3.4
      doctrine: 3.0.0
      escape-string-regexp: 4.0.0
      eslint-scope: 7.1.1
      eslint-utils: 3.0.0_eslint@8.21.0
      eslint-visitor-keys: 3.3.0
      espree: 9.4.0
      esquery: 1.4.0
      esutils: 2.0.3
      fast-deep-equal: 3.1.3
      file-entry-cache: 6.0.1
      find-up: 5.0.0
      functional-red-black-tree: 1.0.1
      glob-parent: 6.0.2
      globals: 13.17.0
      globby: 11.1.0
      grapheme-splitter: 1.0.4
      ignore: 5.2.0
      import-fresh: 3.3.0
      imurmurhash: 0.1.4
      is-glob: 4.0.3
      js-yaml: 4.1.0
      json-stable-stringify-without-jsonify: 1.0.1
      levn: 0.4.1
      lodash.merge: 4.6.2
      minimatch: 3.1.2
      natural-compare: 1.4.0
      optionator: 0.9.1
      regexpp: 3.2.0
      strip-ansi: 6.0.1
      strip-json-comments: 3.1.1
      text-table: 0.2.0
      v8-compile-cache: 2.3.0
    transitivePeerDependencies:
      - supports-color
    dev: true

  /eslint/8.7.0:
    resolution: {integrity: sha512-ifHYzkBGrzS2iDU7KjhCAVMGCvF6M3Xfs8X8b37cgrUlDt6bWRTpRh6T/gtSXv1HJ/BUGgmjvNvOEGu85Iif7w==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    hasBin: true
    dependencies:
      '@eslint/eslintrc': 1.3.2
      '@humanwhocodes/config-array': 0.9.5
      ajv: 6.12.6
      chalk: 4.1.2
      cross-spawn: 7.0.3
      debug: 4.3.4
      doctrine: 3.0.0
      escape-string-regexp: 4.0.0
      eslint-scope: 7.1.1
      eslint-utils: 3.0.0_eslint@8.7.0
      eslint-visitor-keys: 3.3.0
      espree: 9.4.0
      esquery: 1.4.0
      esutils: 2.0.3
      fast-deep-equal: 3.1.3
      file-entry-cache: 6.0.1
      functional-red-black-tree: 1.0.1
      glob-parent: 6.0.2
      globals: 13.17.0
      ignore: 5.2.0
      import-fresh: 3.3.0
      imurmurhash: 0.1.4
      is-glob: 4.0.3
      js-yaml: 4.1.0
      json-stable-stringify-without-jsonify: 1.0.1
      levn: 0.4.1
      lodash.merge: 4.6.2
      minimatch: 3.1.2
      natural-compare: 1.4.0
      optionator: 0.9.1
      regexpp: 3.2.0
      strip-ansi: 6.0.1
      strip-json-comments: 3.1.1
      text-table: 0.2.0
      v8-compile-cache: 2.3.0
    transitivePeerDependencies:
      - supports-color
    dev: true

  /espree/9.4.0:
    resolution: {integrity: sha512-DQmnRpLj7f6TgN/NYb0MTzJXL+vJF9h3pHy4JhCIs3zwcgez8xmGg3sXHcEO97BrmO2OSvCwMdfdlyl+E9KjOw==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    dependencies:
      acorn: 8.8.0
      acorn-jsx: 5.3.2_acorn@8.8.0
      eslint-visitor-keys: 3.3.0
    dev: true

  /esprima/4.0.1:
    resolution: {integrity: sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==}
    engines: {node: '>=4'}
    hasBin: true

  /esquery/1.4.0:
    resolution: {integrity: sha512-cCDispWt5vHHtwMY2YrAQ4ibFkAL8RbH5YGBnZBc90MolvvfkkQcJro/aZiAQUlQ3qgrYS6D6v8Gc5G5CQsc9w==}
    engines: {node: '>=0.10'}
    dependencies:
      estraverse: 5.3.0
    dev: true

  /esrecurse/4.3.0:
    resolution: {integrity: sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==}
    engines: {node: '>=4.0'}
    dependencies:
      estraverse: 5.3.0

  /estraverse/4.3.0:
    resolution: {integrity: sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw==}
    engines: {node: '>=4.0'}

  /estraverse/5.3.0:
    resolution: {integrity: sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==}
    engines: {node: '>=4.0'}

  /esutils/2.0.3:
    resolution: {integrity: sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==}
    engines: {node: '>=0.10.0'}

  /eta/1.12.3:
    resolution: {integrity: sha512-qHixwbDLtekO/d51Yr4glcaUJCIjGVJyTzuqV4GPlgZo1YpgOKG+avQynErZIYrfM6JIJdtiG2Kox8tbb+DoGg==}
    engines: {node: '>=6.0.0'}

  /etag/1.8.1:
    resolution: {integrity: sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==}
    engines: {node: '>= 0.6'}

  /eval/0.1.8:
    resolution: {integrity: sha512-EzV94NYKoO09GLXGjXj9JIlXijVck4ONSr5wiCWDvhsvj5jxSrzTmRU/9C1DyB6uToszLs8aifA6NQ7lEQdvFw==}
    engines: {node: '>= 0.8'}
    dependencies:
      '@types/node': 14.18.23
      require-like: 0.1.2

  /eventemitter3/4.0.7:
    resolution: {integrity: sha512-8guHBZCwKnFhYdHr2ysuRWErTwhoN2X8XELRlrRwpmfeY2jjuUN4taQMsULKUVo1K4DvZl+0pgfyoysHxvmvEw==}

  /events/3.3.0:
    resolution: {integrity: sha512-mQw+2fkQbALzQ7V0MY0IqdnXNOeTtP4r0lN9z7AAawCXgqea7bDii20AYrIBrFd/Hx0M2Ocz6S111CaFkUcb0Q==}
    engines: {node: '>=0.8.x'}

  /execa/5.1.1:
    resolution: {integrity: sha512-8uSpZZocAZRBAPIEINJj3Lo9HyGitllczc27Eh5YYojjMFMn8yHMDMaUHE2Jqfq05D/wucwI4JGURyXt1vchyg==}
    engines: {node: '>=10'}
    dependencies:
      cross-spawn: 7.0.3
      get-stream: 6.0.1
      human-signals: 2.1.0
      is-stream: 2.0.1
      merge-stream: 2.0.0
      npm-run-path: 4.0.1
      onetime: 5.1.2
      signal-exit: 3.0.7
      strip-final-newline: 2.0.0

  /exit/0.1.2:
    resolution: {integrity: sha512-Zk/eNKV2zbjpKzrsQ+n1G6poVbErQxJ0LBOJXaKZ1EViLzH+hrLu9cdXI4zw9dBQJslwBEpbQ2P1oS7nDxs6jQ==}
    engines: {node: '>= 0.8.0'}
    dev: true

  /expect/27.5.1:
    resolution: {integrity: sha512-E1q5hSUG2AmYQwQJ041nvgpkODHQvB+RKlB4IYdru6uJsyFTRyZAP463M+1lINorwbqAmUggi6+WwkD8lCS/Dw==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/types': 27.5.1
      jest-get-type: 27.5.1
      jest-matcher-utils: 27.5.1
      jest-message-util: 27.5.1
    dev: true

  /expect/29.0.3:
    resolution: {integrity: sha512-t8l5DTws3212VbmPL+tBFXhjRHLmctHB0oQbL8eUc6S7NzZtYUhycrFO9mkxA0ZUC6FAWdNi7JchJSkODtcu1Q==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    dependencies:
      '@jest/expect-utils': 29.0.3
      jest-get-type: 29.0.0
      jest-matcher-utils: 29.0.3
      jest-message-util: 29.0.3
      jest-util: 29.0.3
    dev: true

  /express/4.18.1:
    resolution: {integrity: sha512-zZBcOX9TfehHQhtupq57OF8lFZ3UZi08Y97dwFCkD8p9d/d2Y3M+ykKcwaMDEL+4qyUolgBDX6AblpR3fL212Q==}
    engines: {node: '>= 0.10.0'}
    dependencies:
      accepts: 1.3.8
      array-flatten: 1.1.1
      body-parser: 1.20.0
      content-disposition: 0.5.4
      content-type: 1.0.4
      cookie: 0.5.0
      cookie-signature: 1.0.6
      debug: 2.6.9
      depd: 2.0.0
      encodeurl: 1.0.2
      escape-html: 1.0.3
      etag: 1.8.1
      finalhandler: 1.2.0
      fresh: 0.5.2
      http-errors: 2.0.0
      merge-descriptors: 1.0.1
      methods: 1.1.2
      on-finished: 2.4.1
      parseurl: 1.3.3
      path-to-regexp: 0.1.7
      proxy-addr: 2.0.7
      qs: 6.10.3
      range-parser: 1.2.1
      safe-buffer: 5.2.1
      send: 0.18.0
      serve-static: 1.15.0
      setprototypeof: 1.2.0
      statuses: 2.0.1
      type-is: 1.6.18
      utils-merge: 1.0.1
      vary: 1.1.2

  /extend-shallow/2.0.1:
    resolution: {integrity: sha512-zCnTtlxNoAiDc3gqY2aYAWFx7XWWiasuF2K8Me5WbN8otHKTUKBwjPtNpRs/rbUZm7KxWAaNj7P1a/p52GbVug==}
    engines: {node: '>=0.10.0'}
    dependencies:
      is-extendable: 0.1.1

  /extend/3.0.2:
    resolution: {integrity: sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==}

  /extsprintf/1.3.0:
    resolution: {integrity: sha512-11Ndz7Nv+mvAC1j0ktTa7fAb0vLyGGX+rMHNBYQviQDGU0Hw7lhctJANqbPhu9nV9/izT/IntTgZ7Im/9LJs9g==}
    engines: {'0': node >=0.6.0}
    dev: true

  /fast-deep-equal/3.1.3:
    resolution: {integrity: sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==}

  /fast-glob/3.2.12:
    resolution: {integrity: sha512-DVj4CQIYYow0BlaelwK1pHl5n5cRSJfM60UA0zK891sVInoPri2Ekj7+e1CT3/3qxXenpI+nBBmQAcJPJgaj4w==}
    engines: {node: '>=8.6.0'}
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      '@nodelib/fs.walk': 1.2.8
      glob-parent: 5.1.2
      merge2: 1.4.1
      micromatch: 4.0.5

  /fast-json-stable-stringify/2.1.0:
    resolution: {integrity: sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==}

  /fast-levenshtein/2.0.6:
    resolution: {integrity: sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==}
    dev: true

  /fast-url-parser/1.1.3:
    resolution: {integrity: sha1-9K8+qfNNiicc9YrSs3WfQx8LMY0=}
    dependencies:
      punycode: 1.4.1

  /fastparse/1.1.2:
    resolution: {integrity: sha512-483XLLxTVIwWK3QTrMGRqUfUpoOs/0hbQrl2oz4J0pAcm3A3bu84wxTFqGqkJzewCLdME38xJLJAxBABfQT8sQ==}
    dev: true

  /fastq/1.13.0:
    resolution: {integrity: sha512-YpkpUnK8od0o1hmeSc7UUs/eB/vIPWJYjKck2QKIzAf71Vm1AAQ3EbuZB3g2JIy+pg+ERD0vqI79KyZiB2e2Nw==}
    dependencies:
      reusify: 1.0.4

  /faye-websocket/0.11.4:
    resolution: {integrity: sha512-CzbClwlXAuiRQAlUyfqPgvPoNKTckTPGfwZV4ZdAhVcP2lh9KUxJg2b5GkE7XbjKQ3YJnQ9z6D9ntLAlB+tP8g==}
    engines: {node: '>=0.8.0'}
    dependencies:
      websocket-driver: 0.7.4

  /fb-watchman/2.0.1:
    resolution: {integrity: sha512-DkPJKQeY6kKwmuMretBhr7G6Vodr7bFwDYTXIkfG1gjvNpaxBTQV3PbXg6bR1c1UP4jPOX0jHUbbHANL9vRjVg==}
    dependencies:
      bser: 2.1.1
    dev: true

  /fbemitter/3.0.0:
    resolution: {integrity: sha512-KWKaceCwKQU0+HPoop6gn4eOHk50bBv/VxjJtGMfwmJt3D29JpN4H4eisCtIPA+a8GVBam+ldMMpMjJUvpDyHw==}
    dependencies:
      fbjs: 3.0.4
    transitivePeerDependencies:
      - encoding
    dev: false

  /fbjs-css-vars/1.0.2:
    resolution: {integrity: sha512-b2XGFAFdWZWg0phtAWLHCk836A1Xann+I+Dgd3Gk64MHKZO44FfoD1KxyvbSh0qZsIoXQGGlVztIY+oitJPpRQ==}
    dev: false

  /fbjs/3.0.4:
    resolution: {integrity: sha512-ucV0tDODnGV3JCnnkmoszb5lf4bNpzjv80K41wd4k798Etq+UYD0y0TIfalLjZoKgjive6/adkRnszwapiDgBQ==}
    dependencies:
      cross-fetch: 3.1.5
      fbjs-css-vars: 1.0.2
      loose-envify: 1.4.0
      object-assign: 4.1.1
      promise: 7.3.1
      setimmediate: 1.0.5
      ua-parser-js: 0.7.31
    transitivePeerDependencies:
      - encoding
    dev: false

  /feed/4.2.2:
    resolution: {integrity: sha512-u5/sxGfiMfZNtJ3OvQpXcvotFpYkL0n9u9mM2vkui2nGo8b4wvDkJ8gAkYqbA8QpGyFCv3RK0Z+Iv+9veCS9bQ==}
    engines: {node: '>=0.4.0'}
    dependencies:
      xml-js: 1.6.11
    dev: false

  /file-entry-cache/6.0.1:
    resolution: {integrity: sha512-7Gps/XWymbLk2QLYK4NzpMOrYjMhdIxXuIvy2QBsLE6ljuodKvdkWs/cpyJJ3CVIVpH0Oi1Hvg1ovbMzLdFBBg==}
    engines: {node: ^10.12.0 || >=12.0.0}
    dependencies:
      flat-cache: 3.0.4
    dev: true

  /file-loader/6.2.0_webpack@5.72.1:
    resolution: {integrity: sha512-qo3glqyTa61Ytg4u73GultjHGjdRyig3tG6lPtyX/jOEJvHif9uB0/OCI2Kif6ctF3caQTW2G5gym21oAsI4pw==}
    engines: {node: '>= 10.13.0'}
    peerDependencies:
      webpack: ^4.0.0 || ^5.0.0
    dependencies:
      loader-utils: 2.0.2
      schema-utils: 3.1.1
      webpack: 5.72.1
    dev: false

  /file-loader/6.2.0_webpack@5.74.0:
    resolution: {integrity: sha512-qo3glqyTa61Ytg4u73GultjHGjdRyig3tG6lPtyX/jOEJvHif9uB0/OCI2Kif6ctF3caQTW2G5gym21oAsI4pw==}
    engines: {node: '>= 10.13.0'}
    peerDependencies:
      webpack: ^4.0.0 || ^5.0.0
    dependencies:
      loader-utils: 2.0.2
      schema-utils: 3.1.1
      webpack: 5.74.0

  /filesize/8.0.7:
    resolution: {integrity: sha512-pjmC+bkIF8XI7fWaH8KxHcZL3DPybs1roSKP4rKDvy20tAWwIObE4+JIseG2byfGKhud5ZnM4YSGKBz7Sh0ndQ==}
    engines: {node: '>= 0.4.0'}

  /fill-range/7.0.1:
    resolution: {integrity: sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==}
    engines: {node: '>=8'}
    dependencies:
      to-regex-range: 5.0.1

  /finalhandler/1.2.0:
    resolution: {integrity: sha512-5uXcUVftlQMFnWC9qu/svkWv3GTd2PfUhK/3PLkYNAe7FbqJMt3515HaxE6eRL74GdsriiwujiawdaB1BpEISg==}
    engines: {node: '>= 0.8'}
    dependencies:
      debug: 2.6.9
      encodeurl: 1.0.2
      escape-html: 1.0.3
      on-finished: 2.4.1
      parseurl: 1.3.3
      statuses: 2.0.1
      unpipe: 1.0.0

  /find-cache-dir/3.3.2:
    resolution: {integrity: sha512-wXZV5emFEjrridIgED11OoUKLxiYjAcqot/NJdAkOhlJ+vGzwhOAfcG5OX1jP+S0PcjEn8bdMJv+g2jwQ3Onig==}
    engines: {node: '>=8'}
    dependencies:
      commondir: 1.0.1
      make-dir: 3.1.0
      pkg-dir: 4.2.0

  /find-up/3.0.0:
    resolution: {integrity: sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==}
    engines: {node: '>=6'}
    dependencies:
      locate-path: 3.0.0

  /find-up/4.1.0:
    resolution: {integrity: sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==}
    engines: {node: '>=8'}
    dependencies:
      locate-path: 5.0.0
      path-exists: 4.0.0

  /find-up/5.0.0:
    resolution: {integrity: sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==}
    engines: {node: '>=10'}
    dependencies:
      locate-path: 6.0.0
      path-exists: 4.0.0

  /flat-cache/3.0.4:
    resolution: {integrity: sha512-dm9s5Pw7Jc0GvMYbshN6zchCA9RgQlzzEZX3vylR9IqFfS8XciblUXOKfW6SiuJ0e13eDYZoZV5wdrev7P3Nwg==}
    engines: {node: ^10.12.0 || >=12.0.0}
    dependencies:
      flatted: 3.2.7
      rimraf: 3.0.2
    dev: true

  /flatted/3.2.7:
    resolution: {integrity: sha512-5nqDSxl8nn5BSNxyR3n4I6eDmbolI6WT+QqR547RwxQapgjQBmtktdP+HTBb/a/zLsbzERTONyUB5pefh5TtjQ==}
    dev: true

  /flux/4.0.3_react@17.0.2:
    resolution: {integrity: sha512-yKAbrp7JhZhj6uiT1FTuVMlIAT1J4jqEyBpFApi1kxpGZCvacMVc/t1pMQyotqHhAgvoE3bNvAykhCo2CLjnYw==}
    peerDependencies:
      react: ^15.0.2 || ^16.0.0 || ^17.0.0
    dependencies:
      fbemitter: 3.0.0
      fbjs: 3.0.4
      react: 17.0.2
    transitivePeerDependencies:
      - encoding
    dev: false

  /follow-redirects/1.15.2:
    resolution: {integrity: sha512-VQLG33o04KaQ8uYi2tVNbdrWp1QWxNNea+nmIB4EVM28v0hmP17z7aG1+wAkNzVq4KeXTq3221ye5qTJP91JwA==}
    engines: {node: '>=4.0'}
    peerDependencies:
      debug: '*'
    peerDependenciesMeta:
      debug:
        optional: true

  /forever-agent/0.6.1:
    resolution: {integrity: sha512-j0KLYPhm6zeac4lz3oJ3o65qvgQCcPubiyotZrXqEaG4hNagNYO8qdlUrX5vwqv9ohqeT/Z3j6+yW067yWWdUw==}
    dev: true

  /fork-ts-checker-webpack-plugin/6.5.2_typescript@4.7.4+webpack@5.74.0:
    resolution: {integrity: sha512-m5cUmF30xkZ7h4tWUgTAcEaKmUW7tfyUyTqNNOz7OxWJ0v1VWKTcOvH8FWHUwSjlW/356Ijc9vi3XfcPstpQKA==}
    engines: {node: '>=10', yarn: '>=1.0.0'}
    peerDependencies:
      eslint: '>= 6'
      typescript: '>= 2.7'
      vue-template-compiler: '*'
      webpack: '>= 4'
    peerDependenciesMeta:
      eslint:
        optional: true
      vue-template-compiler:
        optional: true
    dependencies:
      '@babel/code-frame': 7.18.6
      '@types/json-schema': 7.0.11
      chalk: 4.1.2
      chokidar: 3.5.3
      cosmiconfig: 6.0.0
      deepmerge: 4.2.2
      fs-extra: 9.1.0
      glob: 7.2.3
      memfs: 3.4.7
      minimatch: 3.1.2
      schema-utils: 2.7.0
      semver: 7.3.7
      tapable: 1.1.3
      typescript: 4.7.4
      webpack: 5.74.0

  /form-data/2.3.3:
    resolution: {integrity: sha512-1lLKB2Mu3aGP1Q/2eCOx0fNbRMe7XdwktwOruhfqqd0rIJWwN4Dh+E3hrPSlDCXnSR7UtZ1N38rVXm+6+MEhJQ==}
    engines: {node: '>= 0.12'}
    dependencies:
      asynckit: 0.4.0
      combined-stream: 1.0.8
      mime-types: 2.1.35
    dev: true

  /form-data/3.0.1:
    resolution: {integrity: sha512-RHkBKtLWUVwd7SqRIvCZMEvAMoGUp0XU+seQiZejj0COz3RI3hWP4sCv3gZWWLjJTd7rGwcsF5eKZGii0r/hbg==}
    engines: {node: '>= 6'}
    dependencies:
      asynckit: 0.4.0
      combined-stream: 1.0.8
      mime-types: 2.1.35
    dev: true

  /forwarded/0.2.0:
    resolution: {integrity: sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==}
    engines: {node: '>= 0.6'}

  /fraction.js/4.2.0:
    resolution: {integrity: sha512-MhLuK+2gUcnZe8ZHlaaINnQLl0xRIGRfcGk2yl8xoQAfHrSsL3rYu6FCmBdkdbhc9EPlwyGHewaRsvwRMJtAlA==}

  /fresh/0.5.2:
    resolution: {integrity: sha1-PYyt2Q2XZWn6g1qx+OSyOhBWBac=}
    engines: {node: '>= 0.6'}

  /fs-extra/10.1.0:
    resolution: {integrity: sha512-oRXApq54ETRj4eMiFzGnHWGy+zo5raudjuxN0b8H7s/RU2oW0Wvsx9O0ACRN/kRq9E8Vu/ReskGB5o3ji+FzHQ==}
    engines: {node: '>=12'}
    dependencies:
      graceful-fs: 4.2.10
      jsonfile: 6.1.0
      universalify: 2.0.0

  /fs-extra/7.0.1:
    resolution: {integrity: sha512-YJDaCJZEnBmcbw13fvdAM9AwNOJwOzrE4pqMqBq5nFiEqXUqHwlK4B+3pUw6JNvfSPtX05xFHtYy/1ni01eGCw==}
    engines: {node: '>=6 <7 || >=8'}
    dependencies:
      graceful-fs: 4.2.10
      jsonfile: 4.0.0
      universalify: 0.1.2

  /fs-extra/9.1.0:
    resolution: {integrity: sha512-hcg3ZmepS30/7BSFqRvoo3DOMQu7IjqxO5nCDt+zM9XWjb33Wg7ziNT+Qvqbuc3+gWpzO02JubVyk2G4Zvo1OQ==}
    engines: {node: '>=10'}
    dependencies:
      at-least-node: 1.0.0
      graceful-fs: 4.2.10
      jsonfile: 6.1.0
      universalify: 2.0.0

  /fs-minipass/2.1.0:
    resolution: {integrity: sha512-V/JgOLFCS+R6Vcq0slCuaeWEdNC3ouDlJMNIsacH2VtALiu9mV4LPrHc5cDl8k5aw6J8jwgWWpiTo5RYhmIzvg==}
    engines: {node: '>= 8'}
    dependencies:
      minipass: 3.3.4
    dev: true

  /fs-monkey/1.0.3:
    resolution: {integrity: sha512-cybjIfiiE+pTWicSCLFHSrXZ6EilF30oh91FDP9S2B051prEa7QWfrVTQm10/dDpswBDXZugPa1Ogu8Yh+HV0Q==}

  /fs.realpath/1.0.0:
    resolution: {integrity: sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==}

  /fsevents/2.1.3:
    resolution: {integrity: sha512-Auw9a4AxqWpa9GUfj370BMPzzyncfBABW8Mab7BGWBYDj4Isgq+cDKtx0i6u9jcX9pQDnswsaaOTgTmA5pEjuQ==}
    engines: {node: ^8.16.0 || ^10.6.0 || >=11.0.0}
    os: [darwin]
    deprecated: '"Please update to latest v2.3 or v2.2"'
    requiresBuild: true
    dev: true
    optional: true

  /fsevents/2.3.2:
    resolution: {integrity: sha512-xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA==}
    engines: {node: ^8.16.0 || ^10.6.0 || >=11.0.0}
    os: [darwin]
    requiresBuild: true
    optional: true

  /function-bind/1.1.1:
    resolution: {integrity: sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A==}

  /function.prototype.name/1.1.5:
    resolution: {integrity: sha512-uN7m/BzVKQnCUF/iW8jYea67v++2u7m5UgENbHRtdDVclOUP+FMPlCNdmk0h/ysGyo2tavMJEDqJAkJdRa1vMA==}
    engines: {node: '>= 0.4'}
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.4
      es-abstract: 1.20.2
      functions-have-names: 1.2.3
    dev: true

  /functional-red-black-tree/1.0.1:
    resolution: {integrity: sha512-dsKNQNdj6xA3T+QlADDA7mOSlX0qiMINjn0cgr+eGHGsbSHzTabcIogz2+p/iqP1Xs6EP/sS2SbqH+brGTbq0g==}
    dev: true

  /functions-have-names/1.2.3:
    resolution: {integrity: sha512-xckBUXyTIqT97tq2x2AMb+g163b5JFysYk0x4qxNFwbfQkmNZoiRHb6sPzI9/QV33WeuvVYBUIiD4NzNIyqaRQ==}
    dev: true

  /gauge/2.7.4:
    resolution: {integrity: sha512-14x4kjc6lkD3ltw589k0NrPD6cCNTD6CWoVUNpB85+DrtONoZn+Rug6xZU5RvSC4+TZPxA5AnBibQYAvZn41Hg==}
    dependencies:
      aproba: 1.2.0
      console-control-strings: 1.1.0
      has-unicode: 2.0.1
      object-assign: 4.1.1
      signal-exit: 3.0.7
      string-width: 1.0.2
      strip-ansi: 3.0.1
      wide-align: 1.1.5
    dev: true

  /gaze/1.1.3:
    resolution: {integrity: sha512-BRdNm8hbWzFzWHERTrejLqwHDfS4GibPoq5wjTPIoJHoBtKGPg3xAFfxmM+9ztbXelxcf2hwQcaz1PtmFeue8g==}
    engines: {node: '>= 4.0.0'}
    dependencies:
      globule: 1.3.4
    dev: true

  /generic-names/2.0.1:
    resolution: {integrity: sha512-kPCHWa1m9wGG/OwQpeweTwM/PYiQLrUIxXbt/P4Nic3LbGjCP0YwrALHW1uNLKZ0LIMg+RF+XRlj2ekT9ZlZAQ==}
    dependencies:
      loader-utils: 1.4.0
    dev: true

  /gensync/1.0.0-beta.2:
    resolution: {integrity: sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==}
    engines: {node: '>=6.9.0'}

  /get-caller-file/2.0.5:
    resolution: {integrity: sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==}
    engines: {node: 6.* || 8.* || >= 10.*}
    dev: true

  /get-intrinsic/1.1.3:
    resolution: {integrity: sha512-QJVz1Tj7MS099PevUG5jvnt9tSkXN8K14dxQlikJuPt4uD9hHAHjLyLBiLR5zELelBdD9QNRAXZzsJx0WaDL9A==}
    dependencies:
      function-bind: 1.1.1
      has: 1.0.3
      has-symbols: 1.0.3

  /get-own-enumerable-property-symbols/3.0.2:
    resolution: {integrity: sha512-I0UBV/XOz1XkIJHEUDMZAbzCThU/H8DxmSfmdGcKPnVhu2VfFqr34jr9777IyaTYvxjedWhqVIilEDsCdP5G6g==}

  /get-package-type/0.1.0:
    resolution: {integrity: sha512-pjzuKtY64GYfWizNAJ0fr9VqttZkNiK2iS430LtIHzjBEr6bX8Am2zm4sW4Ro5wjWW5cAlRL1qAMTcXbjNAO2Q==}
    engines: {node: '>=8.0.0'}
    dev: true

  /get-stdin/4.0.1:
    resolution: {integrity: sha512-F5aQMywwJ2n85s4hJPTT9RPxGmubonuB10MNYo17/xph174n2MIR33HRguhzVag10O/npM7SPk73LMZNP+FaWw==}
    engines: {node: '>=0.10.0'}
    dev: true

  /get-stream/4.1.0:
    resolution: {integrity: sha512-GMat4EJ5161kIy2HevLlr4luNjBgvmj413KaQA7jt4V8B4RDsfpHk7WQ9GVqfYyyx8OS/L66Kox+rJRNklLK7w==}
    engines: {node: '>=6'}
    dependencies:
      pump: 3.0.0

  /get-stream/5.2.0:
    resolution: {integrity: sha512-nBF+F1rAZVCu/p7rjzgA+Yb4lfYXrpl7a6VmJrU8wF9I1CKvP/QwPNZHnOlwbTkY6dvtFIzFMSyQXbLoTQPRpA==}
    engines: {node: '>=8'}
    dependencies:
      pump: 3.0.0

  /get-stream/6.0.1:
    resolution: {integrity: sha512-ts6Wi+2j3jQjqi70w5AlN8DFnkSwC+MqmxEzdEALB2qXZYV3X/b1CTfgPLGJNMeAWxdPfU8FO1ms3NUfaHCPYg==}
    engines: {node: '>=10'}

  /get-symbol-description/1.0.0:
    resolution: {integrity: sha512-2EmdH1YvIQiZpltCNgkuiUnyukzxM/R6NDJX31Ke3BG1Nq5b0S2PhX59UKi9vZpPDQVdqn+1IcaAwnzTT5vCjw==}
    engines: {node: '>= 0.4'}
    dependencies:
      call-bind: 1.0.2
      get-intrinsic: 1.1.3
    dev: true

  /getpass/0.1.7:
    resolution: {integrity: sha512-0fzj9JxOLfJ+XGLhR8ze3unN0KZCgZwiSSDz168VERjK8Wl8kVSdcu2kspd4s4wtAa1y/qrVRiAA0WclVsu0ng==}
    dependencies:
      assert-plus: 1.0.0
    dev: true

  /github-slugger/1.4.0:
    resolution: {integrity: sha512-w0dzqw/nt51xMVmlaV1+JRzN+oCa1KfcgGEWhxUG16wbdA+Xnt/yoFO8Z8x/V82ZcZ0wy6ln9QDup5avbhiDhQ==}

  /glob-escape/0.0.2:
    resolution: {integrity: sha512-L/cXYz8x7qer1HAyUQ+mbjcUsJVdpRxpAf7CwqHoNBs9vTpABlGfNN4tzkDxt+u3Z7ZncVyKlCNPtzb0R/7WbA==}
    engines: {node: '>= 0.10'}
    dev: true

  /glob-parent/5.1.2:
    resolution: {integrity: sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==}
    engines: {node: '>= 6'}
    dependencies:
      is-glob: 4.0.3

  /glob-parent/6.0.2:
    resolution: {integrity: sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==}
    engines: {node: '>=10.13.0'}
    dependencies:
      is-glob: 4.0.3

  /glob-to-regexp/0.4.1:
    resolution: {integrity: sha512-lkX1HJXwyMcprw/5YUZc2s7DrpAiHB21/V+E1rHUrVNokkvB6bqMzT0VfV6/86ZNabt1k14YOIaT7nDvOX3Iiw==}

  /glob/7.0.6:
    resolution: {integrity: sha512-f8c0rE8JiCxpa52kWPAOa3ZaYEnzofDzCQLCn3Vdk0Z5OVLq3BsRFJI4S4ykpeVW6QMGBUkMeUpoEgWnMTnw5Q==}
    dependencies:
      fs.realpath: 1.0.0
      inflight: 1.0.6
      inherits: 2.0.4
      minimatch: 3.1.2
      once: 1.4.0
      path-is-absolute: 1.0.1
    dev: true

  /glob/7.1.7:
    resolution: {integrity: sha512-OvD9ENzPLbegENnYP5UUfJIirTg4+XwMWGaQfQTY0JenxNvvIKP3U3/tAQSPIu/lHxXYSZmpXlUHeqAIdKzBLQ==}
    dependencies:
      fs.realpath: 1.0.0
      inflight: 1.0.6
      inherits: 2.0.4
      minimatch: 3.0.8
      once: 1.4.0
      path-is-absolute: 1.0.1
    dev: true

  /glob/7.2.3:
    resolution: {integrity: sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==}
    dependencies:
      fs.realpath: 1.0.0
      inflight: 1.0.6
      inherits: 2.0.4
      minimatch: 3.1.2
      once: 1.4.0
      path-is-absolute: 1.0.1

  /global-dirs/3.0.0:
    resolution: {integrity: sha512-v8ho2DS5RiCjftj1nD9NmnfaOzTdud7RRnVd9kFNOjqZbISlx5DQ+OrTkywgd0dIt7oFCvKetZSHoHcP3sDdiA==}
    engines: {node: '>=10'}
    dependencies:
      ini: 2.0.0

  /global-modules/2.0.0:
    resolution: {integrity: sha512-NGbfmJBp9x8IxyJSd1P+otYK8vonoJactOogrVfFRIAEY1ukil8RSKDz2Yo7wh1oihl51l/r6W4epkeKJHqL8A==}
    engines: {node: '>=6'}
    dependencies:
      global-prefix: 3.0.0

  /global-prefix/3.0.0:
    resolution: {integrity: sha512-awConJSVCHVGND6x3tmMaKcQvwXLhjdkmomy2W+Goaui8YPgYgXJZewhg3fWC+DlfqqQuWg8AwqjGTD2nAPVWg==}
    engines: {node: '>=6'}
    dependencies:
      ini: 1.3.8
      kind-of: 6.0.3
      which: 1.3.1

  /globals/11.12.0:
    resolution: {integrity: sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA==}
    engines: {node: '>=4'}

  /globals/13.17.0:
    resolution: {integrity: sha512-1C+6nQRb1GwGMKm2dH/E7enFAMxGTmGI7/dEdhy/DNelv85w9B72t3uc5frtMNXIbzrarJJ/lTCjcaZwbLJmyw==}
    engines: {node: '>=8'}
    dependencies:
      type-fest: 0.20.2
    dev: true

  /globby/11.1.0:
    resolution: {integrity: sha512-jhIXaOzy1sb8IyocaruWSn1TjmnBVs8Ayhcy83rmxNJ8q2uWKCAj3CnJY+KpGSXCueAPc0i05kVvVKtP1t9S3g==}
    engines: {node: '>=10'}
    dependencies:
      array-union: 2.1.0
      dir-glob: 3.0.1
      fast-glob: 3.2.12
      ignore: 5.2.0
      merge2: 1.4.1
      slash: 3.0.0

  /globby/13.1.2:
    resolution: {integrity: sha512-LKSDZXToac40u8Q1PQtZihbNdTYSNMuWe+K5l+oa6KgDzSvVrHXlJy40hUP522RjAIoNLJYBJi7ow+rbFpIhHQ==}
    engines: {node: ^12.20.0 || ^14.13.1 || >=16.0.0}
    dependencies:
      dir-glob: 3.0.1
      fast-glob: 3.2.12
      ignore: 5.2.0
      merge2: 1.4.1
      slash: 4.0.0

  /globule/1.3.4:
    resolution: {integrity: sha512-OPTIfhMBh7JbBYDpa5b+Q5ptmMWKwcNcFSR/0c6t8V4f3ZAVBEsKNY37QdVqmLRYSMhOUGYrY0QhSoEpzGr/Eg==}
    engines: {node: '>= 0.10'}
    dependencies:
      glob: 7.1.7
      lodash: 4.17.21
      minimatch: 3.0.8
    dev: true

  /got/9.6.0:
    resolution: {integrity: sha512-R7eWptXuGYxwijs0eV+v3o6+XH1IqVK8dJOEecQfTmkncw9AV4dcw/Dhxi8MdlqPthxxpZyizMzyg8RTmEsG+Q==}
    engines: {node: '>=8.6'}
    dependencies:
      '@sindresorhus/is': 0.14.0
      '@szmarczak/http-timer': 1.1.2
      cacheable-request: 6.1.0
      decompress-response: 3.3.0
      duplexer3: 0.1.5
      get-stream: 4.1.0
      lowercase-keys: 1.0.1
      mimic-response: 1.0.1
      p-cancelable: 1.1.0
      to-readable-stream: 1.0.0
      url-parse-lax: 3.0.0

  /graceful-fs/4.2.10:
    resolution: {integrity: sha512-9ByhssR2fPVsNZj478qUUbKfmL0+t5BDVyjShtyZZLiK7ZDAArFFfopyOTj0M05wE2tJPisA4iTnnXl2YoPvOA==}

  /grapheme-splitter/1.0.4:
    resolution: {integrity: sha512-bzh50DW9kTPM00T8y4o8vQg89Di9oLJVLW/KaOGIXJWP/iqCN6WKYkbNOF04vFLJhwcpYUh9ydh/+5vpOqV4YQ==}
    dev: true

  /gray-matter/4.0.3:
    resolution: {integrity: sha512-5v6yZd4JK3eMI3FqqCouswVqwugaA9r4dNZB1wwcmrD02QkV5H0y7XBQW8QwQqEaZY1pM9aqORSORhJRdNK44Q==}
    engines: {node: '>=6.0'}
    dependencies:
      js-yaml: 3.14.1
      kind-of: 6.0.3
      section-matter: 1.0.0
      strip-bom-string: 1.0.0

  /gzip-size/6.0.0:
    resolution: {integrity: sha512-ax7ZYomf6jqPTQ4+XCpUGyXKHk5WweS+e05MBO4/y3WJ5RkmPXNKvX+bx1behVILVwr6JSQvZAku021CHPXG3Q==}
    engines: {node: '>=10'}
    dependencies:
      duplexer: 0.1.2

  /handle-thing/2.0.1:
    resolution: {integrity: sha512-9Qn4yBxelxoh2Ow62nP+Ka/kMnOXRi8BXnRaUwezLNhqelnN49xKz4F/dPP8OYLxLxq6JDtZb2i9XznUQbNPTg==}

  /har-schema/2.0.0:
    resolution: {integrity: sha512-Oqluz6zhGX8cyRaTQlFMPw80bSJVG2x/cFb8ZPhUILGgHka9SsokCCOQgpveePerqidZOrT14ipqfJb7ILcW5Q==}
    engines: {node: '>=4'}
    dev: true

  /har-validator/5.1.5:
    resolution: {integrity: sha512-nmT2T0lljbxdQZfspsno9hgrG3Uir6Ks5afism62poxqBM6sDnMEuPmzTq8XN0OEwqKLLdh1jQI3qyE66Nzb3w==}
    engines: {node: '>=6'}
    deprecated: this library is no longer supported
    dependencies:
      ajv: 6.12.6
      har-schema: 2.0.0
    dev: true

  /hard-rejection/2.1.0:
    resolution: {integrity: sha512-VIZB+ibDhx7ObhAe7OVtoEbuP4h/MuOTHJ+J8h/eBXotJYl0fBgR72xDFCKgIh22OJZIOVNxBMWuhAr10r8HdA==}
    engines: {node: '>=6'}
    dev: true

  /has-ansi/2.0.0:
    resolution: {integrity: sha512-C8vBJ8DwUCx19vhm7urhTuUsr4/IyP6l4VzNQDv+ryHQObW3TTTp9yB68WpYgRe2bbaGuZ/se74IqFeVnMnLZg==}
    engines: {node: '>=0.10.0'}
    dependencies:
      ansi-regex: 2.1.1
    dev: true

  /has-bigints/1.0.2:
    resolution: {integrity: sha512-tSvCKtBr9lkF0Ex0aQiP9N+OpV4zi2r/Nee5VkRDbaqv35RLYMzbwQfFSZZH0kR+Rd6302UJZ2p/bJCEoR3VoQ==}
    dev: true

  /has-flag/1.0.0:
    resolution: {integrity: sha512-DyYHfIYwAJmjAjSSPKANxI8bFY9YtFrgkAfinBojQ8YJTOuOuav64tMUJv584SES4xl74PmuaevIyaLESHdTAA==}
    engines: {node: '>=0.10.0'}
    dev: true

  /has-flag/3.0.0:
    resolution: {integrity: sha512-sKJf1+ceQBr4SMkvQnBDNDtf4TXpVhVGateu0t918bl30FnbE2m4vNLX+VWe/dpjlb+HugGYzW7uQXH98HPEYw==}
    engines: {node: '>=4'}

  /has-flag/4.0.0:
    resolution: {integrity: sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==}
    engines: {node: '>=8'}

  /has-property-descriptors/1.0.0:
    resolution: {integrity: sha512-62DVLZGoiEBDHQyqG4w9xCuZ7eJEwNmJRWw2VY84Oedb7WFcA27fiEVe8oUQx9hAUJ4ekurquucTGwsyO1XGdQ==}
    dependencies:
      get-intrinsic: 1.1.3

  /has-symbols/1.0.3:
    resolution: {integrity: sha512-l3LCuF6MgDNwTDKkdYGEihYjt5pRPbEg46rtlmnSPlUbgmB8LOIrKJbYYFBSbnPaJexMKtiPO8hmeRjRz2Td+A==}
    engines: {node: '>= 0.4'}

  /has-tostringtag/1.0.0:
    resolution: {integrity: sha512-kFjcSNhnlGV1kyoGk7OXKSawH5JOb/LzUc5w9B02hOTO0dfFRjbHQKvg1d6cf3HbeUmtU9VbbV3qzZ2Teh97WQ==}
    engines: {node: '>= 0.4'}
    dependencies:
      has-symbols: 1.0.3
    dev: true

  /has-unicode/2.0.1:
    resolution: {integrity: sha512-8Rf9Y83NBReMnx0gFzA8JImQACstCYWUplepDa9xprwwtmgEZUF0h/i5xSA625zB/I37EtrswSST6OXxwaaIJQ==}
    dev: true

  /has-yarn/2.1.0:
    resolution: {integrity: sha512-UqBRqi4ju7T+TqGNdqAO0PaSVGsDGJUBQvk9eUWNGRY1CFGDzYhLWoM7JQEemnlvVcv/YEmc2wNW8BC24EnUsw==}
    engines: {node: '>=8'}

  /has/1.0.3:
    resolution: {integrity: sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==}
    engines: {node: '>= 0.4.0'}
    dependencies:
      function-bind: 1.1.1

  /hast-to-hyperscript/9.0.1:
    resolution: {integrity: sha512-zQgLKqF+O2F72S1aa4y2ivxzSlko3MAvxkwG8ehGmNiqd98BIN3JM1rAJPmplEyLmGLO2QZYJtIneOSZ2YbJuA==}
    dependencies:
      '@types/unist': 2.0.6
      comma-separated-tokens: 1.0.8
      property-information: 5.6.0
      space-separated-tokens: 1.1.5
      style-to-object: 0.3.0
      unist-util-is: 4.1.0
      web-namespaces: 1.1.4

  /hast-util-from-parse5/6.0.1:
    resolution: {integrity: sha512-jeJUWiN5pSxW12Rh01smtVkZgZr33wBokLzKLwinYOUfSzm1Nl/c3GUGebDyOKjdsRgMvoVbV0VpAcpjF4NrJA==}
    dependencies:
      '@types/parse5': 5.0.3
      hastscript: 6.0.0
      property-information: 5.6.0
      vfile: 4.2.1
      vfile-location: 3.2.0
      web-namespaces: 1.1.4

  /hast-util-parse-selector/2.2.5:
    resolution: {integrity: sha512-7j6mrk/qqkSehsM92wQjdIgWM2/BW61u/53G6xmC8i1OmEdKLHbk419QKQUjz6LglWsfqoiHmyMRkP1BGjecNQ==}

  /hast-util-raw/6.0.1:
    resolution: {integrity: sha512-ZMuiYA+UF7BXBtsTBNcLBF5HzXzkyE6MLzJnL605LKE8GJylNjGc4jjxazAHUtcwT5/CEt6afRKViYB4X66dig==}
    dependencies:
      '@types/hast': 2.3.4
      hast-util-from-parse5: 6.0.1
      hast-util-to-parse5: 6.0.0
      html-void-elements: 1.0.5
      parse5: 6.0.1
      unist-util-position: 3.1.0
      vfile: 4.2.1
      web-namespaces: 1.1.4
      xtend: 4.0.2
      zwitch: 1.0.5

  /hast-util-to-parse5/6.0.0:
    resolution: {integrity: sha512-Lu5m6Lgm/fWuz8eWnrKezHtVY83JeRGaNQ2kn9aJgqaxvVkFCZQBEhgodZUDUvoodgyROHDb3r5IxAEdl6suJQ==}
    dependencies:
      hast-to-hyperscript: 9.0.1
      property-information: 5.6.0
      web-namespaces: 1.1.4
      xtend: 4.0.2
      zwitch: 1.0.5

  /hastscript/6.0.0:
    resolution: {integrity: sha512-nDM6bvd7lIqDUiYEiu5Sl/+6ReP0BMk/2f4U/Rooccxkj0P5nm+acM5PrGJ/t5I8qPGiqZSE6hVAwZEdZIvP4w==}
    dependencies:
      '@types/hast': 2.3.4
      comma-separated-tokens: 1.0.8
      hast-util-parse-selector: 2.2.5
      property-information: 5.6.0
      space-separated-tokens: 1.1.5

  /he/1.2.0:
    resolution: {integrity: sha512-F/1DnUGPopORZi0ni+CvrCgHQ5FyEAHRLSApuYWMmrbSwoN2Mn/7k+Gl38gJnR7yyDZk6WLXwiGod1JOWNDKGw==}
    hasBin: true

  /history/4.10.1:
    resolution: {integrity: sha512-36nwAD620w12kuzPAsyINPWJqlNbij+hpK1k9XRloDtym8mxzGYl2c17LnV6IAGB2Dmg4tEa7G7DlawS0+qjew==}
    dependencies:
      '@babel/runtime': 7.17.9
      loose-envify: 1.4.0
      resolve-pathname: 3.0.0
      tiny-invariant: 1.2.0
      tiny-warning: 1.0.3
      value-equal: 1.0.1

  /history/5.3.0:
    resolution: {integrity: sha512-ZqaKwjjrAYUYfLG+htGaIIZ4nioX2L70ZUMIFysS3xvBsSG4x/n1V6TXV3N8ZYNuFGlDirFg32T7B6WOUPDYcQ==}
    dependencies:
      '@babel/runtime': 7.17.9
    dev: true

  /hoist-non-react-statics/3.3.2:
    resolution: {integrity: sha512-/gGivxi8JPKWNm/W0jSmzcMPpfpPLc3dY/6GxhX2hQ9iGj3aDfklV4ET7NjKpSinLpJ5vafa9iiGIEZg10SfBw==}
    dependencies:
      react-is: 16.13.1

  /hosted-git-info/2.8.9:
    resolution: {integrity: sha512-mxIDAb9Lsm6DoOJ7xH+5+X4y1LU/4Hi50L9C5sIswK3JzULS4bwk1FvjdBgvYR4bzT4tuUQiC15FE2f5HbLvYw==}
    dev: true

  /hosted-git-info/4.1.0:
    resolution: {integrity: sha512-kyCuEOWjJqZuDbRHzL8V93NzQhwIB71oFWSyzVo+KPZI+pnQPPxucdkrOZvkLRnrf5URsQM+IJ09Dw29cRALIA==}
    engines: {node: '>=10'}
    dependencies:
      lru-cache: 6.0.0
    dev: true

  /hpack.js/2.1.6:
    resolution: {integrity: sha512-zJxVehUdMGIKsRaNt7apO2Gqp0BdqW5yaiGHXXmbpvxgBYVZnAql+BJb4RO5ad2MgpbZKn5G6nMnegrH1FcNYQ==}
    dependencies:
      inherits: 2.0.4
      obuf: 1.1.2
      readable-stream: 2.3.7
      wbuf: 1.7.3

  /html-encoding-sniffer/2.0.1:
    resolution: {integrity: sha512-D5JbOMBIR/TVZkubHT+OyT2705QvogUW4IBn6nHd756OwieSF9aDYFj4dv6HHEVGYbHaLETa3WggZYWWMyy3ZQ==}
    engines: {node: '>=10'}
    dependencies:
      whatwg-encoding: 1.0.5
    dev: true

  /html-entities/2.3.3:
    resolution: {integrity: sha512-DV5Ln36z34NNTDgnz0EWGBLZENelNAtkiFA4kyNOG2tDI6Mz1uSWiq1wAKdyjnJwyDiDO7Fa2SO1CTxPXL8VxA==}

  /html-escaper/2.0.2:
    resolution: {integrity: sha512-H2iMtd0I4Mt5eYiapRdIDjp+XzelXQ0tFE4JS7YFwFevXXMmOp9myNrUvCg0D6ws8iqkRPBfKHgbwig1SmlLfg==}
    dev: true

  /html-minifier-terser/6.1.0:
    resolution: {integrity: sha512-YXxSlJBZTP7RS3tWnQw74ooKa6L9b9i9QYXY21eUEvhZ3u9XLfv6OnFsQq6RxkhHygsaUMvYsZRV5rU/OVNZxw==}
    engines: {node: '>=12'}
    hasBin: true
    dependencies:
      camel-case: 4.1.2
      clean-css: 5.3.1
      commander: 8.3.0
      he: 1.2.0
      param-case: 3.0.4
      relateurl: 0.2.7
      terser: 5.15.0

  /html-tags/3.2.0:
    resolution: {integrity: sha512-vy7ClnArOZwCnqZgvv+ddgHgJiAFXe3Ge9ML5/mBctVJoUoYPCdxVucOywjDARn6CVoh3dRSFdPHy2sX80L0Wg==}
    engines: {node: '>=8'}

  /html-void-elements/1.0.5:
    resolution: {integrity: sha512-uE/TxKuyNIcx44cIWnjr/rfIATDH7ZaOMmstu0CwhFG1Dunhlp4OC6/NMbhiwoq5BpW0ubi303qnEk/PZj614w==}

  /html-webpack-plugin/5.5.0_webpack@5.68.0:
    resolution: {integrity: sha512-sy88PC2cRTVxvETRgUHFrL4No3UxvcH8G1NepGhqaTT+GXN2kTamqasot0inS5hXeg1cMbFDt27zzo9p35lZVw==}
    engines: {node: '>=10.13.0'}
    peerDependencies:
      webpack: ^5.20.0
    dependencies:
      '@types/html-minifier-terser': 6.1.0
      html-minifier-terser: 6.1.0
      lodash: 4.17.21
      pretty-error: 4.0.0
      tapable: 2.2.1
      webpack: 5.68.0
    dev: true

  /html-webpack-plugin/5.5.0_webpack@5.74.0:
    resolution: {integrity: sha512-sy88PC2cRTVxvETRgUHFrL4No3UxvcH8G1NepGhqaTT+GXN2kTamqasot0inS5hXeg1cMbFDt27zzo9p35lZVw==}
    engines: {node: '>=10.13.0'}
    peerDependencies:
      webpack: ^5.20.0
    dependencies:
      '@types/html-minifier-terser': 6.1.0
      html-minifier-terser: 6.1.0
      lodash: 4.17.21
      pretty-error: 4.0.0
      tapable: 2.2.1
      webpack: 5.74.0

  /htmlparser2/6.1.0:
    resolution: {integrity: sha512-gyyPk6rgonLFEDGoeRgQNaEUvdJ4ktTmmUh/h2t7s+M8oPpIPxgNACWa+6ESR57kXstwqPiCut0V8NRpcwgU7A==}
    dependencies:
      domelementtype: 2.3.0
      domhandler: 4.3.1
      domutils: 2.8.0
      entities: 2.2.0

  /htmlparser2/8.0.1:
    resolution: {integrity: sha512-4lVbmc1diZC7GUJQtRQ5yBAeUCL1exyMwmForWkRLnwyzWBFxN633SALPMGYaWZvKe9j1pRZJpauvmxENSp/EA==}
    dependencies:
      domelementtype: 2.3.0
      domhandler: 5.0.3
      domutils: 3.0.1
      entities: 4.4.0
    dev: false

  /http-cache-semantics/4.1.0:
    resolution: {integrity: sha512-carPklcUh7ROWRK7Cv27RPtdhYhUsela/ue5/jKzjegVvXDqM2ILE9Q2BGn9JZJh1g87cp56su/FgQSzcWS8cQ==}

  /http-deceiver/1.2.7:
    resolution: {integrity: sha512-LmpOGxTfbpgtGVxJrj5k7asXHCgNZp5nLfp+hWc8QQRqtb7fUy6kRY3BO1h9ddF6yIPYUARgxGOwB42DnxIaNw==}

  /http-errors/1.6.3:
    resolution: {integrity: sha512-lks+lVC8dgGyh97jxvxeYTWQFvh4uw4yC12gVl63Cg30sjPX4wuGcdkICVXDAESr6OJGjqGA8Iz5mkeN6zlD7A==}
    engines: {node: '>= 0.6'}
    dependencies:
      depd: 1.1.2
      inherits: 2.0.3
      setprototypeof: 1.1.0
      statuses: 1.5.0

  /http-errors/2.0.0:
    resolution: {integrity: sha512-FtwrG/euBzaEjYeRqOgly7G0qviiXoJWnvEH2Z1plBdXgbyjv34pHTSb9zoeHMyDy33+DWy5Wt9Wo+TURtOYSQ==}
    engines: {node: '>= 0.8'}
    dependencies:
      depd: 2.0.0
      inherits: 2.0.4
      setprototypeof: 1.2.0
      statuses: 2.0.1
      toidentifier: 1.0.1

  /http-parser-js/0.5.8:
    resolution: {integrity: sha512-SGeBX54F94Wgu5RH3X5jsDtf4eHyRogWX1XGT3b4HuW3tQPM4AaBzoUji/4AAJNXCEOWZ5O0DgZmJw1947gD5Q==}

  /http-proxy-agent/4.0.1:
    resolution: {integrity: sha512-k0zdNgqWTGA6aeIRVpvfVob4fL52dTfaehylg0Y4UvSySvOq/Y+BOyPrgpUrA7HylqvU8vIZGsRuXmspskV0Tg==}
    engines: {node: '>= 6'}
    dependencies:
      '@tootallnate/once': 1.1.2
      agent-base: 6.0.2
      debug: 4.3.4
    transitivePeerDependencies:
      - supports-color
    dev: true

  /http-proxy-middleware/2.0.6_@types+express@4.17.14:
    resolution: {integrity: sha512-ya/UeJ6HVBYxrgYotAZo1KvPWlgB48kUJLDePFeneHsVujFaW5WNj2NgWCAE//B1Dl02BIfYlpNgBy8Kf8Rjmw==}
    engines: {node: '>=12.0.0'}
    peerDependencies:
      '@types/express': ^4.17.13
    peerDependenciesMeta:
      '@types/express':
        optional: true
    dependencies:
      '@types/express': 4.17.14
      '@types/http-proxy': 1.17.9
      http-proxy: 1.18.1
      is-glob: 4.0.3
      is-plain-obj: 3.0.0
      micromatch: 4.0.5
    transitivePeerDependencies:
      - debug

  /http-proxy/1.18.1:
    resolution: {integrity: sha512-7mz/721AbnJwIVbnaSv1Cz3Am0ZLT/UBwkC92VlxhXv/k/BBQfM2fXElQNC27BVGr0uwUpplYPQM9LnaBMR5NQ==}
    engines: {node: '>=8.0.0'}
    dependencies:
      eventemitter3: 4.0.7
      follow-redirects: 1.15.2
      requires-port: 1.0.0
    transitivePeerDependencies:
      - debug

  /http-signature/1.2.0:
    resolution: {integrity: sha512-CAbnr6Rz4CYQkLYUtSNXxQPUH2gK8f3iWexVlsnMeD+GjlsQ0Xsy1cOX+mN3dtxYomRy21CiOzU8Uhw6OwncEQ==}
    engines: {node: '>=0.8', npm: '>=1.3.7'}
    dependencies:
      assert-plus: 1.0.0
      jsprim: 1.4.2
      sshpk: 1.17.0
    dev: true

  /https-proxy-agent/5.0.1:
    resolution: {integrity: sha512-dFcAjpTQFgoLMzC2VwU+C/CbS7uRL0lWmxDITmqm7C+7F0Odmj6s9l6alZc6AELXhrnggM2CeWSXHGOdX2YtwA==}
    engines: {node: '>= 6'}
    dependencies:
      agent-base: 6.0.2
      debug: 4.3.4
    transitivePeerDependencies:
      - supports-color
    dev: true

  /human-signals/2.1.0:
    resolution: {integrity: sha512-B4FFZ6q/T2jhhksgkbEW3HBvWIfDW85snkQgawt07S7J5QXTk6BkNV+0yAeZrM5QpMAdYlocGoljn0sJ/WQkFw==}
    engines: {node: '>=10.17.0'}

  /iconv-lite/0.4.24:
    resolution: {integrity: sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==}
    engines: {node: '>=0.10.0'}
    dependencies:
      safer-buffer: 2.1.2

  /iconv-lite/0.6.3:
    resolution: {integrity: sha512-4fCk79wshMdzMp2rH06qWrJE4iolqLhCUH+OiuIgU++RB0+94NlDL81atO7GX55uUKueo0txHNtvEyI6D7WdMw==}
    engines: {node: '>=0.10.0'}
    dependencies:
      safer-buffer: 2.1.2
    dev: true

  /icss-replace-symbols/1.1.0:
    resolution: {integrity: sha512-chIaY3Vh2mh2Q3RGXttaDIzeiPvaVXJ+C4DAh/w3c37SKZ/U6PGMmuicR2EQQp9bKG8zLMCl7I+PtIoOOPp8Gg==}
    dev: true

  /icss-utils/5.1.0_postcss@8.4.16:
    resolution: {integrity: sha512-soFhflCVWLfRNOPU3iv5Z9VUdT44xFRbzjLsEzSr5AQmgqPMTHdU3PMT1Cf1ssx8fLNJDA1juftYl+PUcv3MqA==}
    engines: {node: ^10 || ^12 || >= 14}
    peerDependencies:
      postcss: ^8.1.0
    dependencies:
      postcss: 8.4.16

  /ignore/5.2.0:
    resolution: {integrity: sha512-CmxgYGiEPCLhfLnpPp1MoRmifwEIOgjcHXxOBjv7mY96c+eWScsOP9c112ZyLdWHi0FxHjI+4uVhKYp/gcdRmQ==}
    engines: {node: '>= 4'}

  /image-size/1.0.2:
    resolution: {integrity: sha512-xfOoWjceHntRb3qFCrh5ZFORYH8XCdYpASltMhZ/Q0KZiOwjdE/Yl2QCiWdwD+lygV5bMCvauzgu5PxBX/Yerg==}
    engines: {node: '>=14.0.0'}
    hasBin: true
    dependencies:
      queue: 6.0.2

  /immer/9.0.15:
    resolution: {integrity: sha512-2eB/sswms9AEUSkOm4SbV5Y7Vmt/bKRwByd52jfLkW4OLYeaTP3EEiJ9agqU0O/tq6Dk62Zfj+TJSqfm1rLVGQ==}

  /immutable/4.1.0:
    resolution: {integrity: sha512-oNkuqVTA8jqG1Q6c+UglTOD1xhC1BtjKI7XkCXRkZHrN5m18/XsnUp8Q89GkQO/z+0WjonSvl0FLhDYftp46nQ==}
    dev: true

  /import-fresh/3.3.0:
    resolution: {integrity: sha512-veYYhQa+D1QBKznvhUHxb8faxlrwUnxseDAbAp457E0wLNio2bOSKnjYDhMj+YiAq61xrMGhQk9iXVk5FzgQMw==}
    engines: {node: '>=6'}
    dependencies:
      parent-module: 1.0.1
      resolve-from: 4.0.0

  /import-lazy/2.1.0:
    resolution: {integrity: sha512-m7ZEHgtw69qOGw+jwxXkHlrlIPdTGkyh66zXZ1ajZbxkDBNjSY/LGbmjc7h0s2ELsUDTAhFr55TrPSSqJGPG0A==}
    engines: {node: '>=4'}

  /import-lazy/4.0.0:
    resolution: {integrity: sha512-rKtvo6a868b5Hu3heneU+L4yEQ4jYKLtjpnPeUdK7h0yzXGmyBTypknlkCvHFBqfX9YlorEiMM6Dnq/5atfHkw==}
    engines: {node: '>=8'}

  /imurmurhash/0.1.4:
    resolution: {integrity: sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==}
    engines: {node: '>=0.8.19'}

  /indent-string/4.0.0:
    resolution: {integrity: sha512-EdDDZu4A2OyIK7Lr/2zG+w5jmbuk1DVBnEwREQvBzspBJkCEbRa8GxU1lghYcaGJCnRWibjDXlq779X1/y5xwg==}
    engines: {node: '>=8'}

  /infima/0.2.0-alpha.42:
    resolution: {integrity: sha512-ift8OXNbQQwtbIt6z16KnSWP7uJ/SysSMFI4F87MNRTicypfl4Pv3E2OGVv6N3nSZFJvA8imYulCBS64iyHYww==}
    engines: {node: '>=12'}
    dev: false

  /inflight/1.0.6:
    resolution: {integrity: sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==}
    dependencies:
      once: 1.4.0
      wrappy: 1.0.2

  /inherits/2.0.3:
    resolution: {integrity: sha512-x00IRNXNy63jwGkJmzPigoySHbaqpNuzKbBOmzK+g2OdZpQ9w+sxCN+VSB3ja7IAge2OP2qpfxTjeNcyjmW1uw==}

  /inherits/2.0.4:
    resolution: {integrity: sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==}

  /ini/1.3.8:
    resolution: {integrity: sha512-JV/yugV2uzW5iMRSiZAyDtQd+nxtUnjeLt0acNdw98kKLrvuRVyB80tsREOE7yvGVgalhZ6RNXCmEHkUKBKxew==}

  /ini/2.0.0:
    resolution: {integrity: sha512-7PnF4oN3CvZF23ADhA5wRaYEQpJ8qygSkbtTXWBeXWXmEVRXK+1ITciHWwHhsjv1TmW0MgacIv6hEi5pX5NQdA==}
    engines: {node: '>=10'}

  /inline-style-parser/0.1.1:
    resolution: {integrity: sha512-7NXolsK4CAS5+xvdj5OMMbI962hU/wvwoxk+LWR9Ek9bVtyuuYScDN6eS0rUm6TxApFpw7CX1o4uJzcd4AyD3Q==}

  /internal-slot/1.0.3:
    resolution: {integrity: sha512-O0DB1JC/sPyZl7cIo78n5dR7eUSwwpYPiXRhTzNxZVAMUuB8vlnRFyLxdrVToks6XPLVnFfbzaVd5WLjhgg+vA==}
    engines: {node: '>= 0.4'}
    dependencies:
      get-intrinsic: 1.1.3
      has: 1.0.3
      side-channel: 1.0.4
    dev: true

  /interpret/1.4.0:
    resolution: {integrity: sha512-agE4QfB2Lkp9uICn7BAqoscw4SZP9kTE2hxiFI3jBPmXJfdqiahTbUuKGsMoN2GtqL9AxhYioAcVvgsb1HvRbA==}
    engines: {node: '>= 0.10'}

  /invariant/2.2.4:
    resolution: {integrity: sha512-phJfQVBuaJM5raOpJjSfkiD6BpbCE4Ns//LaXl6wGYtUBY83nWS6Rf9tXm2e8VaK60JEjYldbPif/A2B1C2gNA==}
    dependencies:
      loose-envify: 1.4.0

  /ipaddr.js/1.9.1:
    resolution: {integrity: sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==}
    engines: {node: '>= 0.10'}

  /ipaddr.js/2.0.1:
    resolution: {integrity: sha512-1qTgH9NG+IIJ4yfKs2e6Pp1bZg8wbDbKHT21HrLIeYBTRLgMYKnMTPAuI3Lcs61nfx5h1xlXnbJtH1kX5/d/ng==}
    engines: {node: '>= 10'}

  /is-alphabetical/1.0.4:
    resolution: {integrity: sha512-DwzsA04LQ10FHTZuL0/grVDk4rFoVH1pjAToYwBrHSxcrBIGQuXrQMtD5U1b0U2XVgKZCTLLP8u2Qxqhy3l2Vg==}

  /is-alphanumerical/1.0.4:
    resolution: {integrity: sha512-UzoZUr+XfVz3t3v4KyGEniVL9BDRoQtY7tOyrRybkVNjDFWyo1yhXNGrrBTQxp3ib9BLAWs7k2YKBQsFRkZG9A==}
    dependencies:
      is-alphabetical: 1.0.4
      is-decimal: 1.0.4

  /is-arrayish/0.2.1:
    resolution: {integrity: sha512-zz06S8t0ozoDXMG+ube26zeCTNXcKIPJZJi8hBrF4idCLms4CG9QtK7qBl1boi5ODzFpjswb5JPmHCbMpjaYzg==}

  /is-bigint/1.0.4:
    resolution: {integrity: sha512-zB9CruMamjym81i2JZ3UMn54PKGsQzsJeo6xvN3HJJ4CAsQNB6iRutp2To77OfCNuoxspsIhzaPoO1zyCEhFOg==}
    dependencies:
      has-bigints: 1.0.2
    dev: true

  /is-binary-path/2.1.0:
    resolution: {integrity: sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==}
    engines: {node: '>=8'}
    dependencies:
      binary-extensions: 2.2.0

  /is-boolean-object/1.1.2:
    resolution: {integrity: sha512-gDYaKHJmnj4aWxyj6YHyXVpdQawtVLHU5cb+eztPGczf6cjuTdwve5ZIEfgXqH4e57An1D1AKf8CZ3kYrQRqYA==}
    engines: {node: '>= 0.4'}
    dependencies:
      call-bind: 1.0.2
      has-tostringtag: 1.0.0
    dev: true

  /is-buffer/2.0.5:
    resolution: {integrity: sha512-i2R6zNFDwgEHJyQUtJEk0XFi1i0dPFn/oqjK3/vPCcDeJvW5NQ83V8QbicfF1SupOaB0h8ntgBC2YiE7dfyctQ==}
    engines: {node: '>=4'}

  /is-callable/1.2.6:
    resolution: {integrity: sha512-krO72EO2NptOGAX2KYyqbP9vYMlNAXdB53rq6f8LXY6RY7JdSR/3BD6wLUlPHSAesmY9vstNrjvqGaCiRK/91Q==}
    engines: {node: '>= 0.4'}
    dev: true

  /is-ci/2.0.0:
    resolution: {integrity: sha512-YfJT7rkpQB0updsdHLGWrvhBJfcfzNNawYDNIyQXJz0IViGf75O8EBPKSdvw2rF+LGCsX4FZ8tcr3b19LcZq4w==}
    hasBin: true
    dependencies:
      ci-info: 2.0.0

  /is-core-module/2.10.0:
    resolution: {integrity: sha512-Erxj2n/LDAZ7H8WNJXd9tw38GYM3dv8rk8Zcs+jJuxYTW7sozH+SS8NtrSjVL1/vpLvWi1hxy96IzjJ3EHTJJg==}
    dependencies:
      has: 1.0.3

  /is-date-object/1.0.5:
    resolution: {integrity: sha512-9YQaSxsAiSwcvS33MBk3wTCVnWK+HhF8VZR2jRxehM16QcVOdHqPn4VPHmRK4lSr38n9JriurInLcP90xsYNfQ==}
    engines: {node: '>= 0.4'}
    dependencies:
      has-tostringtag: 1.0.0
    dev: true

  /is-decimal/1.0.4:
    resolution: {integrity: sha512-RGdriMmQQvZ2aqaQq3awNA6dCGtKpiDFcOzrTWrDAT2MiWrKQVPmxLGHl7Y2nNu6led0kEyoX0enY0qXYsv9zw==}

  /is-docker/2.2.1:
    resolution: {integrity: sha512-F+i2BKsFrH66iaUFc0woD8sLy8getkwTwtOBjvs56Cx4CgJDeKQeqfz8wAYiSb8JOprWhHH5p77PbmYCvvUuXQ==}
    engines: {node: '>=8'}
    hasBin: true

  /is-extendable/0.1.1:
    resolution: {integrity: sha512-5BMULNob1vgFX6EjQw5izWDxrecWK9AM72rugNr0TFldMOi0fj6Jk+zeKIt0xGj4cEfQIJth4w3OKWOJ4f+AFw==}
    engines: {node: '>=0.10.0'}

  /is-extglob/2.1.1:
    resolution: {integrity: sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==}
    engines: {node: '>=0.10.0'}

  /is-fullwidth-code-point/1.0.0:
    resolution: {integrity: sha512-1pqUqRjkhPJ9miNq9SwMfdvi6lBJcd6eFxvfaivQhaH3SgisfiuudvFntdKOmxuee/77l+FPjKrQjWvmPjWrRw==}
    engines: {node: '>=0.10.0'}
    dependencies:
      number-is-nan: 1.0.1
    dev: true

  /is-fullwidth-code-point/2.0.0:
    resolution: {integrity: sha512-VHskAKYM8RfSFXwee5t5cbN5PZeq1Wrh6qd5bkyiXIf6UQcN6w/A0eXM9r6t8d+GYOh+o6ZhiEnb88LN/Y8m2w==}
    engines: {node: '>=4'}
    dev: true

  /is-fullwidth-code-point/3.0.0:
    resolution: {integrity: sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==}
    engines: {node: '>=8'}

  /is-generator-fn/2.1.0:
    resolution: {integrity: sha512-cTIB4yPYL/Grw0EaSzASzg6bBy9gqCofvWN8okThAYIxKJZC+udlRAmGbM0XLeniEJSs8uEgHPGuHSe1XsOLSQ==}
    engines: {node: '>=6'}
    dev: true

  /is-glob/4.0.3:
    resolution: {integrity: sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==}
    engines: {node: '>=0.10.0'}
    dependencies:
      is-extglob: 2.1.1

  /is-hexadecimal/1.0.4:
    resolution: {integrity: sha512-gyPJuv83bHMpocVYoqof5VDiZveEoGoFL8m3BXNb2VW8Xs+rz9kqO8LOQ5DH6EsuvilT1ApazU0pyl+ytbPtlw==}

  /is-installed-globally/0.4.0:
    resolution: {integrity: sha512-iwGqO3J21aaSkC7jWnHP/difazwS7SFeIqxv6wEtLU8Y5KlzFTjyqcSIT0d8s4+dDhKytsk9PJZ2BkS5eZwQRQ==}
    engines: {node: '>=10'}
    dependencies:
      global-dirs: 3.0.0
      is-path-inside: 3.0.3

  /is-negative-zero/2.0.2:
    resolution: {integrity: sha512-dqJvarLawXsFbNDeJW7zAz8ItJ9cd28YufuuFzh0G8pNHjJMnY08Dv7sYX2uF5UpQOwieAeOExEYAWWfu7ZZUA==}
    engines: {node: '>= 0.4'}
    dev: true

  /is-npm/5.0.0:
    resolution: {integrity: sha512-WW/rQLOazUq+ST/bCAVBp/2oMERWLsR7OrKyt052dNDk4DHcDE0/7QSXITlmi+VBcV13DfIbysG3tZJm5RfdBA==}
    engines: {node: '>=10'}

  /is-number-object/1.0.7:
    resolution: {integrity: sha512-k1U0IRzLMo7ZlYIfzRu23Oh6MiIFasgpb9X76eqfFZAqwH44UI4KTBvBYIZ1dSL9ZzChTB9ShHfLkR4pdW5krQ==}
    engines: {node: '>= 0.4'}
    dependencies:
      has-tostringtag: 1.0.0
    dev: true

  /is-number/7.0.0:
    resolution: {integrity: sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==}
    engines: {node: '>=0.12.0'}

  /is-obj/1.0.1:
    resolution: {integrity: sha512-l4RyHgRqGN4Y3+9JHVrNqO+tN0rV5My76uW5/nuO4K1b6vw5G8d/cmFjP9tRfEsdhZNt0IFdZuK/c2Vr4Nb+Qg==}
    engines: {node: '>=0.10.0'}

  /is-obj/2.0.0:
    resolution: {integrity: sha512-drqDG3cbczxxEJRoOXcOjtdp1J/lyp1mNn0xaznRs8+muBhgQcrnbspox5X5fOw0HnMnbfDzvnEMEtqDEJEo8w==}
    engines: {node: '>=8'}

  /is-path-cwd/2.2.0:
    resolution: {integrity: sha512-w942bTcih8fdJPJmQHFzkS76NEP8Kzzvmw92cXsazb8intwLqPibPPdXf4ANdKV3rYMuuQYGIWtvz9JilB3NFQ==}
    engines: {node: '>=6'}

  /is-path-inside/3.0.3:
    resolution: {integrity: sha512-Fd4gABb+ycGAmKou8eMftCupSir5lRxqf4aD/vd0cD2qc4HL07OjCeuHMr8Ro4CoMaeCKDB0/ECBOVWjTwUvPQ==}
    engines: {node: '>=8'}

  /is-plain-obj/1.1.0:
    resolution: {integrity: sha512-yvkRyxmFKEOQ4pNXCmJG5AEQNlXJS5LaONXo5/cLdTZdWvsZ1ioJEonLGAosKlMWE8lwUy/bJzMjcw8az73+Fg==}
    engines: {node: '>=0.10.0'}
    dev: true

  /is-plain-obj/2.1.0:
    resolution: {integrity: sha512-YWnfyRwxL/+SsrWYfOpUtz5b3YD+nyfkHvjbcanzk8zgyO4ASD67uVMRt8k5bM4lLMDnXfriRhOpemw+NfT1eA==}
    engines: {node: '>=8'}

  /is-plain-obj/3.0.0:
    resolution: {integrity: sha512-gwsOE28k+23GP1B6vFl1oVh/WOzmawBrKwo5Ev6wMKzPkaXaCDIQKzLnvsA42DRlbVTWorkgTKIviAKCWkfUwA==}
    engines: {node: '>=10'}

  /is-plain-object/2.0.4:
    resolution: {integrity: sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==}
    engines: {node: '>=0.10.0'}
    dependencies:
      isobject: 3.0.1

  /is-potential-custom-element-name/1.0.1:
    resolution: {integrity: sha512-bCYeRA2rVibKZd+s2625gGnGF/t7DSqDs4dP7CrLA1m7jKWz6pps0LpYLJN8Q64HtmPKJ1hrN3nzPNKFEKOUiQ==}
    dev: true

  /is-regex/1.1.4:
    resolution: {integrity: sha512-kvRdxDsxZjhzUX07ZnLydzS1TU/TJlTUHHY4YLL87e37oUA49DfkLqgy+VjFocowy29cKvcSiu+kIv728jTTVg==}
    engines: {node: '>= 0.4'}
    dependencies:
      call-bind: 1.0.2
      has-tostringtag: 1.0.0
    dev: true

  /is-regexp/1.0.0:
    resolution: {integrity: sha512-7zjFAPO4/gwyQAAgRRmqeEeyIICSdmCqa3tsVHMdBzaXXRiqopZL4Cyghg/XulGWrtABTpbnYYzzIRffLkP4oA==}
    engines: {node: '>=0.10.0'}

  /is-root/2.1.0:
    resolution: {integrity: sha512-AGOriNp96vNBd3HtU+RzFEc75FfR5ymiYv8E553I71SCeXBiMsVDUtdio1OEFvrPyLIQ9tVR5RxXIFe5PUFjMg==}
    engines: {node: '>=6'}

  /is-shared-array-buffer/1.0.2:
    resolution: {integrity: sha512-sqN2UDu1/0y6uvXyStCOzyhAjCSlHceFoMKJW8W9EU9cvic/QdsZ0kEU93HEy3IUEFZIiH/3w+AH/UQbPHNdhA==}
    dependencies:
      call-bind: 1.0.2
    dev: true

  /is-stream/2.0.1:
    resolution: {integrity: sha512-hFoiJiTl63nn+kstHGBtewWSKnQLpyb155KHheA1l39uvtO9nWIop1p3udqPcUd/xbF1VLMO4n7OI6p7RbngDg==}
    engines: {node: '>=8'}

  /is-string/1.0.7:
    resolution: {integrity: sha512-tE2UXzivje6ofPW7l23cjDOMa09gb7xlAqG6jG5ej6uPV32TlWP3NKPigtaGeHNu9fohccRYvIiZMfOOnOYUtg==}
    engines: {node: '>= 0.4'}
    dependencies:
      has-tostringtag: 1.0.0
    dev: true

  /is-symbol/1.0.4:
    resolution: {integrity: sha512-C/CPBqKWnvdcxqIARxyOh4v1UUEOCHpgDa0WYgpKDFMszcrPcffg5uhwSgPCLD2WWxmq6isisz87tzT01tuGhg==}
    engines: {node: '>= 0.4'}
    dependencies:
      has-symbols: 1.0.3
    dev: true

  /is-typedarray/1.0.0:
    resolution: {integrity: sha512-cyA56iCMHAh5CdzjJIa4aohJyeO1YbwLi3Jc35MmRU6poroFjIGZzUzupGiRPOjgHg9TLu43xbpwXk523fMxKA==}

  /is-weakref/1.0.2:
    resolution: {integrity: sha512-qctsuLZmIQ0+vSSMfoVvyFe2+GSEvnmZ2ezTup1SBse9+twCCeial6EEi3Nc2KFcf6+qz2FBPnjXsk8xhKSaPQ==}
    dependencies:
      call-bind: 1.0.2
    dev: true

  /is-whitespace-character/1.0.4:
    resolution: {integrity: sha512-SDweEzfIZM0SJV0EUga669UTKlmL0Pq8Lno0QDQsPnvECB3IM2aP0gdx5TrU0A01MAPfViaZiI2V1QMZLaKK5w==}

  /is-word-character/1.0.4:
    resolution: {integrity: sha512-5SMO8RVennx3nZrqtKwCGyyetPE9VDba5ugvKLaD4KopPG5kR4mQ7tNt/r7feL5yt5h3lpuBbIUmCOG2eSzXHA==}

  /is-wsl/2.2.0:
    resolution: {integrity: sha512-fKzAra0rGJUUBwGBgNkHZuToZcn+TtXHpeCgmkMJMMYx1sQDYaCSyjJBSCa2nH1DGm7s3n1oBnohoVTBaN7Lww==}
    engines: {node: '>=8'}
    dependencies:
      is-docker: 2.2.1

  /is-yarn-global/0.3.0:
    resolution: {integrity: sha512-VjSeb/lHmkoyd8ryPVIKvOCn4D1koMqY+vqyjjUfc3xyKtP4dYOxM44sZrnqQSzSds3xyOrUTLTC9LVCVgLngw==}

  /isarray/0.0.1:
    resolution: {integrity: sha512-D2S+3GLxWH+uhrNEcoh/fnmYeP8E8/zHl644d/jdA0g2uyXvy3sb0qxotE+ne0LtccHknQzWwZEzhak7oJ0COQ==}

  /isarray/1.0.0:
    resolution: {integrity: sha512-VLghIWNM6ELQzo7zwmcg0NmTVyWKYjvIeM83yjp0wRDTmUnrM678fQbcKBo6n2CJEF0szoG//ytg+TKla89ALQ==}

  /isexe/2.0.0:
    resolution: {integrity: sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==}

  /isobject/3.0.1:
    resolution: {integrity: sha512-WhB9zCku7EGTj/HQQRz5aUQEUeoQZH2bWcltRErOpymJ4boYE6wL9Tbr23krRPSZ+C5zqNSrSw+Cc7sZZ4b7vg==}
    engines: {node: '>=0.10.0'}

  /isstream/0.1.2:
    resolution: {integrity: sha512-Yljz7ffyPbrLpLngrMtZ7NduUgVvi6wG9RJ9IUcyCd59YQ911PBJphODUcbOVbqYfxe1wuYf/LJ8PauMRwsM/g==}
    dev: true

  /istanbul-lib-coverage/3.2.0:
    resolution: {integrity: sha512-eOeJ5BHCmHYvQK7xt9GkdHuzuCGS1Y6g9Gvnx3Ym33fz/HpLRYxiS0wHNr+m/MBC8B647Xt608vCDEvhl9c6Mw==}
    engines: {node: '>=8'}
    dev: true

  /istanbul-lib-instrument/5.2.0:
    resolution: {integrity: sha512-6Lthe1hqXHBNsqvgDzGO6l03XNeu3CrG4RqQ1KM9+l5+jNGpEJfIELx1NS3SEHmJQA8np/u+E4EPRKRiu6m19A==}
    engines: {node: '>=8'}
    dependencies:
      '@babel/core': 7.18.13
      '@babel/parser': 7.19.1
      '@istanbuljs/schema': 0.1.3
      istanbul-lib-coverage: 3.2.0
      semver: 6.3.0
    transitivePeerDependencies:
      - supports-color
    dev: true

  /istanbul-lib-report/3.0.0:
    resolution: {integrity: sha512-wcdi+uAKzfiGT2abPpKZ0hSU1rGQjUQnLvtY5MpQ7QCTahD3VODhcu4wcfY1YtkGaDD5yuydOLINXsfbus9ROw==}
    engines: {node: '>=8'}
    dependencies:
      istanbul-lib-coverage: 3.2.0
      make-dir: 3.1.0
      supports-color: 7.2.0
    dev: true

  /istanbul-lib-source-maps/4.0.1:
    resolution: {integrity: sha512-n3s8EwkdFIJCG3BPKBYvskgXGoy88ARzvegkitk60NxRdwltLOTaH7CUiMRXvwYorl0Q712iEjcWB+fK/MrWVw==}
    engines: {node: '>=10'}
    dependencies:
      debug: 4.3.4
      istanbul-lib-coverage: 3.2.0
      source-map: 0.6.1
    transitivePeerDependencies:
      - supports-color
    dev: true

  /istanbul-reports/3.1.5:
    resolution: {integrity: sha512-nUsEMa9pBt/NOHqbcbeJEgqIlY/K7rVWUX6Lql2orY5e9roQOthbR3vtY4zzf2orPELg80fnxxk9zUyPlgwD1w==}
    engines: {node: '>=8'}
    dependencies:
      html-escaper: 2.0.2
      istanbul-lib-report: 3.0.0
    dev: true

  /jest-changed-files/27.5.1:
    resolution: {integrity: sha512-buBLMiByfWGCoMsLLzGUUSpAmIAGnbR2KJoMN10ziLhOLvP4e0SlypHnAel8iqQXTrcbmfEY9sSqae5sgUsTvw==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/types': 27.5.1
      execa: 5.1.1
      throat: 6.0.1
    dev: true

  /jest-circus/27.5.1:
    resolution: {integrity: sha512-D95R7x5UtlMA5iBYsOHFFbMD/GVA4R/Kdq15f7xYWUfWHBto9NYRsOvnSauTgdF+ogCpJ4tyKOXhUifxS65gdw==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/environment': 27.5.1
      '@jest/test-result': 27.5.1
      '@jest/types': 27.5.1
      '@types/node': 14.18.23
      chalk: 4.1.2
      co: 4.6.0
      dedent: 0.7.0
      expect: 27.5.1
      is-generator-fn: 2.1.0
      jest-each: 27.5.1
      jest-matcher-utils: 27.5.1
      jest-message-util: 27.5.1
      jest-runtime: 27.5.1
      jest-snapshot: 27.5.1
      jest-util: 27.5.1
      pretty-format: 27.5.1
      slash: 3.0.0
      stack-utils: 2.0.5
      throat: 6.0.1
    transitivePeerDependencies:
      - supports-color
    dev: true

  /jest-config/27.4.7:
    resolution: {integrity: sha512-xz/o/KJJEedHMrIY9v2ParIoYSrSVY6IVeE4z5Z3i101GoA5XgfbJz+1C8EYPsv7u7f39dS8F9v46BHDhn0vlw==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    peerDependencies:
      ts-node: '>=9.0.0'
    peerDependenciesMeta:
      ts-node:
        optional: true
    dependencies:
      '@babel/core': 7.18.13
      '@jest/test-sequencer': 27.5.1
      '@jest/types': 27.5.1
      babel-jest: 27.5.1_@babel+core@7.18.13
      chalk: 4.1.2
      ci-info: 3.4.0
      deepmerge: 4.2.2
      glob: 7.2.3
      graceful-fs: 4.2.10
      jest-circus: 27.5.1
      jest-environment-jsdom: 27.5.1
      jest-environment-node: 27.4.6
      jest-get-type: 27.5.1
      jest-jasmine2: 27.5.1
      jest-regex-util: 27.5.1
      jest-resolve: 27.4.6
      jest-runner: 27.5.1
      jest-util: 27.5.1
      jest-validate: 27.5.1
      micromatch: 4.0.5
      pretty-format: 27.5.1
      slash: 3.0.0
    transitivePeerDependencies:
      - bufferutil
      - canvas
      - supports-color
      - utf-8-validate
    dev: true

  /jest-diff/27.5.1:
    resolution: {integrity: sha512-m0NvkX55LDt9T4mctTEgnZk3fmEg3NRYutvMPWM/0iPnkFj2wIeF45O1718cMSOFO1vINkqmxqD8vE37uTEbqw==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      chalk: 4.1.2
      diff-sequences: 27.5.1
      jest-get-type: 27.5.1
      pretty-format: 27.5.1
    dev: true

  /jest-diff/29.0.3:
    resolution: {integrity: sha512-+X/AIF5G/vX9fWK+Db9bi9BQas7M9oBME7egU7psbn4jlszLFCu0dW63UgeE6cs/GANq4fLaT+8sGHQQ0eCUfg==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    dependencies:
      chalk: 4.1.2
      diff-sequences: 29.0.0
      jest-get-type: 29.0.0
      pretty-format: 29.0.3
    dev: true

  /jest-docblock/27.5.1:
    resolution: {integrity: sha512-rl7hlABeTsRYxKiUfpHrQrG4e2obOiTQWfMEH3PxPjOtdsfLQO4ReWSZaQ7DETm4xu07rl4q/h4zcKXyU0/OzQ==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      detect-newline: 3.1.0
    dev: true

  /jest-each/27.5.1:
    resolution: {integrity: sha512-1Ff6p+FbhT/bXQnEouYy00bkNSY7OUpfIcmdl8vZ31A1UUaurOLPA8a8BbJOF2RDUElwJhmeaV7LnagI+5UwNQ==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/types': 27.5.1
      chalk: 4.1.2
      jest-get-type: 27.5.1
      jest-util: 27.5.1
      pretty-format: 27.5.1
    dev: true

  /jest-environment-jsdom/27.4.6:
    resolution: {integrity: sha512-o3dx5p/kHPbUlRvSNjypEcEtgs6LmvESMzgRFQE6c+Prwl2JLA4RZ7qAnxc5VM8kutsGRTB15jXeeSbJsKN9iA==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/environment': 27.5.1
      '@jest/fake-timers': 27.5.1
      '@jest/types': 27.5.1
      '@types/node': 14.18.23
      jest-mock: 27.5.1
      jest-util: 27.5.1
      jsdom: 16.7.0
    transitivePeerDependencies:
      - bufferutil
      - canvas
      - supports-color
      - utf-8-validate
    dev: true

  /jest-environment-jsdom/27.5.1:
    resolution: {integrity: sha512-TFBvkTC1Hnnnrka/fUb56atfDtJ9VMZ94JkjTbggl1PEpwrYtUBKMezB3inLmWqQsXYLcMwNoDQwoBTAvFfsfw==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/environment': 27.5.1
      '@jest/fake-timers': 27.5.1
      '@jest/types': 27.5.1
      '@types/node': 14.18.23
      jest-mock: 27.5.1
      jest-util: 27.5.1
      jsdom: 16.7.0
    transitivePeerDependencies:
      - bufferutil
      - canvas
      - supports-color
      - utf-8-validate
    dev: true

  /jest-environment-node/27.4.6:
    resolution: {integrity: sha512-yfHlZ9m+kzTKZV0hVfhVu6GuDxKAYeFHrfulmy7Jxwsq4V7+ZK7f+c0XP/tbVDMQW7E4neG2u147hFkuVz0MlQ==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/environment': 27.5.1
      '@jest/fake-timers': 27.5.1
      '@jest/types': 27.5.1
      '@types/node': 14.18.23
      jest-mock: 27.5.1
      jest-util: 27.5.1
    dev: true

  /jest-environment-node/27.5.1:
    resolution: {integrity: sha512-Jt4ZUnxdOsTGwSRAfKEnE6BcwsSPNOijjwifq5sDFSA2kesnXTvNqKHYgM0hDq3549Uf/KzdXNYn4wMZJPlFLw==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/environment': 27.5.1
      '@jest/fake-timers': 27.5.1
      '@jest/types': 27.5.1
      '@types/node': 14.18.23
      jest-mock: 27.5.1
      jest-util: 27.5.1
    dev: true

  /jest-get-type/27.5.1:
    resolution: {integrity: sha512-2KY95ksYSaK7DMBWQn6dQz3kqAf3BB64y2udeG+hv4KfSOb9qwcYQstTJc1KCbsix+wLZWZYN8t7nwX3GOBLRw==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dev: true

  /jest-get-type/29.0.0:
    resolution: {integrity: sha512-83X19z/HuLKYXYHskZlBAShO7UfLFXu/vWajw9ZNJASN32li8yHMaVGAQqxFW1RCFOkB7cubaL6FaJVQqqJLSw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    dev: true

  /jest-haste-map/27.5.1:
    resolution: {integrity: sha512-7GgkZ4Fw4NFbMSDSpZwXeBiIbx+t/46nJ2QitkOjvwPYyZmqttu2TDSimMHP1EkPOi4xUZAN1doE5Vd25H4Jng==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/types': 27.5.1
      '@types/graceful-fs': 4.1.5
      '@types/node': 14.18.23
      anymatch: 3.1.2
      fb-watchman: 2.0.1
      graceful-fs: 4.2.10
      jest-regex-util: 27.5.1
      jest-serializer: 27.5.1
      jest-util: 27.5.1
      jest-worker: 27.5.1
      micromatch: 4.0.5
      walker: 1.0.8
    optionalDependencies:
      fsevents: 2.3.2
    dev: true

  /jest-jasmine2/27.5.1:
    resolution: {integrity: sha512-jtq7VVyG8SqAorDpApwiJJImd0V2wv1xzdheGHRGyuT7gZm6gG47QEskOlzsN1PG/6WNaCo5pmwMHDf3AkG2pQ==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/environment': 27.5.1
      '@jest/source-map': 27.5.1
      '@jest/test-result': 27.5.1
      '@jest/types': 27.5.1
      '@types/node': 14.18.23
      chalk: 4.1.2
      co: 4.6.0
      expect: 27.5.1
      is-generator-fn: 2.1.0
      jest-each: 27.5.1
      jest-matcher-utils: 27.5.1
      jest-message-util: 27.5.1
      jest-runtime: 27.5.1
      jest-snapshot: 27.5.1
      jest-util: 27.5.1
      pretty-format: 27.5.1
      throat: 6.0.1
    transitivePeerDependencies:
      - supports-color
    dev: true

  /jest-leak-detector/27.5.1:
    resolution: {integrity: sha512-POXfWAMvfU6WMUXftV4HolnJfnPOGEu10fscNCA76KBpRRhcMN2c8d3iT2pxQS3HLbA+5X4sOUPzYO2NUyIlHQ==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      jest-get-type: 27.5.1
      pretty-format: 27.5.1
    dev: true

  /jest-matcher-utils/27.5.1:
    resolution: {integrity: sha512-z2uTx/T6LBaCoNWNFWwChLBKYxTMcGBRjAt+2SbP929/Fflb9aa5LGma654Rz8z9HLxsrUaYzxE9T/EFIL/PAw==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      chalk: 4.1.2
      jest-diff: 27.5.1
      jest-get-type: 27.5.1
      pretty-format: 27.5.1
    dev: true

  /jest-matcher-utils/29.0.3:
    resolution: {integrity: sha512-RsR1+cZ6p1hDV4GSCQTg+9qjeotQCgkaleIKLK7dm+U4V/H2bWedU3RAtLm8+mANzZ7eDV33dMar4pejd7047w==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    dependencies:
      chalk: 4.1.2
      jest-diff: 29.0.3
      jest-get-type: 29.0.0
      pretty-format: 29.0.3
    dev: true

  /jest-message-util/27.5.1:
    resolution: {integrity: sha512-rMyFe1+jnyAAf+NHwTclDz0eAaLkVDdKVHHBFWsBWHnnh5YeJMNWWsv7AbFYXfK3oTqvL7VTWkhNLu1jX24D+g==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@babel/code-frame': 7.18.6
      '@jest/types': 27.5.1
      '@types/stack-utils': 2.0.1
      chalk: 4.1.2
      graceful-fs: 4.2.10
      micromatch: 4.0.5
      pretty-format: 27.5.1
      slash: 3.0.0
      stack-utils: 2.0.5
    dev: true

  /jest-message-util/29.0.3:
    resolution: {integrity: sha512-7T8JiUTtDfppojosORAflABfLsLKMLkBHSWkjNQrjIltGoDzNGn7wEPOSfjqYAGTYME65esQzMJxGDjuLBKdOg==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    dependencies:
      '@babel/code-frame': 7.18.6
      '@jest/types': 29.0.3
      '@types/stack-utils': 2.0.1
      chalk: 4.1.2
      graceful-fs: 4.2.10
      micromatch: 4.0.5
      pretty-format: 29.0.3
      slash: 3.0.0
      stack-utils: 2.0.5
    dev: true

  /jest-mock/27.5.1:
    resolution: {integrity: sha512-K4jKbY1d4ENhbrG2zuPWaQBvDly+iZ2yAW+T1fATN78hc0sInwn7wZB8XtlNnvHug5RMwV897Xm4LqmPM4e2Og==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/types': 27.5.1
      '@types/node': 14.18.23
    dev: true

  /jest-pnp-resolver/1.2.2_jest-resolve@27.4.6:
    resolution: {integrity: sha512-olV41bKSMm8BdnuMsewT4jqlZ8+3TCARAXjZGT9jcoSnrfUnRCqnMoF9XEeoWjbzObpqF9dRhHQj0Xb9QdF6/w==}
    engines: {node: '>=6'}
    peerDependencies:
      jest-resolve: '*'
    peerDependenciesMeta:
      jest-resolve:
        optional: true
    dependencies:
      jest-resolve: 27.4.6
    dev: true

  /jest-pnp-resolver/1.2.2_jest-resolve@27.5.1:
    resolution: {integrity: sha512-olV41bKSMm8BdnuMsewT4jqlZ8+3TCARAXjZGT9jcoSnrfUnRCqnMoF9XEeoWjbzObpqF9dRhHQj0Xb9QdF6/w==}
    engines: {node: '>=6'}
    peerDependencies:
      jest-resolve: '*'
    peerDependenciesMeta:
      jest-resolve:
        optional: true
    dependencies:
      jest-resolve: 27.5.1
    dev: true

  /jest-regex-util/27.5.1:
    resolution: {integrity: sha512-4bfKq2zie+x16okqDXjXn9ql2B0dScQu+vcwe4TvFVhkVyuWLqpZrZtXxLLWoXYgn0E87I6r6GRYHF7wFZBUvg==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dev: true

  /jest-resolve-dependencies/27.5.1:
    resolution: {integrity: sha512-QQOOdY4PE39iawDn5rzbIePNigfe5B9Z91GDD1ae/xNDlu9kaat8QQ5EKnNmVWPV54hUdxCVwwj6YMgR2O7IOg==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/types': 27.5.1
      jest-regex-util: 27.5.1
      jest-snapshot: 27.5.1
    transitivePeerDependencies:
      - supports-color
    dev: true

  /jest-resolve/27.4.6:
    resolution: {integrity: sha512-SFfITVApqtirbITKFAO7jOVN45UgFzcRdQanOFzjnbd+CACDoyeX7206JyU92l4cRr73+Qy/TlW51+4vHGt+zw==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/types': 27.5.1
      chalk: 4.1.2
      graceful-fs: 4.2.10
      jest-haste-map: 27.5.1
      jest-pnp-resolver: 1.2.2_jest-resolve@27.4.6
      jest-util: 27.5.1
      jest-validate: 27.5.1
      resolve: 1.22.1
      resolve.exports: 1.1.0
      slash: 3.0.0
    dev: true

  /jest-resolve/27.5.1:
    resolution: {integrity: sha512-FFDy8/9E6CV83IMbDpcjOhumAQPDyETnU2KZ1O98DwTnz8AOBsW/Xv3GySr1mOZdItLR+zDZ7I/UdTFbgSOVCw==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/types': 27.5.1
      chalk: 4.1.2
      graceful-fs: 4.2.10
      jest-haste-map: 27.5.1
      jest-pnp-resolver: 1.2.2_jest-resolve@27.5.1
      jest-util: 27.5.1
      jest-validate: 27.5.1
      resolve: 1.22.1
      resolve.exports: 1.1.0
      slash: 3.0.0
    dev: true

  /jest-runner/27.5.1:
    resolution: {integrity: sha512-g4NPsM4mFCOwFKXO4p/H/kWGdJp9V8kURY2lX8Me2drgXqG7rrZAx5kv+5H7wtt/cdFIjhqYx1HrlqWHaOvDaQ==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/console': 27.5.1
      '@jest/environment': 27.5.1
      '@jest/test-result': 27.5.1
      '@jest/transform': 27.5.1
      '@jest/types': 27.5.1
      '@types/node': 14.18.23
      chalk: 4.1.2
      emittery: 0.8.1
      graceful-fs: 4.2.10
      jest-docblock: 27.5.1
      jest-environment-jsdom: 27.5.1
      jest-environment-node: 27.5.1
      jest-haste-map: 27.5.1
      jest-leak-detector: 27.5.1
      jest-message-util: 27.5.1
      jest-resolve: 27.5.1
      jest-runtime: 27.5.1
      jest-util: 27.5.1
      jest-worker: 27.5.1
      source-map-support: 0.5.21
      throat: 6.0.1
    transitivePeerDependencies:
      - bufferutil
      - canvas
      - supports-color
      - utf-8-validate
    dev: true

  /jest-runtime/27.5.1:
    resolution: {integrity: sha512-o7gxw3Gf+H2IGt8fv0RiyE1+r83FJBRruoA+FXrlHw6xEyBsU8ugA6IPfTdVyA0w8HClpbK+DGJxH59UrNMx8A==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/environment': 27.5.1
      '@jest/fake-timers': 27.5.1
      '@jest/globals': 27.5.1
      '@jest/source-map': 27.5.1
      '@jest/test-result': 27.5.1
      '@jest/transform': 27.5.1
      '@jest/types': 27.5.1
      chalk: 4.1.2
      cjs-module-lexer: 1.2.2
      collect-v8-coverage: 1.0.1
      execa: 5.1.1
      glob: 7.2.3
      graceful-fs: 4.2.10
      jest-haste-map: 27.5.1
      jest-message-util: 27.5.1
      jest-mock: 27.5.1
      jest-regex-util: 27.5.1
      jest-resolve: 27.5.1
      jest-snapshot: 27.5.1
      jest-util: 27.5.1
      slash: 3.0.0
      strip-bom: 4.0.0
    transitivePeerDependencies:
      - supports-color
    dev: true

  /jest-serializer/27.5.1:
    resolution: {integrity: sha512-jZCyo6iIxO1aqUxpuBlwTDMkzOAJS4a3eYz3YzgxxVQFwLeSA7Jfq5cbqCY+JLvTDrWirgusI/0KwxKMgrdf7w==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@types/node': 14.18.23
      graceful-fs: 4.2.10
    dev: true

  /jest-snapshot/27.4.6:
    resolution: {integrity: sha512-fafUCDLQfzuNP9IRcEqaFAMzEe7u5BF7mude51wyWv7VRex60WznZIC7DfKTgSIlJa8aFzYmXclmN328aqSDmQ==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@babel/core': 7.18.13
      '@babel/generator': 7.19.0
      '@babel/plugin-syntax-typescript': 7.18.6_@babel+core@7.18.13
      '@babel/traverse': 7.19.1
      '@babel/types': 7.19.0
      '@jest/transform': 27.4.6
      '@jest/types': 27.5.1
      '@types/babel__traverse': 7.18.1
      '@types/prettier': 2.7.0
      babel-preset-current-node-syntax: 1.0.1_@babel+core@7.18.13
      chalk: 4.1.2
      expect: 27.5.1
      graceful-fs: 4.2.10
      jest-diff: 27.5.1
      jest-get-type: 27.5.1
      jest-haste-map: 27.5.1
      jest-matcher-utils: 27.5.1
      jest-message-util: 27.5.1
      jest-util: 27.5.1
      natural-compare: 1.4.0
      pretty-format: 27.5.1
      semver: 7.3.7
    transitivePeerDependencies:
      - supports-color
    dev: true

  /jest-snapshot/27.5.1:
    resolution: {integrity: sha512-yYykXI5a0I31xX67mgeLw1DZ0bJB+gpq5IpSuCAoyDi0+BhgU/RIrL+RTzDmkNTchvDFWKP8lp+w/42Z3us5sA==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@babel/core': 7.18.13
      '@babel/generator': 7.19.0
      '@babel/plugin-syntax-typescript': 7.18.6_@babel+core@7.18.13
      '@babel/traverse': 7.19.1
      '@babel/types': 7.19.0
      '@jest/transform': 27.5.1
      '@jest/types': 27.5.1
      '@types/babel__traverse': 7.18.1
      '@types/prettier': 2.7.0
      babel-preset-current-node-syntax: 1.0.1_@babel+core@7.18.13
      chalk: 4.1.2
      expect: 27.5.1
      graceful-fs: 4.2.10
      jest-diff: 27.5.1
      jest-get-type: 27.5.1
      jest-haste-map: 27.5.1
      jest-matcher-utils: 27.5.1
      jest-message-util: 27.5.1
      jest-util: 27.5.1
      natural-compare: 1.4.0
      pretty-format: 27.5.1
      semver: 7.3.7
    transitivePeerDependencies:
      - supports-color
    dev: true

  /jest-util/27.5.1:
    resolution: {integrity: sha512-Kv2o/8jNvX1MQ0KGtw480E/w4fBCDOnH6+6DmeKi6LZUIlKA5kwY0YNdlzaWTiVgxqAqik11QyxDOKk543aKXw==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/types': 27.5.1
      '@types/node': 14.18.23
      chalk: 4.1.2
      ci-info: 3.4.0
      graceful-fs: 4.2.10
      picomatch: 2.3.1
    dev: true

  /jest-util/29.0.3:
    resolution: {integrity: sha512-Q0xaG3YRG8QiTC4R6fHjHQPaPpz9pJBEi0AeOE4mQh/FuWOijFjGXMMOfQEaU9i3z76cNR7FobZZUQnL6IyfdQ==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    dependencies:
      '@jest/types': 29.0.3
      '@types/node': 14.18.23
      chalk: 4.1.2
      ci-info: 3.4.0
      graceful-fs: 4.2.10
      picomatch: 2.3.1
    dev: true

  /jest-validate/27.5.1:
    resolution: {integrity: sha512-thkNli0LYTmOI1tDB3FI1S1RTp/Bqyd9pTarJwL87OIBFuqEb5Apv5EaApEudYg4g86e3CT6kM0RowkhtEnCBQ==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/types': 27.5.1
      camelcase: 6.3.0
      chalk: 4.1.2
      jest-get-type: 27.5.1
      leven: 3.1.0
      pretty-format: 27.5.1
    dev: true

  /jest-watcher/27.5.1:
    resolution: {integrity: sha512-z676SuD6Z8o8qbmEGhoEUFOM1+jfEiL3DXHK/xgEiG2EyNYfFG60jluWcupY6dATjfEsKQuibReS1djInQnoVw==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/test-result': 27.5.1
      '@jest/types': 27.5.1
      '@types/node': 14.18.23
      ansi-escapes: 4.3.2
      chalk: 4.1.2
      jest-util: 27.5.1
      string-length: 4.0.2
    dev: true

  /jest-worker/27.5.1:
    resolution: {integrity: sha512-7vuh85V5cdDofPyxn58nrPjBktZo0u9x1g8WtjQol+jZDaE+fhN+cIvTj11GndBnMnyfrUOG1sZQxCdjKh+DKg==}
    engines: {node: '>= 10.13.0'}
    dependencies:
      '@types/node': 14.18.23
      merge-stream: 2.0.0
      supports-color: 8.1.1

  /jju/1.4.0:
    resolution: {integrity: sha512-8wb9Yw966OSxApiCt0K3yNJL8pnNeIv+OEq2YMidz4FKP6nonSRoOXc80iXY4JaN2FC11B9qsNmDsm+ZOfMROA==}

  /joi/17.6.0:
    resolution: {integrity: sha512-OX5dG6DTbcr/kbMFj0KGYxuew69HPcAE3K/sZpEV2nP6e/j/C0HV+HNiBPCASxdx5T7DMoa0s8UeHWMnb6n2zw==}
    dependencies:
      '@hapi/hoek': 9.3.0
      '@hapi/topo': 5.1.0
      '@sideway/address': 4.1.4
      '@sideway/formula': 3.0.0
      '@sideway/pinpoint': 2.0.0

  /js-base64/2.6.4:
    resolution: {integrity: sha512-pZe//GGmwJndub7ZghVHz7vjb2LgC1m8B07Au3eYqeqv9emhESByMXxaEgkUkEqJe87oBbSniGYoQNIBklc7IQ==}
    dev: true

  /js-cookie/3.0.1:
    resolution: {integrity: sha512-+0rgsUXZu4ncpPxRL+lNEptWMOWl9etvPHc/koSRp6MPwpRYAhmk0dUG00J4bxVV3r9uUzfo24wW0knS07SKSw==}
    engines: {node: '>=12'}
    dev: false

  /js-tokens/4.0.0:
    resolution: {integrity: sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==}

  /js-yaml/3.13.1:
    resolution: {integrity: sha512-YfbcO7jXDdyj0DGxYVSlSeQNHbD7XPWvrVWeVUujrQEoZzWJIRrCPoyk6kL6IAjAG2IolMK4T0hNUe0HOUs5Jw==}
    hasBin: true
    dependencies:
      argparse: 1.0.10
      esprima: 4.0.1

  /js-yaml/3.14.1:
    resolution: {integrity: sha512-okMH7OXXJ7YrN9Ok3/SXrnu4iX9yOk+25nqX4imS2npuvTYDmo/QEZoqwZkYaIDk3jVvBOTOIEgEhaLOynBS9g==}
    hasBin: true
    dependencies:
      argparse: 1.0.10
      esprima: 4.0.1

  /js-yaml/4.1.0:
    resolution: {integrity: sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==}
    hasBin: true
    dependencies:
      argparse: 2.0.1

  /jsbn/0.1.1:
    resolution: {integrity: sha512-UVU9dibq2JcFWxQPA6KCqj5O42VOmAY3zQUfEKxU0KpTGXwNoCjkX1e13eHNvw/xPynt6pU0rZ1htjWTNTSXsg==}
    dev: true

  /jsdom/16.7.0:
    resolution: {integrity: sha512-u9Smc2G1USStM+s/x1ru5Sxrl6mPYCbByG1U/hUmqaVsm4tbNyS7CicOSRyuGQYZhTu0h84qkZZQ/I+dzizSVw==}
    engines: {node: '>=10'}
    peerDependencies:
      canvas: ^2.5.0
    peerDependenciesMeta:
      canvas:
        optional: true
    dependencies:
      abab: 2.0.6
      acorn: 8.8.0
      acorn-globals: 6.0.0
      cssom: 0.4.4
      cssstyle: 2.3.0
      data-urls: 2.0.0
      decimal.js: 10.4.0
      domexception: 2.0.1
      escodegen: 2.0.0
      form-data: 3.0.1
      html-encoding-sniffer: 2.0.1
      http-proxy-agent: 4.0.1
      https-proxy-agent: 5.0.1
      is-potential-custom-element-name: 1.0.1
      nwsapi: 2.2.2
      parse5: 6.0.1
      saxes: 5.0.1
      symbol-tree: 3.2.4
      tough-cookie: 4.1.2
      w3c-hr-time: 1.0.2
      w3c-xmlserializer: 2.0.0
      webidl-conversions: 6.1.0
      whatwg-encoding: 1.0.5
      whatwg-mimetype: 2.3.0
      whatwg-url: 8.7.0
      ws: 7.5.9
      xml-name-validator: 3.0.0
    transitivePeerDependencies:
      - bufferutil
      - supports-color
      - utf-8-validate
    dev: true

  /jsesc/0.5.0:
    resolution: {integrity: sha512-uZz5UnB7u4T9LvwmFqXii7pZSouaRPorGs5who1Ip7VO0wxanFvBL7GkM6dTHlgX+jhBApRetaWpnDabOeTcnA==}
    hasBin: true

  /jsesc/2.5.2:
    resolution: {integrity: sha512-OYu7XEzjkCQ3C5Ps3QIZsQfNpqoJyZZA99wd9aWd05NCtC5pWOkShK2mkL6HXQR6/Cy2lbNdPlZBpuQHXE63gA==}
    engines: {node: '>=4'}
    hasBin: true

  /json-buffer/3.0.0:
    resolution: {integrity: sha1-Wx85evx11ne96Lz8Dkfh+aPZqJg=}

  /json-parse-better-errors/1.0.2:
    resolution: {integrity: sha512-mrqyZKfX5EhL7hvqcV6WG1yYjnjeuYDzDhhcAAUrq8Po85NBQBJP+ZDUT75qZQ98IkUoBqdkExkukOU7Ts2wrw==}
    dev: true

  /json-parse-even-better-errors/2.3.1:
    resolution: {integrity: sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w==}

  /json-schema-traverse/0.4.1:
    resolution: {integrity: sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==}

  /json-schema-traverse/1.0.0:
    resolution: {integrity: sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug==}

  /json-schema/0.4.0:
    resolution: {integrity: sha512-es94M3nTIfsEPisRafak+HDLfHXnKBhV3vU5eqPcS3flIWqcxJWgXHXiey3YrpaNsanY5ei1VoYEbOzijuq9BA==}
    dev: true

  /json-stable-stringify-without-jsonify/1.0.1:
    resolution: {integrity: sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==}
    dev: true

  /json-stringify-safe/5.0.1:
    resolution: {integrity: sha512-ZClg6AaYvamvYEE82d3Iyd3vSSIjQ+odgjaTzRuO3s7toCdFKczob2i0zCh7JE8kWn17yvAWhUVxvqGwUalsRA==}
    dev: true

  /json5/1.0.1:
    resolution: {integrity: sha512-aKS4WQjPenRxiQsC93MNfjx+nbF4PAdYzmd/1JIj8HYzqfbu86beTuNgXDzPknWk0n0uARlyewZo4s++ES36Ow==}
    hasBin: true
    dependencies:
      minimist: 1.2.6
    dev: true

  /json5/2.2.1:
    resolution: {integrity: sha512-1hqLFMSrGHRHxav9q9gNjJ5EXznIxGVO09xQRrwplcS8qs28pZ8s8hupZAmqDwZUmVZ2Qb2jnyPOWcDH8m8dlA==}
    engines: {node: '>=6'}
    hasBin: true

  /jsonfile/4.0.0:
    resolution: {integrity: sha512-m6F1R3z8jjlf2imQHS2Qez5sjKWQzbuuhuJ/FKYFRZvPE3PuHcSMVZzfsLhGVOkfd20obL5SWEBew5ShlquNxg==}
    optionalDependencies:
      graceful-fs: 4.2.10

  /jsonfile/6.1.0:
    resolution: {integrity: sha512-5dgndWOriYSm5cnYaJNhalLNDKOqFwyDB/rr1E9ZsGciGvKPs8R2xYGCacuf3z6K1YKDz182fd+fY3cn3pMqXQ==}
    dependencies:
      universalify: 2.0.0
    optionalDependencies:
      graceful-fs: 4.2.10

  /jsonpath-plus/4.0.0:
    resolution: {integrity: sha512-e0Jtg4KAzDJKKwzbLaUtinCn0RZseWBVRTRGihSpvFlM3wTR7ExSp+PTdeTsDrLNJUe7L7JYJe8mblHX5SCT6A==}
    engines: {node: '>=10.0'}
    dev: true

  /jsprim/1.4.2:
    resolution: {integrity: sha512-P2bSOMAc/ciLz6DzgjVlGJP9+BrJWu5UDGK70C2iweC5QBIeFf0ZXRvGjEj2uYgrY2MkAAhsSWHDWlFtEroZWw==}
    engines: {node: '>=0.6.0'}
    dependencies:
      assert-plus: 1.0.0
      extsprintf: 1.3.0
      json-schema: 0.4.0
      verror: 1.10.0
    dev: true

  /jsx-ast-utils/3.3.3:
    resolution: {integrity: sha512-fYQHZTZ8jSfmWZ0iyzfwiU4WDX4HpHbMCZ3gPlWYiCl3BoeOTsqKBqnTVfH2rYT7eP5c3sVbeSPHnnJOaTrWiw==}
    engines: {node: '>=4.0'}
    dependencies:
      array-includes: 3.1.5
      object.assign: 4.1.4
    dev: true

  /keyv/3.1.0:
    resolution: {integrity: sha512-9ykJ/46SN/9KPM/sichzQ7OvXyGDYKGTaDlKMGCAlg2UK8KRy4jb0d8sFc+0Tt0YYnThq8X2RZgCg74RPxgcVA==}
    dependencies:
      json-buffer: 3.0.0

  /kind-of/6.0.3:
    resolution: {integrity: sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==}
    engines: {node: '>=0.10.0'}

  /kleur/3.0.3:
    resolution: {integrity: sha512-eTIzlVOSUR+JxdDFepEYcBMtZ9Qqdef+rnzWdRZuMbOywu5tO2w2N7rqjoANZ5k9vywhL6Br1VRjUIgTQx4E8w==}
    engines: {node: '>=6'}

  /klona/2.0.5:
    resolution: {integrity: sha512-pJiBpiXMbt7dkzXe8Ghj/u4FfXOOa98fPW+bihOJ4SjnoijweJrNThJfd3ifXpXhREjpoF2mZVH1GfS9LV3kHQ==}
    engines: {node: '>= 8'}

  /latest-version/5.1.0:
    resolution: {integrity: sha512-weT+r0kTkRQdCdYCNtkMwWXQTMEswKrFBkm4ckQOMVhhqhIMI1UT2hMj+1iigIhgSZm5gTmrRXBNoGUgaTY1xA==}
    engines: {node: '>=8'}
    dependencies:
      package-json: 6.5.0

  /leven/3.1.0:
    resolution: {integrity: sha512-qsda+H8jTaUaN/x5vzW2rzc+8Rw4TAQ/4KjB46IwK5VH+IlVeeeje/EoZRpiXvIqjFgK84QffqPztGI3VBLG1A==}
    engines: {node: '>=6'}

  /levn/0.3.0:
    resolution: {integrity: sha512-0OO4y2iOHix2W6ujICbKIaEQXvFQHue65vUG3pb5EUomzPI90z9hsA1VsO/dbIIpC53J8gxM9Q4Oho0jrCM/yA==}
    engines: {node: '>= 0.8.0'}
    dependencies:
      prelude-ls: 1.1.2
      type-check: 0.3.2
    dev: true

  /levn/0.4.1:
    resolution: {integrity: sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==}
    engines: {node: '>= 0.8.0'}
    dependencies:
      prelude-ls: 1.2.1
      type-check: 0.4.0
    dev: true

  /lilconfig/2.0.6:
    resolution: {integrity: sha512-9JROoBW7pobfsx+Sq2JsASvCo6Pfo6WWoUW79HuB1BCoBXD4PLWJPqDF6fNj67pqBYTbAHkE57M1kS/+L1neOg==}
    engines: {node: '>=10'}

  /lines-and-columns/1.2.4:
    resolution: {integrity: sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==}

  /loader-runner/4.3.0:
    resolution: {integrity: sha512-3R/1M+yS3j5ou80Me59j7F9IMs4PXs3VqRrm0TU3AbKPxlmpoY1TNscJV/oGJXo8qCatFGTfDbY6W6ipGOYXfg==}
    engines: {node: '>=6.11.5'}

  /loader-utils/1.4.0:
    resolution: {integrity: sha512-qH0WSMBtn/oHuwjy/NucEgbx5dbxxnxup9s4PVXJUDHZBQY+s0NWA9rJf53RBnQZxfch7euUui7hpoAPvALZdA==}
    engines: {node: '>=4.0.0'}
    dependencies:
      big.js: 5.2.2
      emojis-list: 3.0.0
      json5: 1.0.1
    dev: true

  /loader-utils/2.0.2:
    resolution: {integrity: sha512-TM57VeHptv569d/GKh6TAYdzKblwDNiumOdkFnejjD0XwTH87K90w3O7AiJRqdQoXygvi1VQTJTLGhJl7WqA7A==}
    engines: {node: '>=8.9.0'}
    dependencies:
      big.js: 5.2.2
      emojis-list: 3.0.0
      json5: 2.2.1

  /loader-utils/3.2.0:
    resolution: {integrity: sha512-HVl9ZqccQihZ7JM85dco1MvO9G+ONvxoGa9rkhzFsneGLKSUg1gJf9bWzhRhcvm2qChhWpebQhP44qxjKIUCaQ==}
    engines: {node: '>= 12.13.0'}

  /locate-path/3.0.0:
    resolution: {integrity: sha512-7AO748wWnIhNqAuaty2ZWHkQHRSNfPVIsPIfwEOWO22AmaoVrWavlOcMR5nzTLNYvp36X220/maaRsrec1G65A==}
    engines: {node: '>=6'}
    dependencies:
      p-locate: 3.0.0
      path-exists: 3.0.0

  /locate-path/5.0.0:
    resolution: {integrity: sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==}
    engines: {node: '>=8'}
    dependencies:
      p-locate: 4.1.0

  /locate-path/6.0.0:
    resolution: {integrity: sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==}
    engines: {node: '>=10'}
    dependencies:
      p-locate: 5.0.0

  /lodash.camelcase/4.3.0:
    resolution: {integrity: sha512-TwuEnCnxbc3rAvhf/LbG7tJUDzhqXyFnv3dtzLOPgCG/hODL7WFnsbwktkD7yUV0RrreP/l1PALq/YSg6VvjlA==}
    dev: true

  /lodash.curry/4.1.1:
    resolution: {integrity: sha512-/u14pXGviLaweY5JI0IUzgzF2J6Ne8INyzAZjImcryjgkZ+ebruBxy2/JaOOkTqScddcYtakjhSaeemV8lR0tA==}
    dev: false

  /lodash.debounce/4.0.8:
    resolution: {integrity: sha512-FT1yDzDYEoYWhnSGnpE/4Kj1fLZkDFyqRb7fNt6FdYOSxlUWAtp42Eh6Wb0rGIv/m9Bgo7x4GhQbm5Ys4SG5ow==}

  /lodash.flow/3.5.0:
    resolution: {integrity: sha512-ff3BX/tSioo+XojX4MOsOMhJw0nZoUEF011LX8g8d3gvjVbxd89cCio4BCXronjxcTUIJUoqKEUA+n4CqvvRPw==}
    dev: false

  /lodash.get/4.4.2:
    resolution: {integrity: sha512-z+Uw/vLuy6gQe8cfaFWD7p0wVv8fJl3mbzXh33RS+0oW2wvUqiRXiQ69gLWSLpgB5/6sU+r6BlQR0MBILadqTQ==}

  /lodash.isequal/4.5.0:
    resolution: {integrity: sha512-pDo3lu8Jhfjqls6GkMgpahsF9kCyayhgykjyLMNFTKWrpVdAQtYyB4muAMWozBB4ig/dtWAmsMxLEI8wuz+DYQ==}

  /lodash.memoize/4.1.2:
    resolution: {integrity: sha512-t7j+NzmgnQzTAYXcsHYLgimltOV1MXHtlOWf6GjL9Kj8GK5FInw5JotxvbOs+IvV1/Dzo04/fCGfLVs7aXb4Ag==}

  /lodash.merge/4.6.2:
    resolution: {integrity: sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==}
    dev: true

  /lodash.uniq/4.5.0:
    resolution: {integrity: sha512-xfBaXQd9ryd9dlSDvnvI0lvxfLJlYAZzXomUYzLKtUeOQvOP5piqAWuGtrhWeqaXK9hhoM/iyJc5AV+XfsX3HQ==}

  /lodash/4.17.21:
    resolution: {integrity: sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg==}

  /loglevel/1.8.0:
    resolution: {integrity: sha512-G6A/nJLRgWOuuwdNuA6koovfEV1YpqqAG4pRUlFaz3jj2QNZ8M4vBqnVA+HBTmU/AMNUtlOsMmSpF6NyOjztbA==}
    engines: {node: '>= 0.6.0'}
    dev: false

  /loose-envify/1.4.0:
    resolution: {integrity: sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==}
    hasBin: true
    dependencies:
      js-tokens: 4.0.0

  /lower-case/2.0.2:
    resolution: {integrity: sha512-7fm3l3NAF9WfN6W3JOmf5drwpVqX78JtoGJ3A6W0a6ZnldM41w2fV5D490psKFTpMds8TJse/eHLFFsNHHjHgg==}
    dependencies:
      tslib: 2.4.0

  /lowercase-keys/1.0.1:
    resolution: {integrity: sha512-G2Lj61tXDnVFFOi8VZds+SoQjtQC3dgokKdDG2mTm1tx4m50NUHBOZSBwQQHyy0V12A0JTG4icfZQH+xPyh8VA==}
    engines: {node: '>=0.10.0'}

  /lowercase-keys/2.0.0:
    resolution: {integrity: sha512-tqNXrS78oMOE73NMxK4EMLQsQowWf8jKooH9g7xPavRT706R6bkQJ6DY2Te7QukaZsulxa30wQ7bk0pm4XiHmA==}
    engines: {node: '>=8'}

  /lru-cache/6.0.0:
    resolution: {integrity: sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==}
    engines: {node: '>=10'}
    dependencies:
      yallist: 4.0.0

  /make-dir/3.1.0:
    resolution: {integrity: sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==}
    engines: {node: '>=8'}
    dependencies:
      semver: 6.3.0

  /makeerror/1.0.12:
    resolution: {integrity: sha512-JmqCvUhmt43madlpFzG4BQzG2Z3m6tvQDNKdClZnO3VbIudJYmxsT0FNJMeiB2+JTSlTQTSbU8QdesVmwJcmLg==}
    dependencies:
      tmpl: 1.0.5
    dev: true

  /map-obj/1.0.1:
    resolution: {integrity: sha512-7N/q3lyZ+LVCp7PzuxrJr4KMbBE2hW7BT7YNia330OFxIf4d3r5zVpicP2650l7CPN6RM9zOJRl3NGpqSiw3Eg==}
    engines: {node: '>=0.10.0'}
    dev: true

  /map-obj/4.3.0:
    resolution: {integrity: sha512-hdN1wVrZbb29eBGiGjJbeP8JbKjq1urkHJ/LIP/NY48MZ1QVXUsQBV1G1zvYFHn1XE06cwjBsOI2K3Ulnj1YXQ==}
    engines: {node: '>=8'}
    dev: true

  /markdown-escapes/1.0.4:
    resolution: {integrity: sha512-8z4efJYk43E0upd0NbVXwgSTQs6cT3T06etieCMEg7dRbzCbxUCK/GHlX8mhHRDcp+OLlHkPKsvqQTCvsRl2cg==}

  /mdast-squeeze-paragraphs/4.0.0:
    resolution: {integrity: sha512-zxdPn69hkQ1rm4J+2Cs2j6wDEv7O17TfXTJ33tl/+JPIoEmtV9t2ZzBM5LPHE8QlHsmVD8t3vPKCyY3oH+H8MQ==}
    dependencies:
      unist-util-remove: 2.1.0

  /mdast-util-definitions/4.0.0:
    resolution: {integrity: sha512-k8AJ6aNnUkB7IE+5azR9h81O5EQ/cTDXtWdMq9Kk5KcEW/8ritU5CeLg/9HhOC++nALHBlaogJ5jz0Ybk3kPMQ==}
    dependencies:
      unist-util-visit: 2.0.3

  /mdast-util-to-hast/10.0.1:
    resolution: {integrity: sha512-BW3LM9SEMnjf4HXXVApZMt8gLQWVNXc3jryK0nJu/rOXPOnlkUjmdkDlmxMirpbU9ILncGFIwLH/ubnWBbcdgA==}
    dependencies:
      '@types/mdast': 3.0.10
      '@types/unist': 2.0.6
      mdast-util-definitions: 4.0.0
      mdurl: 1.0.1
      unist-builder: 2.0.3
      unist-util-generated: 1.1.6
      unist-util-position: 3.1.0
      unist-util-visit: 2.0.3

  /mdast-util-to-string/2.0.0:
    resolution: {integrity: sha512-AW4DRS3QbBayY/jJmD8437V1Gombjf8RSOUCMFBuo5iHi58AGEgVCKQ+ezHkZZDpAQS75hcBMpLqjpJTjtUL7w==}

  /mdn-data/2.0.14:
    resolution: {integrity: sha512-dn6wd0uw5GsdswPFfsgMp5NSB0/aDe6fK94YJV/AJDYXL6HVLWBsxeq7js7Ad+mU2K9LAlwpk6kN2D5mwCPVow==}

  /mdurl/1.0.1:
    resolution: {integrity: sha512-/sKlQJCBYVY9Ers9hqzKou4H6V5UWc/M59TH2dvkt+84itfnq7uFOMLpOiOS4ujvHP4etln18fmIxA5R5fll0g==}

  /media-typer/0.3.0:
    resolution: {integrity: sha1-hxDXrwqmJvj/+hzgAWhUUmMlV0g=}
    engines: {node: '>= 0.6'}

  /memfs/3.4.7:
    resolution: {integrity: sha512-ygaiUSNalBX85388uskeCyhSAoOSgzBbtVCr9jA2RROssFL9Q19/ZXFqS+2Th2sr1ewNIWgFdLzLC3Yl1Zv+lw==}
    engines: {node: '>= 4.0.0'}
    dependencies:
      fs-monkey: 1.0.3

  /meow/9.0.0:
    resolution: {integrity: sha512-+obSblOQmRhcyBt62furQqRAQpNyWXo8BuQ5bN7dG8wmwQ+vwHKp/rCFD4CrTP8CsDQD1sjoZ94K417XEUk8IQ==}
    engines: {node: '>=10'}
    dependencies:
      '@types/minimist': 1.2.2
      camelcase-keys: 6.2.2
      decamelize: 1.2.0
      decamelize-keys: 1.1.0
      hard-rejection: 2.1.0
      minimist-options: 4.1.0
      normalize-package-data: 3.0.3
      read-pkg-up: 7.0.1
      redent: 3.0.0
      trim-newlines: 3.0.1
      type-fest: 0.18.1
      yargs-parser: 20.2.9
    dev: true

  /merge-descriptors/1.0.1:
    resolution: {integrity: sha1-sAqqVW3YtEVoFQ7J0blT8/kMu2E=}

  /merge-stream/2.0.0:
    resolution: {integrity: sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==}

  /merge2/1.4.1:
    resolution: {integrity: sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==}
    engines: {node: '>= 8'}

  /methods/1.1.2:
    resolution: {integrity: sha512-iclAHeNqNm68zFtnZ0e+1L2yUIdvzNoauKU4WBA3VvH/vPFieF7qfRlwUZU+DA9P9bPXIS90ulxoUoCH23sV2w==}
    engines: {node: '>= 0.6'}

  /micromatch/4.0.5:
    resolution: {integrity: sha512-DMy+ERcEW2q8Z2Po+WNXuw3c5YaUSFjAO5GsJqfEl7UjvtIuFKO6ZrKvcItdy98dwFI2N1tg3zNIdKaQT+aNdA==}
    engines: {node: '>=8.6'}
    dependencies:
      braces: 3.0.2
      picomatch: 2.3.1

  /mime-db/1.33.0:
    resolution: {integrity: sha512-BHJ/EKruNIqJf/QahvxwQZXKygOQ256myeN/Ew+THcAa5q+PjyTTMMeNQC4DZw5AwfvelsUrA6B67NKMqXDbzQ==}
    engines: {node: '>= 0.6'}

  /mime-db/1.52.0:
    resolution: {integrity: sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==}
    engines: {node: '>= 0.6'}

  /mime-types/2.1.18:
    resolution: {integrity: sha512-lc/aahn+t4/SWV/qcmumYjymLsWfN3ELhpmVuUFjgsORruuZPVSwAQryq+HHGvO/SI2KVX26bx+En+zhM8g8hQ==}
    engines: {node: '>= 0.6'}
    dependencies:
      mime-db: 1.33.0

  /mime-types/2.1.35:
    resolution: {integrity: sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==}
    engines: {node: '>= 0.6'}
    dependencies:
      mime-db: 1.52.0

  /mime/1.6.0:
    resolution: {integrity: sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==}
    engines: {node: '>=4'}
    hasBin: true

  /mimic-fn/2.1.0:
    resolution: {integrity: sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg==}
    engines: {node: '>=6'}

  /mimic-response/1.0.1:
    resolution: {integrity: sha512-j5EctnkH7amfV/q5Hgmoal1g2QHFJRraOtmx0JpIqkxhBhI/lJSl1nMpQ45hVarwNETOoWEimndZ4QK0RHxuxQ==}
    engines: {node: '>=4'}

  /min-indent/1.0.1:
    resolution: {integrity: sha512-I9jwMn07Sy/IwOj3zVkVik2JTvgpaykDZEigL6Rx6N9LbMywwUSMtxET+7lVoDLLd3O3IXwJwvuuns8UB/HeAg==}
    engines: {node: '>=4'}
    dev: true

  /mini-create-react-context/0.4.1_prop-types@15.8.1+react@17.0.2:
    resolution: {integrity: sha512-YWCYEmd5CQeHGSAKrYvXgmzzkrvssZcuuQDDeqkT+PziKGMgE+0MCCtcKbROzocGBG1meBLl2FotlRwf4gAzbQ==}
    peerDependencies:
      prop-types: ^15.0.0
      react: ^0.14.0 || ^15.0.0 || ^16.0.0 || ^17.0.0
    dependencies:
      '@babel/runtime': 7.17.9
      prop-types: 15.8.1
      react: 17.0.2
      tiny-warning: 1.0.3

  /mini-css-extract-plugin/2.5.3_webpack@5.68.0:
    resolution: {integrity: sha512-YseMB8cs8U/KCaAGQoqYmfUuhhGW0a9p9XvWXrxVOkE3/IiISTLw4ALNt7JR5B2eYauFM+PQGSbXMDmVbR7Tfw==}
    engines: {node: '>= 12.13.0'}
    peerDependencies:
      webpack: ^5.0.0
    dependencies:
      schema-utils: 4.0.0
      webpack: 5.68.0
    dev: true

  /mini-css-extract-plugin/2.6.1_webpack@5.74.0:
    resolution: {integrity: sha512-wd+SD57/K6DiV7jIR34P+s3uckTRuQvx0tKPcvjFlrEylk6P4mQ2KSWk1hblj1Kxaqok7LogKOieygXqBczNlg==}
    engines: {node: '>= 12.13.0'}
    peerDependencies:
      webpack: ^5.0.0
    dependencies:
      schema-utils: 4.0.0
      webpack: 5.74.0

  /minimalistic-assert/1.0.1:
    resolution: {integrity: sha512-UtJcAD4yEaGtjPezWuO9wC4nwUnVH/8/Im3yEHQP4b67cXlD/Qr9hdITCU1xDbSEXg2XKNaP8jsReV7vQd00/A==}

  /minimatch/3.0.4:
    resolution: {integrity: sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==}
    dependencies:
      brace-expansion: 1.1.11

  /minimatch/3.0.8:
    resolution: {integrity: sha512-6FsRAQsxQ61mw+qP1ZzbL9Bc78x2p5OqNgNpnoAFLTrX8n5Kxph0CsnhmKKNXTWjXqU5L0pGPR7hYk+XWZr60Q==}
    dependencies:
      brace-expansion: 1.1.11
    dev: true

  /minimatch/3.1.2:
    resolution: {integrity: sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==}
    dependencies:
      brace-expansion: 1.1.11

  /minimist-options/4.1.0:
    resolution: {integrity: sha512-Q4r8ghd80yhO/0j1O3B2BjweX3fiHg9cdOwjJd2J76Q135c+NDxGCqdYKQ1SKBuFfgWbAUzBfvYjPUEeNgqN1A==}
    engines: {node: '>= 6'}
    dependencies:
      arrify: 1.0.1
      is-plain-obj: 1.1.0
      kind-of: 6.0.3
    dev: true

  /minimist/1.2.6:
    resolution: {integrity: sha512-Jsjnk4bw3YJqYzbdyBiNsPWHPfO++UGG749Cxs6peCu5Xg4nrena6OVxOYxrQTqww0Jmwt+Ref8rggumkTLz9Q==}

  /minipass/3.3.4:
    resolution: {integrity: sha512-I9WPbWHCGu8W+6k1ZiGpPu0GkoKBeorkfKNuAFBNS1HNFJvke82sxvI5bzcCNpWPorkOO5QQ+zomzzwRxejXiw==}
    engines: {node: '>=8'}
    dependencies:
      yallist: 4.0.0
    dev: true

  /minizlib/2.1.2:
    resolution: {integrity: sha512-bAxsR8BVfj60DWXHE3u30oHzfl4G7khkSuPW+qvpd7jFRHm7dLxOjUk1EHACJ/hxLY8phGJ0YhYHZo7jil7Qdg==}
    engines: {node: '>= 8'}
    dependencies:
      minipass: 3.3.4
      yallist: 4.0.0
    dev: true

  /mkdirp/1.0.4:
    resolution: {integrity: sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==}
    engines: {node: '>=10'}
    hasBin: true
    dev: true

  /mrmime/1.0.1:
    resolution: {integrity: sha512-hzzEagAgDyoU1Q6yg5uI+AorQgdvMCur3FcKf7NhMKWsaYg+RnbTyHRa/9IlLF9rf455MOCtcqqrQQ83pPP7Uw==}
    engines: {node: '>=10'}

  /ms/2.0.0:
    resolution: {integrity: sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==}

  /ms/2.1.2:
    resolution: {integrity: sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==}

  /ms/2.1.3:
    resolution: {integrity: sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==}

  /multicast-dns/7.2.5:
    resolution: {integrity: sha512-2eznPJP8z2BFLX50tf0LuODrpINqP1RVIm/CObbTcBRITQgmC/TjcREF1NeTBzIcR5XO/ukWo+YHOjBbFwIupg==}
    hasBin: true
    dependencies:
      dns-packet: 5.4.0
      thunky: 1.1.0

  /nan/2.16.0:
    resolution: {integrity: sha512-UdAqHyFngu7TfQKsCBgAA6pWDkT8MAO7d0jyOecVhN5354xbLqdn8mV9Tat9gepAupm0bt2DbeaSC8vS52MuFA==}
    dev: true

  /nanoid/3.3.4:
    resolution: {integrity: sha512-MqBkQh/OHTS2egovRtLk45wEyNXwF+cokD+1YPf9u5VfJiRdAiRwB2froX5Co9Rh20xs4siNPm8naNotSD6RBw==}
    engines: {node: ^10 || ^12 || ^13.7 || ^14 || >=15.0.1}
    hasBin: true

  /natural-compare/1.4.0:
    resolution: {integrity: sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==}
    dev: true

  /negotiator/0.6.3:
    resolution: {integrity: sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg==}
    engines: {node: '>= 0.6'}

  /neo-async/2.6.2:
    resolution: {integrity: sha512-Yd3UES5mWCSqR+qNT93S3UoYUkqAZ9lLg8a7g9rimsWmYGK8cVToA4/sF3RrshdyV3sAGMXVUmpMYOw+dLpOuw==}

  /no-case/3.0.4:
    resolution: {integrity: sha512-fgAN3jGAh+RoxUGZHTSOLJIqUc2wmoBwGR4tbpNAKmmovFoWq0OdRkb0VkldReO2a2iBT/OEulG9XSUc10r3zg==}
    dependencies:
      lower-case: 2.0.2
      tslib: 2.4.0

  /node-emoji/1.11.0:
    resolution: {integrity: sha512-wo2DpQkQp7Sjm2A0cq+sN7EHKO6Sl0ctXeBdFZrL9T9+UywORbufTcTZxom8YqpLQt/FqNMUkOpkZrJVYSKD3A==}
    dependencies:
      lodash: 4.17.21

  /node-fetch/2.6.7:
    resolution: {integrity: sha512-ZjMPFEfVx5j+y2yF35Kzx5sF7kDzxuDj6ziH4FFbOp87zKDZNx8yExJIb05OGF4Nlt9IHFIMBkRl41VdvcNdbQ==}
    engines: {node: 4.x || >=6.0.0}
    peerDependencies:
      encoding: ^0.1.0
    peerDependenciesMeta:
      encoding:
        optional: true
    dependencies:
      whatwg-url: 5.0.0
    dev: false

  /node-forge/1.3.1:
    resolution: {integrity: sha512-dPEtOeMvF9VMcYV/1Wb8CPoVAXtp6MKMlcbAt4ddqmGqUJ6fQZFXkNZNkNlfevtNkGtaSoXf/vNNNSvgrdXwtA==}
    engines: {node: '>= 6.13.0'}

  /node-gyp/7.1.2:
    resolution: {integrity: sha512-CbpcIo7C3eMu3dL1c3d0xw449fHIGALIJsRP4DDPHpyiW8vcriNY7ubh9TE4zEKfSxscY7PjeFnshE7h75ynjQ==}
    engines: {node: '>= 10.12.0'}
    hasBin: true
    dependencies:
      env-paths: 2.2.1
      glob: 7.2.3
      graceful-fs: 4.2.10
      nopt: 5.0.0
      npmlog: 4.1.2
      request: 2.88.2
      rimraf: 3.0.2
      semver: 7.3.7
      tar: 6.1.11
      which: 2.0.2
    dev: true

  /node-int64/0.4.0:
    resolution: {integrity: sha512-O5lz91xSOeoXP6DulyHfllpq+Eg00MWitZIbtPfoSEvqIHdl5gfcY6hYzDWnj0qD5tz52PI08u9qUvSVeUBeHw==}
    dev: true

  /node-releases/2.0.6:
    resolution: {integrity: sha512-PiVXnNuFm5+iYkLBNeq5211hvO38y63T0i2KKh2KnUs3RpzJ+JtODFjkD8yjLwnDkTYF1eKXheUwdssR+NRZdg==}

  /node-sass/6.0.1:
    resolution: {integrity: sha512-f+Rbqt92Ful9gX0cGtdYwjTrWAaGURgaK5rZCWOgCNyGWusFYHhbqCCBoFBeat+HKETOU02AyTxNhJV0YZf2jQ==}
    engines: {node: '>=12'}
    hasBin: true
    requiresBuild: true
    dependencies:
      async-foreach: 0.1.3
      chalk: 1.1.3
      cross-spawn: 7.0.3
      gaze: 1.1.3
      get-stdin: 4.0.1
      glob: 7.2.3
      lodash: 4.17.21
      meow: 9.0.0
      nan: 2.16.0
      node-gyp: 7.1.2
      npmlog: 4.1.2
      request: 2.88.2
      sass-graph: 2.2.5
      stdout-stream: 1.4.1
      true-case-path: 1.0.3
    dev: true

  /nopt/5.0.0:
    resolution: {integrity: sha512-Tbj67rffqceeLpcRXrT7vKAN8CwfPeIBgM7E6iBkmKLV7bEMwpGgYLGv0jACUsECaa/vuxP0IjEont6umdMgtQ==}
    engines: {node: '>=6'}
    hasBin: true
    dependencies:
      abbrev: 1.1.1
    dev: true

  /normalize-package-data/2.5.0:
    resolution: {integrity: sha512-/5CMN3T0R4XTj4DcGaexo+roZSdSFW/0AOOTROrjxzCG1wrWXEsGbRKevjlIL+ZDE4sZlJr5ED4YW0yqmkK+eA==}
    dependencies:
      hosted-git-info: 2.8.9
      resolve: 1.22.1
      semver: 5.7.1
      validate-npm-package-license: 3.0.4
    dev: true

  /normalize-package-data/3.0.3:
    resolution: {integrity: sha512-p2W1sgqij3zMMyRC067Dg16bfzVH+w7hyegmpIvZ4JNjqtGOVAIvLmjBx3yP7YTe9vKJgkoNOPjwQGogDoMXFA==}
    engines: {node: '>=10'}
    dependencies:
      hosted-git-info: 4.1.0
      is-core-module: 2.10.0
      semver: 7.3.7
      validate-npm-package-license: 3.0.4
    dev: true

  /normalize-path/3.0.0:
    resolution: {integrity: sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==}
    engines: {node: '>=0.10.0'}

  /normalize-range/0.1.2:
    resolution: {integrity: sha512-bdok/XvKII3nUpklnV6P2hxtMNrCboOjAcyBuQnWEhO665FwrSNRxU+AqpsyvO6LgGYPspN+lu5CLtw4jPRKNA==}
    engines: {node: '>=0.10.0'}

  /normalize-url/4.5.1:
    resolution: {integrity: sha512-9UZCFRHQdNrfTpGg8+1INIg93B6zE0aXMVFkw1WFwvO4SlZywU6aLg5Of0Ap/PgcbSw4LNxvMWXMeugwMCX0AA==}
    engines: {node: '>=8'}

  /normalize-url/6.1.0:
    resolution: {integrity: sha512-DlL+XwOy3NxAQ8xuC0okPgK46iuVNAK01YN7RueYBqqFeGsBjV9XmCAzAdgt+667bCl5kPh9EqKKDwnaPG1I7A==}
    engines: {node: '>=10'}

  /npm-run-path/4.0.1:
    resolution: {integrity: sha512-S48WzZW777zhNIrn7gxOlISNAqi9ZC/uQFnRdbeIHhZhCA6UqpkOT8T1G7BvfdgP4Er8gF4sUbaS0i7QvIfCWw==}
    engines: {node: '>=8'}
    dependencies:
      path-key: 3.1.1

  /npmlog/4.1.2:
    resolution: {integrity: sha512-2uUqazuKlTaSI/dC8AzicUck7+IrEaOnN/e0jd3Xtt1KcGpwx30v50mL7oPyr/h9bL3E4aZccVwpwP+5W9Vjkg==}
    dependencies:
      are-we-there-yet: 1.1.7
      console-control-strings: 1.1.0
      gauge: 2.7.4
      set-blocking: 2.0.0
    dev: true

  /nprogress/0.2.0:
    resolution: {integrity: sha512-I19aIingLgR1fmhftnbWWO3dXc0hSxqHQHQb3H8m+K3TnEn/iSeTZZOyvKXWqQESMwuUVnatlCnZdLBZZt2VSA==}
    dev: false

  /nth-check/2.1.1:
    resolution: {integrity: sha512-lqjrjmaOoAnWfMmBPL+XNnynZh2+swxiX3WUE0s4yEHI6m+AwrK2UZOimIRl3X/4QctVqS8AiZjFqyOGrMXb/w==}
    dependencies:
      boolbase: 1.0.0

  /number-is-nan/1.0.1:
    resolution: {integrity: sha512-4jbtZXNAsfZbAHiiqjLPBiCl16dES1zI4Hpzzxw61Tk+loF+sBDBKx1ICKKKwIqQ7M0mFn1TmkN7euSncWgHiQ==}
    engines: {node: '>=0.10.0'}
    dev: true

  /nwsapi/2.2.2:
    resolution: {integrity: sha512-90yv+6538zuvUMnN+zCr8LuV6bPFdq50304114vJYJ8RDyK8D5O9Phpbd6SZWgI7PwzmmfN1upeOJlvybDSgCw==}
    dev: true

  /oauth-sign/0.9.0:
    resolution: {integrity: sha512-fexhUFFPTGV8ybAtSIGbV6gOkSv8UtRbDBnAyLQw4QPKkgNlsH2ByPGtMUqdWkos6YCRmAqViwgZrJc/mRDzZQ==}
    dev: true

  /object-assign/4.1.1:
    resolution: {integrity: sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==}
    engines: {node: '>=0.10.0'}

  /object-inspect/1.12.2:
    resolution: {integrity: sha512-z+cPxW0QGUp0mcqcsgQyLVRDoXFQbXOwBaqyF7VIgI4TWNQsDHrBpUQslRmIfAoYWdYzs6UlKJtB2XJpTaNSpQ==}

  /object-keys/1.1.1:
    resolution: {integrity: sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==}
    engines: {node: '>= 0.4'}

  /object.assign/4.1.4:
    resolution: {integrity: sha512-1mxKf0e58bvyjSCtKYY4sRe9itRk3PJpquJOjeIkz885CczcI4IvJJDLPS72oowuSh+pBxUFROpX+TU++hxhZQ==}
    engines: {node: '>= 0.4'}
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.4
      has-symbols: 1.0.3
      object-keys: 1.1.1

  /object.entries/1.1.5:
    resolution: {integrity: sha512-TyxmjUoZggd4OrrU1W66FMDG6CuqJxsFvymeyXI51+vQLN67zYfZseptRge703kKQdo4uccgAKebXFcRCzk4+g==}
    engines: {node: '>= 0.4'}
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.4
      es-abstract: 1.20.2
    dev: true

  /object.fromentries/2.0.5:
    resolution: {integrity: sha512-CAyG5mWQRRiBU57Re4FKoTBjXfDoNwdFVH2Y1tS9PqCsfUTymAohOkEMSG3aRNKmv4lV3O7p1et7c187q6bynw==}
    engines: {node: '>= 0.4'}
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.4
      es-abstract: 1.20.2
    dev: true

  /object.hasown/1.1.1:
    resolution: {integrity: sha512-LYLe4tivNQzq4JdaWW6WO3HMZZJWzkkH8fnI6EebWl0VZth2wL2Lovm74ep2/gZzlaTdV62JZHEqHQ2yVn8Q/A==}
    dependencies:
      define-properties: 1.1.4
      es-abstract: 1.20.2
    dev: true

  /object.values/1.1.5:
    resolution: {integrity: sha512-QUZRW0ilQ3PnPpbNtgdNV1PDbEqLIiSFB3l+EnGtBQ/8SUTLj1PZwtQHABZtLgwpJZTSZhuGLOGk57Drx2IvYg==}
    engines: {node: '>= 0.4'}
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.4
      es-abstract: 1.20.2
    dev: true

  /obuf/1.1.2:
    resolution: {integrity: sha512-PX1wu0AmAdPqOL1mWhqmlOd8kOIZQwGZw6rh7uby9fTc5lhaOWFLX3I6R1hrF9k3zUY40e6igsLGkDXK92LJNg==}

  /on-finished/2.4.1:
    resolution: {integrity: sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==}
    engines: {node: '>= 0.8'}
    dependencies:
      ee-first: 1.1.1

  /on-headers/1.0.2:
    resolution: {integrity: sha512-pZAE+FJLoyITytdqK0U5s+FIpjN0JP3OzFi/u8Rx+EV5/W+JTWGXG8xFzevE7AjBfDqHv/8vL8qQsIhHnqRkrA==}
    engines: {node: '>= 0.8'}

  /once/1.4.0:
    resolution: {integrity: sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==}
    dependencies:
      wrappy: 1.0.2

  /onetime/5.1.2:
    resolution: {integrity: sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==}
    engines: {node: '>=6'}
    dependencies:
      mimic-fn: 2.1.0

  /open/8.4.0:
    resolution: {integrity: sha512-XgFPPM+B28FtCCgSb9I+s9szOC1vZRSwgWsRUA5ylIxRTgKozqjOCrVOqGsYABPYK5qnfqClxZTFBa8PKt2v6Q==}
    engines: {node: '>=12'}
    dependencies:
      define-lazy-prop: 2.0.0
      is-docker: 2.2.1
      is-wsl: 2.2.0

  /opener/1.5.2:
    resolution: {integrity: sha512-ur5UIdyw5Y7yEj9wLzhqXiy6GZ3Mwx0yGI+5sMn2r0N0v3cKJvUmFH5yPP+WXh9e0xfyzyJX95D8l088DNFj7A==}
    hasBin: true

  /optionator/0.8.3:
    resolution: {integrity: sha512-+IW9pACdk3XWmmTXG8m3upGUJst5XRGzxMRjXzAuJ1XnIFNvfhjjIuYkDvysnPQ7qzqVzLt78BCruntqRhWQbA==}
    engines: {node: '>= 0.8.0'}
    dependencies:
      deep-is: 0.1.4
      fast-levenshtein: 2.0.6
      levn: 0.3.0
      prelude-ls: 1.1.2
      type-check: 0.3.2
      word-wrap: 1.2.3
    dev: true

  /optionator/0.9.1:
    resolution: {integrity: sha512-74RlY5FCnhq4jRxVUPKDaRwrVNXMqsGsiW6AJw4XK8hmtm10wC0ypZBLw5IIp85NZMr91+qd1RvvENwg7jjRFw==}
    engines: {node: '>= 0.8.0'}
    dependencies:
      deep-is: 0.1.4
      fast-levenshtein: 2.0.6
      levn: 0.4.1
      prelude-ls: 1.2.1
      type-check: 0.4.0
      word-wrap: 1.2.3
    dev: true

  /p-cancelable/1.1.0:
    resolution: {integrity: sha512-s73XxOZ4zpt1edZYZzvhqFa6uvQc1vwUa0K0BdtIZgQMAJj9IbebH+JkgKZc9h+B05PKHLOTl4ajG1BmNrVZlw==}
    engines: {node: '>=6'}

  /p-limit/2.3.0:
    resolution: {integrity: sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==}
    engines: {node: '>=6'}
    dependencies:
      p-try: 2.2.0

  /p-limit/3.1.0:
    resolution: {integrity: sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==}
    engines: {node: '>=10'}
    dependencies:
      yocto-queue: 0.1.0

  /p-locate/3.0.0:
    resolution: {integrity: sha512-x+12w/To+4GFfgJhBEpiDcLozRJGegY+Ei7/z0tSLkMmxGZNybVMSfWj9aJn8Z5Fc7dBUNJOOVgPv2H7IwulSQ==}
    engines: {node: '>=6'}
    dependencies:
      p-limit: 2.3.0

  /p-locate/4.1.0:
    resolution: {integrity: sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==}
    engines: {node: '>=8'}
    dependencies:
      p-limit: 2.3.0

  /p-locate/5.0.0:
    resolution: {integrity: sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==}
    engines: {node: '>=10'}
    dependencies:
      p-limit: 3.1.0

  /p-map/4.0.0:
    resolution: {integrity: sha512-/bjOqmgETBYB5BoEeGVea8dmvHb2m9GLy1E9W43yeyfP6QQCZGFNa+XRceJEuDB6zqr+gKpIAmlLebMpykw/MQ==}
    engines: {node: '>=10'}
    dependencies:
      aggregate-error: 3.1.0

  /p-retry/4.6.2:
    resolution: {integrity: sha512-312Id396EbJdvRONlngUx0NydfrIQ5lsYu0znKVUzVvArzEIt08V1qhtyESbGVd1FGX7UKtiFp5uwKZdM8wIuQ==}
    engines: {node: '>=8'}
    dependencies:
      '@types/retry': 0.12.0
      retry: 0.13.1

  /p-try/2.2.0:
    resolution: {integrity: sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ==}
    engines: {node: '>=6'}

  /package-json/6.5.0:
    resolution: {integrity: sha512-k3bdm2n25tkyxcjSKzB5x8kfVxlMdgsbPr0GkZcwHsLpba6cBjqCt1KlcChKEvxHIcTB1FVMuwoijZ26xex5MQ==}
    engines: {node: '>=8'}
    dependencies:
      got: 9.6.0
      registry-auth-token: 4.2.2
      registry-url: 5.1.0
      semver: 6.3.0

  /param-case/3.0.4:
    resolution: {integrity: sha512-RXlj7zCYokReqWpOPH9oYivUzLYZ5vAPIfEmCTNViosC78F8F0H9y7T7gG2M39ymgutxF5gcFEsyZQSph9Bp3A==}
    dependencies:
      dot-case: 3.0.4
      tslib: 2.4.0

  /parent-module/1.0.1:
    resolution: {integrity: sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==}
    engines: {node: '>=6'}
    dependencies:
      callsites: 3.1.0

  /parse-entities/2.0.0:
    resolution: {integrity: sha512-kkywGpCcRYhqQIchaWqZ875wzpS/bMKhz5HnN3p7wveJTkTtyAB/AlnS0f8DFSqYW1T82t6yEAkEcB+A1I3MbQ==}
    dependencies:
      character-entities: 1.2.4
      character-entities-legacy: 1.1.4
      character-reference-invalid: 1.1.4
      is-alphanumerical: 1.0.4
      is-decimal: 1.0.4
      is-hexadecimal: 1.0.4

  /parse-json/5.2.0:
    resolution: {integrity: sha512-ayCKvm/phCGxOkYRSCM82iDwct8/EonSEgCSxWxD7ve6jHggsFl4fZVQBPRNgQoKiuV/odhFrGzQXZwbifC8Rg==}
    engines: {node: '>=8'}
    dependencies:
      '@babel/code-frame': 7.18.6
      error-ex: 1.3.2
      json-parse-even-better-errors: 2.3.1
      lines-and-columns: 1.2.4

  /parse-numeric-range/1.3.0:
    resolution: {integrity: sha512-twN+njEipszzlMJd4ONUYgSfZPDxgHhT9Ahed5uTigpQn90FggW4SA/AIPq/6a149fTbE9qBEcSwE3FAEp6wQQ==}
    dev: false

  /parse5-htmlparser2-tree-adapter/7.0.0:
    resolution: {integrity: sha512-B77tOZrqqfUfnVcOrUvfdLbz4pu4RopLD/4vmu3HUPswwTA8OH0EMW9BlWR2B0RCoiZRAHEUu7IxeP1Pd1UU+g==}
    dependencies:
      domhandler: 5.0.3
      parse5: 7.1.1
    dev: false

  /parse5/6.0.1:
    resolution: {integrity: sha512-Ofn/CTFzRGTTxwpNEs9PP93gXShHcTq255nzRYSKe8AkVpZY7e1fpmTfOyoIvjP5HG7Z2ZM7VS9PPhQGW2pOpw==}

  /parse5/7.1.1:
    resolution: {integrity: sha512-kwpuwzB+px5WUg9pyK0IcK/shltJN5/OVhQagxhCQNtT9Y9QRZqNY2e1cmbu/paRh5LMnz/oVTVLBpjFmMZhSg==}
    dependencies:
      entities: 4.4.0
    dev: false

  /parseurl/1.3.3:
    resolution: {integrity: sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==}
    engines: {node: '>= 0.8'}

  /pascal-case/3.1.2:
    resolution: {integrity: sha512-uWlGT3YSnK9x3BQJaOdcZwrnV6hPpd8jFH1/ucpiLRPh/2zCVJKS19E4GvYHvaCcACn3foXZ0cLB9Wrx1KGe5g==}
    dependencies:
      no-case: 3.0.4
      tslib: 2.4.0

  /path-exists/3.0.0:
    resolution: {integrity: sha512-bpC7GYwiDYQ4wYLe+FA8lhRjhQCMcQGuSgGGqDkg/QerRWw9CmGRT0iSOVRSZJ29NMLZgIzqaljJ63oaL4NIJQ==}
    engines: {node: '>=4'}

  /path-exists/4.0.0:
    resolution: {integrity: sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==}
    engines: {node: '>=8'}

  /path-is-absolute/1.0.1:
    resolution: {integrity: sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==}
    engines: {node: '>=0.10.0'}

  /path-is-inside/1.0.2:
    resolution: {integrity: sha512-DUWJr3+ULp4zXmol/SZkFf3JGsS9/SIv+Y3Rt93/UjPpDpklB5f1er4O3POIbUuUJ3FXgqte2Q7SrU6zAqwk8w==}

  /path-key/3.1.1:
    resolution: {integrity: sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==}
    engines: {node: '>=8'}

  /path-parse/1.0.7:
    resolution: {integrity: sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==}

  /path-to-regexp/0.1.7:
    resolution: {integrity: sha512-5DFkuoqlv1uYQKxy8omFBeJPQcdoE07Kv2sferDCrAq1ohOU+MSDswDIbnx3YAM60qIOnYa53wBhXW0EbMonrQ==}

  /path-to-regexp/1.8.0:
    resolution: {integrity: sha512-n43JRhlUKUAlibEJhPeir1ncUID16QnEjNpwzNdO3Lm4ywrBpBZ5oLD0I6br9evr1Y9JTqwRtAh7JLoOzAQdVA==}
    dependencies:
      isarray: 0.0.1

  /path-to-regexp/2.2.1:
    resolution: {integrity: sha512-gu9bD6Ta5bwGrrU8muHzVOBFFREpp2iRkVfhBJahwJ6p6Xw20SjT0MxLnwkjOibQmGSYhiUnf2FLe7k+jcFmGQ==}

  /path-type/4.0.0:
    resolution: {integrity: sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==}
    engines: {node: '>=8'}

  /performance-now/2.1.0:
    resolution: {integrity: sha512-7EAHlyLHI56VEIdK57uwHdHKIaAGbnXPiw0yWbarQZOKaKpvUIgW0jWRVLiatnM+XXlSwsanIBH/hzGMJulMow==}
    dev: true

  /picocolors/0.2.1:
    resolution: {integrity: sha512-cMlDqaLEqfSaW8Z7N5Jw+lyIW869EzT73/F5lhtY9cLGoVxSXznfgfXMO0Z5K0o0Q2TkTXq+0KFsdnSe3jDViA==}
    dev: true

  /picocolors/1.0.0:
    resolution: {integrity: sha512-1fygroTLlHu66zi26VoTDv8yRgm0Fccecssto+MhsZ0D/DGW2sm8E8AjW7NU5VVTRt5GxbeZ5qBuJr+HyLYkjQ==}

  /picomatch/2.3.1:
    resolution: {integrity: sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==}
    engines: {node: '>=8.6'}

  /pirates/4.0.5:
    resolution: {integrity: sha512-8V9+HQPupnaXMA23c5hvl69zXvTwTzyAYasnkb0Tts4XvO4CliqONMOnvlq26rkhLC3nWDFBJf73LU1e1VZLaQ==}
    engines: {node: '>= 6'}
    dev: true

  /pkg-dir/4.2.0:
    resolution: {integrity: sha512-HRDzbaKjC+AOWVXxAU/x54COGeIv9eb+6CkDSQoNTt4XyWoIJvuPsXizxu/Fr23EiekbtZwmh1IcIG/l/a10GQ==}
    engines: {node: '>=8'}
    dependencies:
      find-up: 4.1.0

  /pkg-up/3.1.0:
    resolution: {integrity: sha512-nDywThFk1i4BQK4twPQ6TA4RT8bDY96yeuCVBWL3ePARCiEKDRSrNGbFIgUJpLp+XeIR65v8ra7WuJOFUBtkMA==}
    engines: {node: '>=8'}
    dependencies:
      find-up: 3.0.0

  /postcss-calc/8.2.4_postcss@8.4.16:
    resolution: {integrity: sha512-SmWMSJmB8MRnnULldx0lQIyhSNvuDl9HfrZkaqqE/WHAhToYsAvDq+yAsA/kIyINDszOp3Rh0GFoNuH5Ypsm3Q==}
    peerDependencies:
      postcss: ^8.2.2
    dependencies:
      postcss: 8.4.16
      postcss-selector-parser: 6.0.10
      postcss-value-parser: 4.2.0

  /postcss-colormin/5.3.0_postcss@8.4.16:
    resolution: {integrity: sha512-WdDO4gOFG2Z8n4P8TWBpshnL3JpmNmJwdnfP2gbk2qBA8PWwOYcmjmI/t3CmMeL72a7Hkd+x/Mg9O2/0rD54Pg==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      browserslist: 4.21.4
      caniuse-api: 3.0.0
      colord: 2.9.3
      postcss: 8.4.16
      postcss-value-parser: 4.2.0

  /postcss-convert-values/5.1.2_postcss@8.4.16:
    resolution: {integrity: sha512-c6Hzc4GAv95B7suy4udszX9Zy4ETyMCgFPUDtWjdFTKH1SE9eFY/jEpHSwTH1QPuwxHpWslhckUQWbNRM4ho5g==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      browserslist: 4.21.4
      postcss: 8.4.16
      postcss-value-parser: 4.2.0

  /postcss-discard-comments/5.1.2_postcss@8.4.16:
    resolution: {integrity: sha512-+L8208OVbHVF2UQf1iDmRcbdjJkuBF6IS29yBDSiWUIzpYaAhtNl6JYnYm12FnkeCwQqF5LeklOu6rAqgfBZqQ==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.16

  /postcss-discard-duplicates/5.1.0_postcss@8.4.16:
    resolution: {integrity: sha512-zmX3IoSI2aoenxHV6C7plngHWWhUOV3sP1T8y2ifzxzbtnuhk1EdPwm0S1bIUNaJ2eNbWeGLEwzw8huPD67aQw==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.16

  /postcss-discard-empty/5.1.1_postcss@8.4.16:
    resolution: {integrity: sha512-zPz4WljiSuLWsI0ir4Mcnr4qQQ5e1Ukc3i7UfE2XcrwKK2LIPIqE5jxMRxO6GbI3cv//ztXDsXwEWT3BHOGh3A==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.16

  /postcss-discard-overridden/5.1.0_postcss@8.4.16:
    resolution: {integrity: sha512-21nOL7RqWR1kasIVdKs8HNqQJhFxLsyRfAnUDm4Fe4t4mCWL9OJiHvlHPjcd8zc5Myu89b/7wZDnOSjFgeWRtw==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.16

  /postcss-discard-unused/5.1.0_postcss@8.4.16:
    resolution: {integrity: sha512-KwLWymI9hbwXmJa0dkrzpRbSJEh0vVUd7r8t0yOGPcfKzyJJxFM8kLyC5Ev9avji6nY95pOp1W6HqIrfT+0VGw==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.16
      postcss-selector-parser: 6.0.10

  /postcss-loader/6.2.1_postcss@8.4.16+webpack@5.68.0:
    resolution: {integrity: sha512-WbbYpmAaKcux/P66bZ40bpWsBucjx/TTgVVzRZ9yUO8yQfVBlameJ0ZGVaPfH64hNSBh63a+ICP5nqOpBA0w+Q==}
    engines: {node: '>= 12.13.0'}
    peerDependencies:
      postcss: ^7.0.0 || ^8.0.1
      webpack: ^5.0.0
    dependencies:
      cosmiconfig: 7.0.1
      klona: 2.0.5
      postcss: 8.4.16
      semver: 7.3.7
      webpack: 5.68.0
    dev: true

  /postcss-loader/7.0.1_postcss@8.4.16+webpack@5.74.0:
    resolution: {integrity: sha512-VRviFEyYlLjctSM93gAZtcJJ/iSkPZ79zWbN/1fSH+NisBByEiVLqpdVDrPLVSi8DX0oJo12kL/GppTBdKVXiQ==}
    engines: {node: '>= 14.15.0'}
    peerDependencies:
      postcss: ^7.0.0 || ^8.0.1
      webpack: ^5.0.0
    dependencies:
      cosmiconfig: 7.0.1
      klona: 2.0.5
      postcss: 8.4.16
      semver: 7.3.7
      webpack: 5.74.0

  /postcss-merge-idents/5.1.1_postcss@8.4.16:
    resolution: {integrity: sha512-pCijL1TREiCoog5nQp7wUe+TUonA2tC2sQ54UGeMmryK3UFGIYKqDyjnqd6RcuI4znFn9hWSLNN8xKE/vWcUQw==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      cssnano-utils: 3.1.0_postcss@8.4.16
      postcss: 8.4.16
      postcss-value-parser: 4.2.0

  /postcss-merge-longhand/5.1.6_postcss@8.4.16:
    resolution: {integrity: sha512-6C/UGF/3T5OE2CEbOuX7iNO63dnvqhGZeUnKkDeifebY0XqkkvrctYSZurpNE902LDf2yKwwPFgotnfSoPhQiw==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.16
      postcss-value-parser: 4.2.0
      stylehacks: 5.1.0_postcss@8.4.16

  /postcss-merge-rules/5.1.2_postcss@8.4.16:
    resolution: {integrity: sha512-zKMUlnw+zYCWoPN6yhPjtcEdlJaMUZ0WyVcxTAmw3lkkN/NDMRkOkiuctQEoWAOvH7twaxUUdvBWl0d4+hifRQ==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      browserslist: 4.21.4
      caniuse-api: 3.0.0
      cssnano-utils: 3.1.0_postcss@8.4.16
      postcss: 8.4.16
      postcss-selector-parser: 6.0.10

  /postcss-minify-font-values/5.1.0_postcss@8.4.16:
    resolution: {integrity: sha512-el3mYTgx13ZAPPirSVsHqFzl+BBBDrXvbySvPGFnQcTI4iNslrPaFq4muTkLZmKlGk4gyFAYUBMH30+HurREyA==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.16
      postcss-value-parser: 4.2.0

  /postcss-minify-gradients/5.1.1_postcss@8.4.16:
    resolution: {integrity: sha512-VGvXMTpCEo4qHTNSa9A0a3D+dxGFZCYwR6Jokk+/3oB6flu2/PnPXAh2x7x52EkY5xlIHLm+Le8tJxe/7TNhzw==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      colord: 2.9.3
      cssnano-utils: 3.1.0_postcss@8.4.16
      postcss: 8.4.16
      postcss-value-parser: 4.2.0

  /postcss-minify-params/5.1.3_postcss@8.4.16:
    resolution: {integrity: sha512-bkzpWcjykkqIujNL+EVEPOlLYi/eZ050oImVtHU7b4lFS82jPnsCb44gvC6pxaNt38Els3jWYDHTjHKf0koTgg==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      browserslist: 4.21.4
      cssnano-utils: 3.1.0_postcss@8.4.16
      postcss: 8.4.16
      postcss-value-parser: 4.2.0

  /postcss-minify-selectors/5.2.1_postcss@8.4.16:
    resolution: {integrity: sha512-nPJu7OjZJTsVUmPdm2TcaiohIwxP+v8ha9NehQ2ye9szv4orirRU3SDdtUmKH+10nzn0bAyOXZ0UEr7OpvLehg==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.16
      postcss-selector-parser: 6.0.10

  /postcss-modules-extract-imports/1.1.0:
    resolution: {integrity: sha512-zF9+UIEvtpeqMGxhpeT9XaIevQSrBBCz9fi7SwfkmjVacsSj8DY5eFVgn+wY8I9vvdDDwK5xC8Myq4UkoLFIkA==}
    dependencies:
      postcss: 6.0.1
    dev: true

  /postcss-modules-extract-imports/3.0.0_postcss@8.4.16:
    resolution: {integrity: sha512-bdHleFnP3kZ4NYDhuGlVK+CMrQ/pqUm8bx/oGL93K6gVwiclvX5x0n76fYMKuIGKzlABOy13zsvqjb0f92TEXw==}
    engines: {node: ^10 || ^12 || >= 14}
    peerDependencies:
      postcss: ^8.1.0
    dependencies:
      postcss: 8.4.16

  /postcss-modules-local-by-default/1.2.0:
    resolution: {integrity: sha512-X4cquUPIaAd86raVrBwO8fwRfkIdbwFu7CTfEOjiZQHVQwlHRSkTgH5NLDmMm5+1hQO8u6dZ+TOOJDbay1hYpA==}
    dependencies:
      css-selector-tokenizer: 0.7.3
      postcss: 6.0.1
    dev: true

  /postcss-modules-local-by-default/4.0.0_postcss@8.4.16:
    resolution: {integrity: sha512-sT7ihtmGSF9yhm6ggikHdV0hlziDTX7oFoXtuVWeDd3hHObNkcHRo9V3yg7vCAY7cONyxJC/XXCmmiHHcvX7bQ==}
    engines: {node: ^10 || ^12 || >= 14}
    peerDependencies:
      postcss: ^8.1.0
    dependencies:
      icss-utils: 5.1.0_postcss@8.4.16
      postcss: 8.4.16
      postcss-selector-parser: 6.0.10
      postcss-value-parser: 4.2.0

  /postcss-modules-scope/1.1.0:
    resolution: {integrity: sha512-LTYwnA4C1He1BKZXIx1CYiHixdSe9LWYVKadq9lK5aCCMkoOkFyZ7aigt+srfjlRplJY3gIol6KUNefdMQJdlw==}
    dependencies:
      css-selector-tokenizer: 0.7.3
      postcss: 6.0.1
    dev: true

  /postcss-modules-scope/3.0.0_postcss@8.4.16:
    resolution: {integrity: sha512-hncihwFA2yPath8oZ15PZqvWGkWf+XUfQgUGamS4LqoP1anQLOsOJw0vr7J7IwLpoY9fatA2qiGUGmuZL0Iqlg==}
    engines: {node: ^10 || ^12 || >= 14}
    peerDependencies:
      postcss: ^8.1.0
    dependencies:
      postcss: 8.4.16
      postcss-selector-parser: 6.0.10

  /postcss-modules-values/1.3.0:
    resolution: {integrity: sha512-i7IFaR9hlQ6/0UgFuqM6YWaCfA1Ej8WMg8A5DggnH1UGKJvTV/ugqq/KaULixzzOi3T/tF6ClBXcHGCzdd5unA==}
    dependencies:
      icss-replace-symbols: 1.1.0
      postcss: 6.0.1
    dev: true

  /postcss-modules-values/4.0.0_postcss@8.4.16:
    resolution: {integrity: sha512-RDxHkAiEGI78gS2ofyvCsu7iycRv7oqw5xMWn9iMoR0N/7mf9D50ecQqUo5BZ9Zh2vH4bCUR/ktCqbB9m8vJjQ==}
    engines: {node: ^10 || ^12 || >= 14}
    peerDependencies:
      postcss: ^8.1.0
    dependencies:
      icss-utils: 5.1.0_postcss@8.4.16
      postcss: 8.4.16

  /postcss-modules/1.5.0:
    resolution: {integrity: sha512-KiAihzcV0TxTTNA5OXreyIXctuHOfR50WIhqBpc8pe0Q5dcs/Uap9EVlifOI9am7zGGdGOJQ6B1MPYKo2UxgOg==}
    dependencies:
      css-modules-loader-core: 1.1.0
      generic-names: 2.0.1
      lodash.camelcase: 4.3.0
      postcss: 7.0.39
      string-hash: 1.1.3
    dev: true

  /postcss-normalize-charset/5.1.0_postcss@8.4.16:
    resolution: {integrity: sha512-mSgUJ+pd/ldRGVx26p2wz9dNZ7ji6Pn8VWBajMXFf8jk7vUoSrZ2lt/wZR7DtlZYKesmZI680qjr2CeFF2fbUg==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.16

  /postcss-normalize-display-values/5.1.0_postcss@8.4.16:
    resolution: {integrity: sha512-WP4KIM4o2dazQXWmFaqMmcvsKmhdINFblgSeRgn8BJ6vxaMyaJkwAzpPpuvSIoG/rmX3M+IrRZEz2H0glrQNEA==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.16
      postcss-value-parser: 4.2.0

  /postcss-normalize-positions/5.1.1_postcss@8.4.16:
    resolution: {integrity: sha512-6UpCb0G4eofTCQLFVuI3EVNZzBNPiIKcA1AKVka+31fTVySphr3VUgAIULBhxZkKgwLImhzMR2Bw1ORK+37INg==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.16
      postcss-value-parser: 4.2.0

  /postcss-normalize-repeat-style/5.1.1_postcss@8.4.16:
    resolution: {integrity: sha512-mFpLspGWkQtBcWIRFLmewo8aC3ImN2i/J3v8YCFUwDnPu3Xz4rLohDO26lGjwNsQxB3YF0KKRwspGzE2JEuS0g==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.16
      postcss-value-parser: 4.2.0

  /postcss-normalize-string/5.1.0_postcss@8.4.16:
    resolution: {integrity: sha512-oYiIJOf4T9T1N4i+abeIc7Vgm/xPCGih4bZz5Nm0/ARVJ7K6xrDlLwvwqOydvyL3RHNf8qZk6vo3aatiw/go3w==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.16
      postcss-value-parser: 4.2.0

  /postcss-normalize-timing-functions/5.1.0_postcss@8.4.16:
    resolution: {integrity: sha512-DOEkzJ4SAXv5xkHl0Wa9cZLF3WCBhF3o1SKVxKQAa+0pYKlueTpCgvkFAHfk+Y64ezX9+nITGrDZeVGgITJXjg==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.16
      postcss-value-parser: 4.2.0

  /postcss-normalize-unicode/5.1.0_postcss@8.4.16:
    resolution: {integrity: sha512-J6M3MizAAZ2dOdSjy2caayJLQT8E8K9XjLce8AUQMwOrCvjCHv24aLC/Lps1R1ylOfol5VIDMaM/Lo9NGlk1SQ==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      browserslist: 4.21.4
      postcss: 8.4.16
      postcss-value-parser: 4.2.0

  /postcss-normalize-url/5.1.0_postcss@8.4.16:
    resolution: {integrity: sha512-5upGeDO+PVthOxSmds43ZeMeZfKH+/DKgGRD7TElkkyS46JXAUhMzIKiCa7BabPeIy3AQcTkXwVVN7DbqsiCew==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      normalize-url: 6.1.0
      postcss: 8.4.16
      postcss-value-parser: 4.2.0

  /postcss-normalize-whitespace/5.1.1_postcss@8.4.16:
    resolution: {integrity: sha512-83ZJ4t3NUDETIHTa3uEg6asWjSBYL5EdkVB0sDncx9ERzOKBVJIUeDO9RyA9Zwtig8El1d79HBp0JEi8wvGQnA==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.16
      postcss-value-parser: 4.2.0

  /postcss-ordered-values/5.1.3_postcss@8.4.16:
    resolution: {integrity: sha512-9UO79VUhPwEkzbb3RNpqqghc6lcYej1aveQteWY+4POIwlqkYE21HKWaLDF6lWNuqCobEAyTovVhtI32Rbv2RQ==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      cssnano-utils: 3.1.0_postcss@8.4.16
      postcss: 8.4.16
      postcss-value-parser: 4.2.0

  /postcss-reduce-idents/5.2.0_postcss@8.4.16:
    resolution: {integrity: sha512-BTrLjICoSB6gxbc58D5mdBK8OhXRDqud/zodYfdSi52qvDHdMwk+9kB9xsM8yJThH/sZU5A6QVSmMmaN001gIg==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.16
      postcss-value-parser: 4.2.0

  /postcss-reduce-initial/5.1.0_postcss@8.4.16:
    resolution: {integrity: sha512-5OgTUviz0aeH6MtBjHfbr57tml13PuedK/Ecg8szzd4XRMbYxH4572JFG067z+FqBIf6Zp/d+0581glkvvWMFw==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      browserslist: 4.21.4
      caniuse-api: 3.0.0
      postcss: 8.4.16

  /postcss-reduce-transforms/5.1.0_postcss@8.4.16:
    resolution: {integrity: sha512-2fbdbmgir5AvpW9RLtdONx1QoYG2/EtqpNQbFASDlixBbAYuTcJ0dECwlqNqH7VbaUnEnh8SrxOe2sRIn24XyQ==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.16
      postcss-value-parser: 4.2.0

  /postcss-selector-parser/6.0.10:
    resolution: {integrity: sha512-IQ7TZdoaqbT+LCpShg46jnZVlhWD2w6iQYAcYXfHARZ7X1t/UGhhceQDs5X0cGqKvYlHNOuv7Oa1xmb0oQuA3w==}
    engines: {node: '>=4'}
    dependencies:
      cssesc: 3.0.0
      util-deprecate: 1.0.2

  /postcss-sort-media-queries/4.3.0_postcss@8.4.16:
    resolution: {integrity: sha512-jAl8gJM2DvuIJiI9sL1CuiHtKM4s5aEIomkU8G3LFvbP+p8i7Sz8VV63uieTgoewGqKbi+hxBTiOKJlB35upCg==}
    engines: {node: '>=10.0.0'}
    peerDependencies:
      postcss: ^8.4.16
    dependencies:
      postcss: 8.4.16
      sort-css-media-queries: 2.1.0

  /postcss-svgo/5.1.0_postcss@8.4.16:
    resolution: {integrity: sha512-D75KsH1zm5ZrHyxPakAxJWtkyXew5qwS70v56exwvw542d9CRtTo78K0WeFxZB4G7JXKKMbEZtZayTGdIky/eA==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.16
      postcss-value-parser: 4.2.0
      svgo: 2.8.0

  /postcss-unique-selectors/5.1.1_postcss@8.4.16:
    resolution: {integrity: sha512-5JiODlELrz8L2HwxfPnhOWZYWDxVHWL83ufOv84NrcgipI7TaeRsatAhK4Tr2/ZiYldpK/wBvw5BD3qfaK96GA==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.16
      postcss-selector-parser: 6.0.10

  /postcss-value-parser/4.2.0:
    resolution: {integrity: sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==}

  /postcss-zindex/5.1.0_postcss@8.4.16:
    resolution: {integrity: sha512-fgFMf0OtVSBR1va1JNHYgMxYk73yhn/qb4uQDq1DLGYolz8gHCyr/sesEuGUaYs58E3ZJRcpoGuPVoB7Meiq9A==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.16

  /postcss/6.0.1:
    resolution: {integrity: sha512-VbGX1LQgQbf9l3cZ3qbUuC3hGqIEOGQFHAEHQ/Diaeo0yLgpgK5Rb8J+OcamIfQ9PbAU/fzBjVtQX3AhJHUvZw==}
    engines: {node: '>=4.0.0'}
    dependencies:
      chalk: 1.1.3
      source-map: 0.5.7
      supports-color: 3.2.3
    dev: true

  /postcss/7.0.39:
    resolution: {integrity: sha512-yioayjNbHn6z1/Bywyb2Y4s3yvDAeXGOyxqD+LnVOinq6Mdmd++SW2wUNVzavyyHxd6+DxzWGIuosg6P1Rj8uA==}
    engines: {node: '>=6.0.0'}
    dependencies:
      picocolors: 0.2.1
      source-map: 0.6.1
    dev: true

  /postcss/8.4.16:
    resolution: {integrity: sha512-ipHE1XBvKzm5xI7hiHCZJCSugxvsdq2mPnsq5+UF+VHCjiBvtDrlxJfMBToWaP9D5XlgNmcFGqoHmUn0EYEaRQ==}
    engines: {node: ^10 || ^12 || >=14}
    dependencies:
      nanoid: 3.3.4
      picocolors: 1.0.0
      source-map-js: 1.0.2

  /prelude-ls/1.1.2:
    resolution: {integrity: sha512-ESF23V4SKG6lVSGZgYNpbsiaAkdab6ZgOxe52p7+Kid3W3u3bxR4Vfd/o21dmN7jSt0IwgZ4v5MUd26FEtXE9w==}
    engines: {node: '>= 0.8.0'}
    dev: true

  /prelude-ls/1.2.1:
    resolution: {integrity: sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==}
    engines: {node: '>= 0.8.0'}
    dev: true

  /prepend-http/2.0.0:
    resolution: {integrity: sha512-ravE6m9Atw9Z/jjttRUZ+clIXogdghyZAuWJ3qEzjT+jI/dL1ifAqhZeC5VHzQp1MSt1+jxKkFNemj/iO7tVUA==}
    engines: {node: '>=4'}

  /prettier/2.3.2:
    resolution: {integrity: sha512-lnJzDfJ66zkMy58OL5/NY5zp70S7Nz6KqcKkXYzn2tMVrNxvbqaBpg7H3qHaLxCJ5lNMsGuM8+ohS7cZrthdLQ==}
    engines: {node: '>=10.13.0'}
    hasBin: true
    dev: true

  /pretty-error/4.0.0:
    resolution: {integrity: sha512-AoJ5YMAcXKYxKhuJGdcvse+Voc6v1RgnsR3nWcYU7q4t6z0Q6T86sv5Zq8VIRbOWWFpvdGE83LtdSMNd+6Y0xw==}
    dependencies:
      lodash: 4.17.21
      renderkid: 3.0.0

  /pretty-format/27.5.1:
    resolution: {integrity: sha512-Qb1gy5OrP5+zDf2Bvnzdl3jsTf1qXVMazbvCoKhtKqVs4/YK4ozX4gKQJJVyNe+cajNPn0KoC0MC3FUmaHWEmQ==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      ansi-regex: 5.0.1
      ansi-styles: 5.2.0
      react-is: 17.0.2
    dev: true

  /pretty-format/29.0.3:
    resolution: {integrity: sha512-cHudsvQr1K5vNVLbvYF/nv3Qy/F/BcEKxGuIeMiVMRHxPOO1RxXooP8g/ZrwAp7Dx+KdMZoOc7NxLHhMrP2f9Q==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    dependencies:
      '@jest/schemas': 29.0.0
      ansi-styles: 5.2.0
      react-is: 18.2.0
    dev: true

  /pretty-time/1.1.0:
    resolution: {integrity: sha512-28iF6xPQrP8Oa6uxE6a1biz+lWeTOAPKggvjB8HAs6nVMKZwf5bG++632Dx614hIWgUPkgivRfG+a8uAXGTIbA==}
    engines: {node: '>=4'}

  /prism-react-renderer/1.3.5_react@17.0.2:
    resolution: {integrity: sha512-IJ+MSwBWKG+SM3b2SUfdrhC+gu01QkV2KmRQgREThBfSQRoufqRfxfHUxpG1WcaFjP+kojcFyO9Qqtpgt3qLCg==}
    peerDependencies:
      react: '>=0.14.9'
    dependencies:
      react: 17.0.2
    dev: false

  /prismjs/1.29.0:
    resolution: {integrity: sha512-Kx/1w86q/epKcmte75LNrEoT+lX8pBpavuAbvJWRXar7Hz8jrtF+e3vY751p0R8H9HdArwaCTNDDzHg/ScJK1Q==}
    engines: {node: '>=6'}
    dev: false

  /process-nextick-args/2.0.1:
    resolution: {integrity: sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag==}

  /promise/7.3.1:
    resolution: {integrity: sha512-nolQXZ/4L+bP/UGlkfaIujX9BKxGwmQ9OT4mOt5yvy8iK1h3wqTEJCijzGANTCCl9nWjY41juyAn2K3Q1hLLTg==}
    dependencies:
      asap: 2.0.6
    dev: false

  /prompts/2.4.2:
    resolution: {integrity: sha512-NxNv/kLguCA7p3jE8oL2aEBsrJWgAakBpgmgK6lpPWV+WuOmY6r2/zbAVnP+T8bQlA0nzHXSJSJW0Hq7ylaD2Q==}
    engines: {node: '>= 6'}
    dependencies:
      kleur: 3.0.3
      sisteransi: 1.0.5

  /prop-types/15.8.1:
    resolution: {integrity: sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg==}
    dependencies:
      loose-envify: 1.4.0
      object-assign: 4.1.1
      react-is: 16.13.1

  /property-information/5.6.0:
    resolution: {integrity: sha512-YUHSPk+A30YPv+0Qf8i9Mbfe/C0hdPXk1s1jPVToV8pk8BQtpw10ct89Eo7OWkutrwqvT0eicAxlOg3dOAu8JA==}
    dependencies:
      xtend: 4.0.2

  /proxy-addr/2.0.7:
    resolution: {integrity: sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==}
    engines: {node: '>= 0.10'}
    dependencies:
      forwarded: 0.2.0
      ipaddr.js: 1.9.1

  /psl/1.9.0:
    resolution: {integrity: sha512-E/ZsdU4HLs/68gYzgGTkMicWTLPdAftJLfJFlLUAAKZGkStNU72sZjT66SnMDVOfOWY/YAoiD7Jxa9iHvngcag==}
    dev: true

  /pump/3.0.0:
    resolution: {integrity: sha512-LwZy+p3SFs1Pytd/jYct4wpv49HiYCqd9Rlc5ZVdk0V+8Yzv6jR5Blk3TRmPL1ft69TxP0IMZGJ+WPFU2BFhww==}
    dependencies:
      end-of-stream: 1.4.4
      once: 1.4.0

  /punycode/1.4.1:
    resolution: {integrity: sha512-jmYNElW7yvO7TV33CjSmvSiE2yco3bV2czu/OzDKdMNVZQWfxCblURLhf+47syQRBntjfLdd/H0egrzIG+oaFQ==}

  /punycode/2.1.1:
    resolution: {integrity: sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A==}
    engines: {node: '>=6'}

  /pupa/2.1.1:
    resolution: {integrity: sha512-l1jNAspIBSFqbT+y+5FosojNpVpF94nlI+wDUpqP9enwOTfHx9f0gh5nB96vl+6yTpsJsypeNrwfzPrKuHB41A==}
    engines: {node: '>=8'}
    dependencies:
      escape-goat: 2.1.1

  /pure-color/1.3.0:
    resolution: {integrity: sha512-QFADYnsVoBMw1srW7OVKEYjG+MbIa49s54w1MA1EDY6r2r/sTcKKYqRX1f4GYvnXP7eN/Pe9HFcX+hwzmrXRHA==}
    dev: false

  /qs/6.10.3:
    resolution: {integrity: sha512-wr7M2E0OFRfIfJZjKGieI8lBKb7fRCH4Fv5KNPEs7gJ8jadvotdsS08PzOKR7opXhZ/Xkjtt3WF9g38drmyRqQ==}
    engines: {node: '>=0.6'}
    dependencies:
      side-channel: 1.0.4

  /qs/6.5.3:
    resolution: {integrity: sha512-qxXIEh4pCGfHICj1mAJQ2/2XVZkjCDTcEgfoSQxc/fYivUZxTkk7L3bDBJSoNrEzXI17oUO5Dp07ktqE5KzczA==}
    engines: {node: '>=0.6'}
    dev: true

  /querystringify/2.2.0:
    resolution: {integrity: sha512-FIqgj2EUvTa7R50u0rGsyTftzjYmv/a3hO345bZNrqabNqjtgiDMgmo4mkUjd+nzU5oF3dClKqFIPUKybUyqoQ==}
    dev: true

  /queue-microtask/1.2.3:
    resolution: {integrity: sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==}

  /queue/6.0.2:
    resolution: {integrity: sha512-iHZWu+q3IdFZFX36ro/lKBkSvfkztY5Y7HMiPlOUjhupPcG2JMfst2KKEpu5XndviX/3UhFbRngUPNKtgvtZiA==}
    dependencies:
      inherits: 2.0.4

  /quick-lru/4.0.1:
    resolution: {integrity: sha512-ARhCpm70fzdcvNQfPoy49IaanKkTlRWF2JMzqhcJbhSFRZv7nPTvZJdcY7301IPmvW+/p0RgIWnQDLJxifsQ7g==}
    engines: {node: '>=8'}
    dev: true

  /randombytes/2.1.0:
    resolution: {integrity: sha512-vYl3iOX+4CKUWuxGi9Ukhie6fsqXqS9FE2Zaic4tNFD2N2QQaXOMFbuKK4QmDHC0JO6B1Zp41J0LpT0oR68amQ==}
    dependencies:
      safe-buffer: 5.2.1

  /range-parser/1.2.0:
    resolution: {integrity: sha512-kA5WQoNVo4t9lNx2kQNFCxKeBl5IbbSNBl1M/tLkw9WCn+hxNBAW5Qh8gdhs63CJnhjJ2zQWFoqPJP2sK1AV5A==}
    engines: {node: '>= 0.6'}

  /range-parser/1.2.1:
    resolution: {integrity: sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==}
    engines: {node: '>= 0.6'}

  /raw-body/2.5.1:
    resolution: {integrity: sha512-qqJBtEyVgS0ZmPGdCFPWJ3FreoqvG4MVQln/kCgF7Olq95IbOp0/BWyMwbdtn4VTvkM8Y7khCQ2Xgk/tcrCXig==}
    engines: {node: '>= 0.8'}
    dependencies:
      bytes: 3.1.2
      http-errors: 2.0.0
      iconv-lite: 0.4.24
      unpipe: 1.0.0

  /rc/1.2.8:
    resolution: {integrity: sha512-y3bGgqKj3QBdxLbLkomlohkvsA8gdAiUQlSBJnBhfn+BPxg4bc62d8TcBW15wavDfgexCgccckhcZvywyQYPOw==}
    hasBin: true
    dependencies:
      deep-extend: 0.6.0
      ini: 1.3.8
      minimist: 1.2.6
      strip-json-comments: 2.0.1

  /react-base16-styling/0.6.0:
    resolution: {integrity: sha512-yvh/7CArceR/jNATXOKDlvTnPKPmGZz7zsenQ3jUwLzHkNUR0CvY3yGYJbWJ/nnxsL8Sgmt5cO3/SILVuPO6TQ==}
    dependencies:
      base16: 1.0.0
      lodash.curry: 4.1.1
      lodash.flow: 3.5.0
      pure-color: 1.3.0
    dev: false

  /react-dev-utils/12.0.1_typescript@4.7.4+webpack@5.74.0:
    resolution: {integrity: sha512-84Ivxmr17KjUupyqzFode6xKhjwuEJDROWKJy/BthkL7Wn6NJ8h4WE6k/exAv6ImS+0oZLRRW5j/aINMHyeGeQ==}
    engines: {node: '>=14'}
    dependencies:
      '@babel/code-frame': 7.18.6
      address: 1.2.1
      browserslist: 4.21.4
      chalk: 4.1.2
      cross-spawn: 7.0.3
      detect-port-alt: 1.1.6
      escape-string-regexp: 4.0.0
      filesize: 8.0.7
      find-up: 5.0.0
      fork-ts-checker-webpack-plugin: 6.5.2_typescript@4.7.4+webpack@5.74.0
      global-modules: 2.0.0
      globby: 11.1.0
      gzip-size: 6.0.0
      immer: 9.0.15
      is-root: 2.1.0
      loader-utils: 3.2.0
      open: 8.4.0
      pkg-up: 3.1.0
      prompts: 2.4.2
      react-error-overlay: 6.0.11
      recursive-readdir: 2.2.2
      shell-quote: 1.7.3
      strip-ansi: 6.0.1
      text-table: 0.2.0
    transitivePeerDependencies:
      - eslint
      - typescript
      - vue-template-compiler
      - webpack

  /react-dom/17.0.2_react@17.0.2:
    resolution: {integrity: sha512-s4h96KtLDUQlsENhMn1ar8t2bEa+q/YAtj8pPPdIjPDGBDIVNsrD9aXNWqspUe6AzKCIG0C1HZZLqLV7qpOBGA==}
    peerDependencies:
      react: 17.0.2
    dependencies:
      loose-envify: 1.4.0
      object-assign: 4.1.1
      react: 17.0.2
      scheduler: 0.20.2

  /react-error-overlay/6.0.11:
    resolution: {integrity: sha512-/6UZ2qgEyH2aqzYZgQPxEnz33NJ2gNsnHA2o5+o4wW9bLM/JYQitNP9xPhsXwC08hMMovfGe/8retsdDsczPRg==}

  /react-fast-compare/3.2.0:
    resolution: {integrity: sha512-rtGImPZ0YyLrscKI9xTpV8psd6I8VAtjKCzQDlzyDvqJA8XOW78TXYQwNRNd8g8JZnDu8q9Fu/1v4HPAVwVdHA==}

  /react-helmet-async/1.3.0_react-dom@17.0.2+react@17.0.2:
    resolution: {integrity: sha512-9jZ57/dAn9t3q6hneQS0wukqC2ENOBgMNVEhb/ZG9ZSxUetzVIw4iAmEU38IaVg3QGYauQPhSeUTuIUtFglWpg==}
    peerDependencies:
      react: ^16.6.0 || ^17.0.0 || ^18.0.0
      react-dom: ^16.6.0 || ^17.0.0 || ^18.0.0
    dependencies:
      '@babel/runtime': 7.17.9
      invariant: 2.2.4
      prop-types: 15.8.1
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
      react-fast-compare: 3.2.0
      shallowequal: 1.1.0

  /react-is/16.13.1:
    resolution: {integrity: sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ==}

  /react-is/17.0.2:
    resolution: {integrity: sha512-w2GsyukL62IJnlaff/nRegPQR94C/XXamvMWmSHRJ4y7Ts/4ocGRmTHvOs8PSE6pB3dWOrD/nueuU5sduBsQ4w==}
    dev: true

  /react-is/18.2.0:
    resolution: {integrity: sha512-xWGDIW6x921xtzPkhiULtthJHoJvBbF3q26fzloPCK0hsvxtPVelvftw3zjbHWSkR2km9Z+4uxbDDK/6Zw9B8w==}
    dev: true

  /react-json-view/1.21.3_3a28dae5d20d968467088dcb8f1d3843:
    resolution: {integrity: sha512-13p8IREj9/x/Ye4WI/JpjhoIwuzEgUAtgJZNBJckfzJt1qyh24BdTm6UQNGnyTq9dapQdrqvquZTo3dz1X6Cjw==}
    peerDependencies:
      react: ^17.0.0 || ^16.3.0 || ^15.5.4
      react-dom: ^17.0.0 || ^16.3.0 || ^15.5.4
    dependencies:
      flux: 4.0.3_react@17.0.2
      react: 17.0.2
      react-base16-styling: 0.6.0
      react-dom: 17.0.2_react@17.0.2
      react-lifecycles-compat: 3.0.4
      react-textarea-autosize: 8.3.4_7df2e632d193aca1f14601bd0dc974c3
    transitivePeerDependencies:
      - '@types/react'
      - encoding
    dev: false

  /react-lifecycles-compat/3.0.4:
    resolution: {integrity: sha512-fBASbA6LnOU9dOU2eW7aQ8xmYBSXUIWr+UmF9b1efZBazGNO+rcXT/icdKnYm2pTwcRylVUYwW7H1PHfLekVzA==}
    dev: false

  /react-loadable-ssr-addon-v5-slorber/1.0.1_4e32ce23c6949bd47cf53d21bd84df08:
    resolution: {integrity: sha512-lq3Lyw1lGku8zUEJPDxsNm1AfYHBrO9Y1+olAYwpUJ2IGFBskM0DMKok97A6LWUpHm+o7IvQBOWu9MLenp9Z+A==}
    engines: {node: '>=10.13.0'}
    peerDependencies:
      react-loadable: '*'
      webpack: '>=4.41.1 || 5.x'
    dependencies:
      '@babel/runtime': 7.17.9
      react-loadable: /@docusaurus/react-loadable/5.5.2_react@17.0.2
      webpack: 5.74.0

  /react-router-config/5.1.1_react-router@5.3.3+react@17.0.2:
    resolution: {integrity: sha512-DuanZjaD8mQp1ppHjgnnUnyOlqYXZVjnov/JzFhjLEwd3Z4dYjMSnqrEzzGThH47vpCOqPPwJM2FtthLeJ8Pbg==}
    peerDependencies:
      react: '>=15'
      react-router: '>=5'
    dependencies:
      '@babel/runtime': 7.17.9
      react: 17.0.2
      react-router: 5.3.3_react@17.0.2

  /react-router-dom/5.3.3_react@17.0.2:
    resolution: {integrity: sha512-Ov0tGPMBgqmbu5CDmN++tv2HQ9HlWDuWIIqn4b88gjlAN5IHI+4ZUZRcpz9Hl0azFIwihbLDYw1OiHGRo7ZIng==}
    peerDependencies:
      react: '>=15'
    dependencies:
      '@babel/runtime': 7.17.9
      history: 4.10.1
      loose-envify: 1.4.0
      prop-types: 15.8.1
      react: 17.0.2
      react-router: 5.3.3_react@17.0.2
      tiny-invariant: 1.2.0
      tiny-warning: 1.0.3

  /react-router/5.3.3_react@17.0.2:
    resolution: {integrity: sha512-mzQGUvS3bM84TnbtMYR8ZjKnuPJ71IjSzR+DE6UkUqvN4czWIqEs17yLL8xkAycv4ev0AiN+IGrWu88vJs/p2w==}
    peerDependencies:
      react: '>=15'
    dependencies:
      '@babel/runtime': 7.17.9
      history: 4.10.1
      hoist-non-react-statics: 3.3.2
      loose-envify: 1.4.0
      mini-create-react-context: 0.4.1_prop-types@15.8.1+react@17.0.2
      path-to-regexp: 1.8.0
      prop-types: 15.8.1
      react: 17.0.2
      react-is: 16.13.1
      tiny-invariant: 1.2.0
      tiny-warning: 1.0.3

  /react-textarea-autosize/8.3.4_7df2e632d193aca1f14601bd0dc974c3:
    resolution: {integrity: sha512-CdtmP8Dc19xL8/R6sWvtknD/eCXkQr30dtvC4VmGInhRsfF8X/ihXCq6+9l9qbxmKRiq407/7z5fxE7cVWQNgQ==}
    engines: {node: '>=10'}
    peerDependencies:
      react: ^16.8.0 || ^17.0.0 || ^18.0.0
    dependencies:
      '@babel/runtime': 7.17.9
      react: 17.0.2
      use-composed-ref: 1.3.0_react@17.0.2
      use-latest: 1.2.1_7df2e632d193aca1f14601bd0dc974c3
    transitivePeerDependencies:
      - '@types/react'
    dev: false

  /react/17.0.2:
    resolution: {integrity: sha512-gnhPt75i/dq/z3/6q/0asP78D0u592D5L1pd7M8P+dck6Fu/jJeL6iVVK23fptSUZj8Vjf++7wXA8UNclGQcbA==}
    engines: {node: '>=0.10.0'}
    dependencies:
      loose-envify: 1.4.0
      object-assign: 4.1.1

  /read-pkg-up/7.0.1:
    resolution: {integrity: sha512-zK0TB7Xd6JpCLmlLmufqykGE+/TlOePD6qKClNW7hHDKFh/J7/7gCWGR7joEQEW1bKq3a3yUZSObOoWLFQ4ohg==}
    engines: {node: '>=8'}
    dependencies:
      find-up: 4.1.0
      read-pkg: 5.2.0
      type-fest: 0.8.1
    dev: true

  /read-pkg/5.2.0:
    resolution: {integrity: sha512-Ug69mNOpfvKDAc2Q8DRpMjjzdtrnv9HcSMX+4VsZxD1aZ6ZzrIE7rlzXBtWTyhULSMKg076AW6WR5iZpD0JiOg==}
    engines: {node: '>=8'}
    dependencies:
      '@types/normalize-package-data': 2.4.1
      normalize-package-data: 2.5.0
      parse-json: 5.2.0
      type-fest: 0.6.0
    dev: true

  /readable-stream/2.3.7:
    resolution: {integrity: sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==}
    dependencies:
      core-util-is: 1.0.3
      inherits: 2.0.4
      isarray: 1.0.0
      process-nextick-args: 2.0.1
      safe-buffer: 5.1.2
      string_decoder: 1.1.1
      util-deprecate: 1.0.2

  /readable-stream/3.6.0:
    resolution: {integrity: sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==}
    engines: {node: '>= 6'}
    dependencies:
      inherits: 2.0.4
      string_decoder: 1.3.0
      util-deprecate: 1.0.2

  /readdirp/3.5.0:
    resolution: {integrity: sha512-cMhu7c/8rdhkHXWsY+osBhfSy0JikwpHK/5+imo+LpeasTF8ouErHrlYkwT0++njiyuDvc7OFY5T3ukvZ8qmFQ==}
    engines: {node: '>=8.10.0'}
    dependencies:
      picomatch: 2.3.1
    dev: true

  /readdirp/3.6.0:
    resolution: {integrity: sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==}
    engines: {node: '>=8.10.0'}
    dependencies:
      picomatch: 2.3.1

  /reading-time/1.5.0:
    resolution: {integrity: sha512-onYyVhBNr4CmAxFsKS7bz+uTLRakypIe4R+5A824vBSkQy/hB3fZepoVEf8OVAxzLvK+H/jm9TzpI3ETSm64Kg==}
    dev: false

  /rechoir/0.6.2:
    resolution: {integrity: sha512-HFM8rkZ+i3zrV+4LQjwQ0W+ez98pApMGM3HUrN04j3CqzPOzl9nmP15Y8YXNm8QHGv/eacOVEjqhmWpkRV0NAw==}
    engines: {node: '>= 0.10'}
    dependencies:
      resolve: 1.22.1

  /recursive-readdir/2.2.2:
    resolution: {integrity: sha512-nRCcW9Sj7NuZwa2XvH9co8NPeXUBhZP7CRKJtU+cS6PW9FpCIFoI5ib0NT1ZrbNuPoRy0ylyCaUL8Gih4LSyFg==}
    engines: {node: '>=0.10.0'}
    dependencies:
      minimatch: 3.0.4

  /redent/3.0.0:
    resolution: {integrity: sha512-6tDA8g98We0zd0GvVeMT9arEOnTw9qM03L9cJXaCjrip1OO764RDBLBfrB4cwzNGDj5OA5ioymC9GkizgWJDUg==}
    engines: {node: '>=8'}
    dependencies:
      indent-string: 4.0.0
      strip-indent: 3.0.0
    dev: true

  /regenerate-unicode-properties/10.1.0:
    resolution: {integrity: sha512-d1VudCLoIGitcU/hEg2QqvyGZQmdC0Lf8BqdOMXGFSvJP4bNV1+XqbPQeHHLD51Jh4QJJ225dlIFvY4Ly6MXmQ==}
    engines: {node: '>=4'}
    dependencies:
      regenerate: 1.4.2

  /regenerate/1.4.2:
    resolution: {integrity: sha512-zrceR/XhGYU/d/opr2EKO7aRHUeiBI8qjtfHqADTwZd6Szfy16la6kqD0MIUs5z5hx6AaKa+PixpPrR289+I0A==}

  /regenerator-runtime/0.13.9:
    resolution: {integrity: sha512-p3VT+cOEgxFsRRA9X4lkI1E+k2/CtnKtU4gcxyaCUreilL/vqI6CdZ3wxVUx3UOUg+gnUOQQcRI7BmSI656MYA==}

  /regenerator-transform/0.15.0:
    resolution: {integrity: sha512-LsrGtPmbYg19bcPHwdtmXwbW+TqNvtY4riE3P83foeHRroMbH6/2ddFBfab3t7kbzc7v7p4wbkIecHImqt0QNg==}
    dependencies:
      '@babel/runtime': 7.17.9

  /regexp.prototype.flags/1.4.3:
    resolution: {integrity: sha512-fjggEOO3slI6Wvgjwflkc4NFRCTZAu5CnNfBd5qOMYhWdn67nJBBu34/TkD++eeFmd8C9r9jfXJ27+nSiRkSUA==}
    engines: {node: '>= 0.4'}
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.4
      functions-have-names: 1.2.3
    dev: true

  /regexpp/3.2.0:
    resolution: {integrity: sha512-pq2bWo9mVD43nbts2wGv17XLiNLya+GklZ8kaDLV2Z08gDCsGpnKn9BFMepvWuHCbyVvY7J5o5+BVvoQbmlJLg==}
    engines: {node: '>=8'}
    dev: true

  /regexpu-core/5.2.1:
    resolution: {integrity: sha512-HrnlNtpvqP1Xkb28tMhBUO2EbyUHdQlsnlAhzWcwHy8WJR53UWr7/MAvqrsQKMbV4qdpv03oTMG8iIhfsPFktQ==}
    engines: {node: '>=4'}
    dependencies:
      regenerate: 1.4.2
      regenerate-unicode-properties: 10.1.0
      regjsgen: 0.7.1
      regjsparser: 0.9.1
      unicode-match-property-ecmascript: 2.0.0
      unicode-match-property-value-ecmascript: 2.0.0

  /registry-auth-token/4.2.2:
    resolution: {integrity: sha512-PC5ZysNb42zpFME6D/XlIgtNGdTl8bBOCw90xQLVMpzuuubJKYDWFAEuUNc+Cn8Z8724tg2SDhDRrkVEsqfDMg==}
    engines: {node: '>=6.0.0'}
    dependencies:
      rc: 1.2.8

  /registry-url/5.1.0:
    resolution: {integrity: sha512-8acYXXTI0AkQv6RAOjE3vOaIXZkT9wo4LOFbBKYQEEnnMNBpKqdUrI6S4NT0KPIo/WVvJ5tE/X5LF/TQUf0ekw==}
    engines: {node: '>=8'}
    dependencies:
      rc: 1.2.8

  /regjsgen/0.7.1:
    resolution: {integrity: sha512-RAt+8H2ZEzHeYWxZ3H2z6tF18zyyOnlcdaafLrm21Bguj7uZy6ULibiAFdXEtKQY4Sy7wDTwDiOazasMLc4KPA==}

  /regjsparser/0.9.1:
    resolution: {integrity: sha512-dQUtn90WanSNl+7mQKcXAgZxvUe7Z0SqXlgzv0za4LwiUhyzBC58yQO3liFoUgu8GiJVInAhJjkj1N0EtQ5nkQ==}
    hasBin: true
    dependencies:
      jsesc: 0.5.0

  /relateurl/0.2.7:
    resolution: {integrity: sha512-G08Dxvm4iDN3MLM0EsP62EDV9IuhXPR6blNz6Utcp7zyV3tr4HVNINt6MpaRWbxoOHT3Q7YN2P+jaHX8vUbgog==}
    engines: {node: '>= 0.10'}

  /remark-emoji/2.2.0:
    resolution: {integrity: sha512-P3cj9s5ggsUvWw5fS2uzCHJMGuXYRb0NnZqYlNecewXt8QBU9n5vW3DUUKOhepS8F9CwdMx9B8a3i7pqFWAI5w==}
    dependencies:
      emoticon: 3.2.0
      node-emoji: 1.11.0
      unist-util-visit: 2.0.3

  /remark-footnotes/2.0.0:
    resolution: {integrity: sha512-3Clt8ZMH75Ayjp9q4CorNeyjwIxHFcTkaektplKGl2A1jNGEUey8cKL0ZC5vJwfcD5GFGsNLImLG/NGzWIzoMQ==}

  /remark-mdx/1.6.22:
    resolution: {integrity: sha512-phMHBJgeV76uyFkH4rvzCftLfKCr2RZuF+/gmVcaKrpsihyzmhXjA0BEMDaPTXG5y8qZOKPVo83NAOX01LPnOQ==}
    dependencies:
      '@babel/core': 7.12.9
      '@babel/helper-plugin-utils': 7.10.4
      '@babel/plugin-proposal-object-rest-spread': 7.12.1_@babel+core@7.12.9
      '@babel/plugin-syntax-jsx': 7.12.1_@babel+core@7.12.9
      '@mdx-js/util': 1.6.22
      is-alphabetical: 1.0.4
      remark-parse: 8.0.3
      unified: 9.2.0
    transitivePeerDependencies:
      - supports-color

  /remark-parse/8.0.3:
    resolution: {integrity: sha512-E1K9+QLGgggHxCQtLt++uXltxEprmWzNfg+MxpfHsZlrddKzZ/hZyWHDbK3/Ap8HJQqYJRXP+jHczdL6q6i85Q==}
    dependencies:
      ccount: 1.1.0
      collapse-white-space: 1.0.6
      is-alphabetical: 1.0.4
      is-decimal: 1.0.4
      is-whitespace-character: 1.0.4
      is-word-character: 1.0.4
      markdown-escapes: 1.0.4
      parse-entities: 2.0.0
      repeat-string: 1.6.1
      state-toggle: 1.0.3
      trim: 1.0.1
      trim-trailing-lines: 1.1.4
      unherit: 1.1.3
      unist-util-remove-position: 2.0.1
      vfile-location: 3.2.0
      xtend: 4.0.2

  /remark-squeeze-paragraphs/4.0.0:
    resolution: {integrity: sha512-8qRqmL9F4nuLPIgl92XUuxI3pFxize+F1H0e/W3llTk0UsjJaj01+RrirkMw7P21RKe4X6goQhYRSvNWX+70Rw==}
    dependencies:
      mdast-squeeze-paragraphs: 4.0.0

  /renderkid/3.0.0:
    resolution: {integrity: sha512-q/7VIQA8lmM1hF+jn+sFSPWGlMkSAeNYcPLmDQx2zzuiDfaLrOmumR8iaUKlenFgh0XRPIUeSPlH3A+AW3Z5pg==}
    dependencies:
      css-select: 4.3.0
      dom-converter: 0.2.0
      htmlparser2: 6.1.0
      lodash: 4.17.21
      strip-ansi: 6.0.1

  /repeat-string/1.6.1:
    resolution: {integrity: sha512-PV0dzCYDNfRi1jCDbJzpW7jNNDRuCOG/jI5ctQcGKt/clZD+YcPS3yIlWuTJMmESC8aevCFmWJy5wjAFgNqN6w==}
    engines: {node: '>=0.10'}

  /request/2.88.2:
    resolution: {integrity: sha512-MsvtOrfG9ZcrOwAW+Qi+F6HbD0CWXEh9ou77uOb7FM2WPhwT7smM833PzanhJLsgXjN89Ir6V2PczXNnMpwKhw==}
    engines: {node: '>= 6'}
    deprecated: request has been deprecated, see https://github.com/request/request/issues/3142
    dependencies:
      aws-sign2: 0.7.0
      aws4: 1.11.0
      caseless: 0.12.0
      combined-stream: 1.0.8
      extend: 3.0.2
      forever-agent: 0.6.1
      form-data: 2.3.3
      har-validator: 5.1.5
      http-signature: 1.2.0
      is-typedarray: 1.0.0
      isstream: 0.1.2
      json-stringify-safe: 5.0.1
      mime-types: 2.1.35
      oauth-sign: 0.9.0
      performance-now: 2.1.0
      qs: 6.5.3
      safe-buffer: 5.2.1
      tough-cookie: 2.5.0
      tunnel-agent: 0.6.0
      uuid: 3.4.0
    dev: true

  /require-directory/2.1.1:
    resolution: {integrity: sha512-fGxEI7+wsG9xrvdjsrlmL22OMTTiHRwAMroiEeMgq8gzoLC/PQr7RsRDSTLUg/bZAZtF+TVIkHc6/4RIKrui+Q==}
    engines: {node: '>=0.10.0'}
    dev: true

  /require-from-string/2.0.2:
    resolution: {integrity: sha512-Xf0nWe6RseziFMu+Ap9biiUbmplq6S9/p+7w7YXP/JBHhrUDDUhwa+vANyubuqfZWTveU//DYVGsDG7RKL/vEw==}
    engines: {node: '>=0.10.0'}

  /require-like/0.1.2:
    resolution: {integrity: sha512-oyrU88skkMtDdauHDuKVrgR+zuItqr6/c//FXzvmxRGMexSDc6hNvJInGW3LL46n+8b50RykrvwSUIIQH2LQ5A==}

  /require-main-filename/2.0.0:
    resolution: {integrity: sha512-NKN5kMDylKuldxYLSUfrbo5Tuzh4hd+2E8NPPX02mZtn1VuREQToYe/ZdlJy+J3uCpfaiGF05e7B8W0iXbQHmg==}
    dev: true

  /requires-port/1.0.0:
    resolution: {integrity: sha512-KigOCHcocU3XODJxsu8i/j8T9tzT4adHiecwORRQ0ZZFcp7ahwXuRU1m+yuO90C5ZUyGeGfocHDI14M3L3yDAQ==}

  /resolve-from/4.0.0:
    resolution: {integrity: sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==}
    engines: {node: '>=4'}

  /resolve-from/5.0.0:
    resolution: {integrity: sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw==}
    engines: {node: '>=8'}
    dev: true

  /resolve-pathname/3.0.0:
    resolution: {integrity: sha512-C7rARubxI8bXFNB/hqcp/4iUeIXJhJZvFPFPiSPRnhU5UPxzMFIl+2E6yY6c4k9giDJAhtV+enfA+G89N6Csng==}

  /resolve.exports/1.1.0:
    resolution: {integrity: sha512-J1l+Zxxp4XK3LUDZ9m60LRJF/mAe4z6a4xyabPHk7pvK5t35dACV32iIjJDFeWZFfZlO29w6SZ67knR0tHzJtQ==}
    engines: {node: '>=10'}
    dev: true

  /resolve/1.17.0:
    resolution: {integrity: sha512-ic+7JYiV8Vi2yzQGFWOkiZD5Z9z7O2Zhm9XMaTxdJExKasieFCr+yXZ/WmXsckHiKl12ar0y6XiXDx3m4RHn1w==}
    dependencies:
      path-parse: 1.0.7

  /resolve/1.19.0:
    resolution: {integrity: sha512-rArEXAgsBG4UgRGcynxWIWKFvh/XZCcS8UJdHhwy91zwAvCZIbcs+vAbflgBnNjYMs/i/i+/Ux6IZhML1yPvxg==}
    dependencies:
      is-core-module: 2.10.0
      path-parse: 1.0.7

  /resolve/1.22.1:
    resolution: {integrity: sha512-nBpuuYuY5jFsli/JIs1oldw6fOQCBioohqWZg/2hiaOybXOft4lonv85uDOKXdf8rhyK159cxU5cDcK/NKk8zw==}
    hasBin: true
    dependencies:
      is-core-module: 2.10.0
      path-parse: 1.0.7
      supports-preserve-symlinks-flag: 1.0.0

  /resolve/2.0.0-next.4:
    resolution: {integrity: sha512-iMDbmAWtfU+MHpxt/I5iWI7cY6YVEZUQ3MBgPQ++XD1PELuJHIl82xBmObyP2KyQmkNB2dsqF7seoQQiAn5yDQ==}
    hasBin: true
    dependencies:
      is-core-module: 2.10.0
      path-parse: 1.0.7
      supports-preserve-symlinks-flag: 1.0.0
    dev: true

  /responselike/1.0.2:
    resolution: {integrity: sha512-/Fpe5guzJk1gPqdJLJR5u7eG/gNY4nImjbRDaVWVMRhne55TCmj2i9Q+54PBRfatRC8v/rIiv9BN0pMd9OV5EQ==}
    dependencies:
      lowercase-keys: 1.0.1

  /retry/0.13.1:
    resolution: {integrity: sha512-XQBQ3I8W1Cge0Seh+6gjj03LbmRFWuoszgK9ooCpwYIrhhoO80pfq4cUkU5DkknwfOfFteRwlZ56PYOGYyFWdg==}
    engines: {node: '>= 4'}

  /reusify/1.0.4:
    resolution: {integrity: sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw==}
    engines: {iojs: '>=1.0.0', node: '>=0.10.0'}

  /rimraf/3.0.2:
    resolution: {integrity: sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==}
    hasBin: true
    dependencies:
      glob: 7.2.3

  /rtl-detect/1.0.4:
    resolution: {integrity: sha512-EBR4I2VDSSYr7PkBmFy04uhycIpDKp+21p/jARYXlCSjQksTBQcJ0HFUPOO79EPPH5JS6VAhiIQbycf0O3JAxQ==}

  /rtlcss/3.5.0:
    resolution: {integrity: sha512-wzgMaMFHQTnyi9YOwsx9LjOxYXJPzS8sYnFaKm6R5ysvTkwzHiB0vxnbHwchHQT65PTdBjDG21/kQBWI7q9O7A==}
    hasBin: true
    dependencies:
      find-up: 5.0.0
      picocolors: 1.0.0
      postcss: 8.4.16
      strip-json-comments: 3.1.1
    dev: false

  /run-parallel/1.2.0:
    resolution: {integrity: sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==}
    dependencies:
      queue-microtask: 1.2.3

  /rxjs/7.5.6:
    resolution: {integrity: sha512-dnyv2/YsXhnm461G+R/Pe5bWP41Nm6LBXEYWI6eiFP4fiwx6WRI/CD0zbdVAudd9xwLEF2IDcKXLHit0FYjUzw==}
    dependencies:
      tslib: 2.4.0

  /safe-buffer/5.1.2:
    resolution: {integrity: sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==}

  /safe-buffer/5.2.1:
    resolution: {integrity: sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==}

  /safer-buffer/2.1.2:
    resolution: {integrity: sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==}

  /sass-graph/2.2.5:
    resolution: {integrity: sha512-VFWDAHOe6mRuT4mZRd4eKE+d8Uedrk6Xnh7Sh9b4NGufQLQjOrvf/MQoOdx+0s92L89FeyUUNfU597j/3uNpag==}
    hasBin: true
    dependencies:
      glob: 7.2.3
      lodash: 4.17.21
      scss-tokenizer: 0.2.3
      yargs: 13.3.2
    dev: true

  /sass-loader/12.4.0_sass@1.49.11+webpack@5.68.0:
    resolution: {integrity: sha512-7xN+8khDIzym1oL9XyS6zP6Ges+Bo2B2xbPrjdMHEYyV3AQYhd/wXeru++3ODHF0zMjYmVadblSKrPrjEkL8mg==}
    engines: {node: '>= 12.13.0'}
    peerDependencies:
      fibers: '>= 3.1.0'
      node-sass: ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0
      sass: ^1.3.0
      webpack: ^5.0.0
    peerDependenciesMeta:
      fibers:
        optional: true
      node-sass:
        optional: true
      sass:
        optional: true
    dependencies:
      klona: 2.0.5
      neo-async: 2.6.2
      sass: 1.49.11
      webpack: 5.68.0
    dev: true

  /sass/1.49.11:
    resolution: {integrity: sha512-wvS/geXgHUGs6A/4ud5BFIWKO1nKd7wYIGimDk4q4GFkJicILActpv9ueMT4eRGSsp1BdKHuw1WwAHXbhsJELQ==}
    engines: {node: '>=12.0.0'}
    hasBin: true
    dependencies:
      chokidar: 3.5.3
      immutable: 4.1.0
      source-map-js: 1.0.2
    dev: true

  /sax/1.2.4:
    resolution: {integrity: sha512-NqVDv9TpANUjFm0N8uM5GxL36UgKi9/atZw+x7YFnQ8ckwFGKrl4xX4yWtrey3UJm5nP1kUbnYgLopqWNSRhWw==}
    dev: false

  /saxes/5.0.1:
    resolution: {integrity: sha512-5LBh1Tls8c9xgGjw3QrMwETmTMVk0oFgvrFSvWx62llR2hcEInrKNZ2GZCCuuy2lvWrdl5jhbpeqc5hRYKFOcw==}
    engines: {node: '>=10'}
    dependencies:
      xmlchars: 2.2.0
    dev: true

  /scheduler/0.20.2:
    resolution: {integrity: sha512-2eWfGgAqqWFGqtdMmcL5zCMK1U8KlXv8SQFGglL3CEtd0aDVDWgeF/YoCmvln55m5zSk3J/20hTaSBeSObsQDQ==}
    dependencies:
      loose-envify: 1.4.0
      object-assign: 4.1.1

  /schema-utils/2.7.0:
    resolution: {integrity: sha512-0ilKFI6QQF5nxDZLFn2dMjvc4hjg/Wkg7rHd3jK6/A4a1Hl9VFdQWvgB1UMGoU94pad1P/8N7fMcEnLnSiju8A==}
    engines: {node: '>= 8.9.0'}
    dependencies:
      '@types/json-schema': 7.0.11
      ajv: 6.12.6
      ajv-keywords: 3.5.2_ajv@6.12.6

  /schema-utils/2.7.1:
    resolution: {integrity: sha512-SHiNtMOUGWBQJwzISiVYKu82GiV4QYGePp3odlY1tuKO7gPtphAT5R/py0fA6xtbgLL/RvtJZnU9b8s0F1q0Xg==}
    engines: {node: '>= 8.9.0'}
    dependencies:
      '@types/json-schema': 7.0.11
      ajv: 6.12.6
      ajv-keywords: 3.5.2_ajv@6.12.6

  /schema-utils/3.1.1:
    resolution: {integrity: sha512-Y5PQxS4ITlC+EahLuXaY86TXfR7Dc5lw294alXOq86JAHCihAIZfqv8nNCWvaEJvaC51uN9hbLGeV0cFBdH+Fw==}
    engines: {node: '>= 10.13.0'}
    dependencies:
      '@types/json-schema': 7.0.11
      ajv: 6.12.6
      ajv-keywords: 3.5.2_ajv@6.12.6

  /schema-utils/4.0.0:
    resolution: {integrity: sha512-1edyXKgh6XnJsJSQ8mKWXnN/BVaIbFMLpouRUrXgVq7WYne5kw3MW7UPhO44uRXQSIpTSXoJbmrR2X0w9kUTyg==}
    engines: {node: '>= 12.13.0'}
    dependencies:
      '@types/json-schema': 7.0.11
      ajv: 8.11.0
      ajv-formats: 2.1.1
      ajv-keywords: 5.1.0_ajv@8.11.0

  /scss-tokenizer/0.2.3:
    resolution: {integrity: sha512-dYE8LhncfBUar6POCxMTm0Ln+erjeczqEvCJib5/7XNkdw1FkUGgwMPY360FY0FgPWQxHWCx29Jl3oejyGLM9Q==}
    dependencies:
      js-base64: 2.6.4
      source-map: 0.4.4
    dev: true

  /section-matter/1.0.0:
    resolution: {integrity: sha512-vfD3pmTzGpufjScBh50YHKzEu2lxBWhVEHsNGoEXmCmn2hKGfeNLYMzCJpe8cD7gqX7TJluOVpBkAequ6dgMmA==}
    engines: {node: '>=4'}
    dependencies:
      extend-shallow: 2.0.1
      kind-of: 6.0.3

  /select-hose/2.0.0:
    resolution: {integrity: sha512-mEugaLK+YfkijB4fx0e6kImuJdCIt2LxCRcbEYPqRGCs4F2ogyfZU5IAZRdjCP8JPq2AtdNoC/Dux63d9Kiryg==}

  /selfsigned/2.1.1:
    resolution: {integrity: sha512-GSL3aowiF7wa/WtSFwnUrludWFoNhftq8bUkH9pkzjpN2XSPOAYEgg6e0sS9s0rZwgJzJiQRPU18A6clnoW5wQ==}
    engines: {node: '>=10'}
    dependencies:
      node-forge: 1.3.1

  /semver-diff/3.1.1:
    resolution: {integrity: sha512-GX0Ix/CJcHyB8c4ykpHGIAvLyOwOobtM/8d+TQkAd81/bEjgPHrfba41Vpesr7jX/t8Uh+R3EX9eAS5be+jQYg==}
    engines: {node: '>=8'}
    dependencies:
      semver: 6.3.0

  /semver/5.7.1:
    resolution: {integrity: sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==}
    hasBin: true

  /semver/6.3.0:
    resolution: {integrity: sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==}
    hasBin: true

  /semver/7.3.7:
    resolution: {integrity: sha512-QlYTucUYOews+WeEujDoEGziz4K6c47V/Bd+LjSSYcA94p+DmINdf7ncaUinThfvZyu13lN9OY1XDxt8C0Tw0g==}
    engines: {node: '>=10'}
    hasBin: true
    dependencies:
      lru-cache: 6.0.0

  /send/0.18.0:
    resolution: {integrity: sha512-qqWzuOjSFOuqPjFe4NOsMLafToQQwBSOEpS+FwEt3A2V3vKubTquT3vmLTQpFgMXp8AlFWFuP1qKaJZOtPpVXg==}
    engines: {node: '>= 0.8.0'}
    dependencies:
      debug: 2.6.9
      depd: 2.0.0
      destroy: 1.2.0
      encodeurl: 1.0.2
      escape-html: 1.0.3
      etag: 1.8.1
      fresh: 0.5.2
      http-errors: 2.0.0
      mime: 1.6.0
      ms: 2.1.3
      on-finished: 2.4.1
      range-parser: 1.2.1
      statuses: 2.0.1

  /serialize-javascript/6.0.0:
    resolution: {integrity: sha512-Qr3TosvguFt8ePWqsvRfrKyQXIiW+nGbYpy8XK24NQHE83caxWt+mIymTT19DGFbNWNLfEwsrkSmN64lVWB9ag==}
    dependencies:
      randombytes: 2.1.0

  /serve-handler/6.1.3:
    resolution: {integrity: sha512-FosMqFBNrLyeiIDvP1zgO6YoTzFYHxLDEIavhlmQ+knB2Z7l1t+kGLHkZIDN7UVWqQAmKI3D20A6F6jo3nDd4w==}
    dependencies:
      bytes: 3.0.0
      content-disposition: 0.5.2
      fast-url-parser: 1.1.3
      mime-types: 2.1.18
      minimatch: 3.0.4
      path-is-inside: 1.0.2
      path-to-regexp: 2.2.1
      range-parser: 1.2.0

  /serve-index/1.9.1:
    resolution: {integrity: sha512-pXHfKNP4qujrtteMrSBb0rc8HJ9Ms/GrXwcUtUtD5s4ewDJI8bT3Cz2zTVRMKtri49pLx2e0Ya8ziP5Ya2pZZw==}
    engines: {node: '>= 0.8.0'}
    dependencies:
      accepts: 1.3.8
      batch: 0.6.1
      debug: 2.6.9
      escape-html: 1.0.3
      http-errors: 1.6.3
      mime-types: 2.1.35
      parseurl: 1.3.3

  /serve-static/1.15.0:
    resolution: {integrity: sha512-XGuRDNjXUijsUL0vl6nSD7cwURuzEgglbOaFuZM9g3kwDXOWVTck0jLzjPzGD+TazWbboZYu52/9/XPdUgne9g==}
    engines: {node: '>= 0.8.0'}
    dependencies:
      encodeurl: 1.0.2
      escape-html: 1.0.3
      parseurl: 1.3.3
      send: 0.18.0

  /set-blocking/2.0.0:
    resolution: {integrity: sha512-KiKBS8AnWGEyLzofFfmvKwpdPzqiy16LvQfK3yv/fVH7Bj13/wl3JSR1J+rfgRE9q7xUJK4qvgS8raSOeLUehw==}
    dev: true

  /setimmediate/1.0.5:
    resolution: {integrity: sha512-MATJdZp8sLqDl/68LfQmbP8zKPLQNV6BIZoIgrscFDQ+RsvK/BxeDQOgyxKKoh0y/8h3BqVFnCqQ/gd+reiIXA==}
    dev: false

  /setprototypeof/1.1.0:
    resolution: {integrity: sha512-BvE/TwpZX4FXExxOxZyRGQQv651MSwmWKZGqvmPcRIjDqWub67kTKuIMx43cZZrS/cBBzwBcNDWoFxt2XEFIpQ==}

  /setprototypeof/1.2.0:
    resolution: {integrity: sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==}

  /shallow-clone/3.0.1:
    resolution: {integrity: sha512-/6KqX+GVUdqPuPPd2LxDDxzX6CAbjJehAAOKlNpqqUpAqPM6HeL8f+o3a+JsyGjn2lv0WY8UsTgUJjU9Ok55NA==}
    engines: {node: '>=8'}
    dependencies:
      kind-of: 6.0.3

  /shallowequal/1.1.0:
    resolution: {integrity: sha512-y0m1JoUZSlPAjXVtPPW70aZWfIL/dSP7AFkRnniLCrK/8MDKog3TySTBmckD+RObVxH0v4Tox67+F14PdED2oQ==}

  /shebang-command/2.0.0:
    resolution: {integrity: sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==}
    engines: {node: '>=8'}
    dependencies:
      shebang-regex: 3.0.0

  /shebang-regex/3.0.0:
    resolution: {integrity: sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==}
    engines: {node: '>=8'}

  /shell-quote/1.7.3:
    resolution: {integrity: sha512-Vpfqwm4EnqGdlsBFNmHhxhElJYrdfcxPThu+ryKS5J8L/fhAwLazFZtq+S+TWZ9ANj2piSQLGj6NQg+lKPmxrw==}

  /shelljs/0.8.5:
    resolution: {integrity: sha512-TiwcRcrkhHvbrZbnRcFYMLl30Dfov3HKqzp5tO5b4pt6G/SezKcYhmDg15zXVBswHmctSAQKznqNW2LO5tTDow==}
    engines: {node: '>=4'}
    hasBin: true
    dependencies:
      glob: 7.2.3
      interpret: 1.4.0
      rechoir: 0.6.2

  /side-channel/1.0.4:
    resolution: {integrity: sha512-q5XPytqFEIKHkGdiMIrY10mvLRvnQh42/+GoBlFW3b2LXLE2xxJpZFdm94we0BaoV3RwJyGqg5wS7epxTv0Zvw==}
    dependencies:
      call-bind: 1.0.2
      get-intrinsic: 1.1.3
      object-inspect: 1.12.2

  /signal-exit/3.0.7:
    resolution: {integrity: sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==}

  /sirv/1.0.19:
    resolution: {integrity: sha512-JuLThK3TnZG1TAKDwNIqNq6QA2afLOCcm+iE8D1Kj3GA40pSPsxQjjJl0J8X3tsR7T+CP1GavpzLwYkgVLWrZQ==}
    engines: {node: '>= 10'}
    dependencies:
      '@polka/url': 1.0.0-next.21
      mrmime: 1.0.1
      totalist: 1.1.0

  /sisteransi/1.0.5:
    resolution: {integrity: sha512-bLGGlR1QxBcynn2d5YmDX4MGjlZvy2MRBDRNHLJ8VI6l6+9FUiyTFNJ0IveOSP0bcXgVDPRcfGqA0pjaqUpfVg==}

  /sitemap/7.1.1:
    resolution: {integrity: sha512-mK3aFtjz4VdJN0igpIJrinf3EO8U8mxOPsTBzSsy06UtjZQJ3YY3o3Xa7zSc5nMqcMrRwlChHZ18Kxg0caiPBg==}
    engines: {node: '>=12.0.0', npm: '>=5.6.0'}
    hasBin: true
    dependencies:
      '@types/node': 17.0.45
      '@types/sax': 1.2.4
      arg: 5.0.2
      sax: 1.2.4
    dev: false

  /slash/3.0.0:
    resolution: {integrity: sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q==}
    engines: {node: '>=8'}

  /slash/4.0.0:
    resolution: {integrity: sha512-3dOsAHXXUkQTpOYcoAxLIorMTp4gIQr5IW3iVb7A7lFIp0VHhnynm9izx6TssdrIcVIESAlVjtnO2K8bg+Coew==}
    engines: {node: '>=12'}

  /sockjs/0.3.24:
    resolution: {integrity: sha512-GJgLTZ7vYb/JtPSSZ10hsOYIvEYsjbNU+zPdIHcUaWVNUEPivzxku31865sSSud0Da0W4lEeOPlmw93zLQchuQ==}
    dependencies:
      faye-websocket: 0.11.4
      uuid: 8.3.2
      websocket-driver: 0.7.4

  /sort-css-media-queries/2.1.0:
    resolution: {integrity: sha512-IeWvo8NkNiY2vVYdPa27MCQiR0MN0M80johAYFVxWWXQ44KU84WNxjslwBHmc/7ZL2ccwkM7/e6S5aiKZXm7jA==}
    engines: {node: '>= 6.3.0'}

  /source-map-js/1.0.2:
    resolution: {integrity: sha512-R0XvVJ9WusLiqTCEiGCmICCMplcCkIwwR11mOSD9CR5u+IXYdiseeEuXCVAjS54zqwkLcPNnmU4OeJ6tUrWhDw==}
    engines: {node: '>=0.10.0'}

  /source-map-loader/3.0.1_webpack@5.68.0:
    resolution: {integrity: sha512-Vp1UsfyPvgujKQzi4pyDiTOnE3E4H+yHvkVRN3c/9PJmQS4CQJExvcDvaX/D+RV+xQben9HJ56jMJS3CgUeWyA==}
    engines: {node: '>= 12.13.0'}
    peerDependencies:
      webpack: ^5.0.0
    dependencies:
      abab: 2.0.6
      iconv-lite: 0.6.3
      source-map-js: 1.0.2
      webpack: 5.68.0
    dev: true

  /source-map-support/0.5.21:
    resolution: {integrity: sha512-uBHU3L3czsIyYXKX88fdrGovxdSCoTGDRZ6SYXtSRxLZUzHg5P/66Ht6uoUlHu9EZod+inXhKo3qQgwXUT/y1w==}
    dependencies:
      buffer-from: 1.1.2
      source-map: 0.6.1

  /source-map/0.4.4:
    resolution: {integrity: sha512-Y8nIfcb1s/7DcobUz1yOO1GSp7gyL+D9zLHDehT7iRESqGSxjJ448Sg7rvfgsRJCnKLdSl11uGf0s9X80cH0/A==}
    engines: {node: '>=0.8.0'}
    dependencies:
      amdefine: 1.0.1
    dev: true

  /source-map/0.5.7:
    resolution: {integrity: sha512-LbrmJOMUSdEVxIKvdcJzQC+nQhe8FUZQTXQy6+I75skNgn3OoQ0DZA8YnFa7gp8tqtL3KPf1kmo0R5DoApeSGQ==}
    engines: {node: '>=0.10.0'}

  /source-map/0.6.1:
    resolution: {integrity: sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==}
    engines: {node: '>=0.10.0'}

  /source-map/0.7.4:
    resolution: {integrity: sha512-l3BikUxvPOcn5E74dZiq5BGsTb5yEwhaTSzccU6t4sDOH8NWJCstKO5QT2CvtFoK6F0saL7p9xHAqHOlCPJygA==}
    engines: {node: '>= 8'}
    dev: true

  /space-separated-tokens/1.1.5:
    resolution: {integrity: sha512-q/JSVd1Lptzhf5bkYm4ob4iWPjx0KiRe3sRFBNrVqbJkFaBm5vbbowy1mymoPNLRa52+oadOhJ+K49wsSeSjTA==}

  /spdx-correct/3.1.1:
    resolution: {integrity: sha512-cOYcUWwhCuHCXi49RhFRCyJEK3iPj1Ziz9DpViV3tbZOwXD49QzIN3MpOLJNxh2qwq2lJJZaKMVw9qNi4jTC0w==}
    dependencies:
      spdx-expression-parse: 3.0.1
      spdx-license-ids: 3.0.12
    dev: true

  /spdx-exceptions/2.3.0:
    resolution: {integrity: sha512-/tTrYOC7PPI1nUAgx34hUpqXuyJG+DTHJTnIULG4rDygi4xu/tfgmq1e1cIRwRzwZgo4NLySi+ricLkZkw4i5A==}
    dev: true

  /spdx-expression-parse/3.0.1:
    resolution: {integrity: sha512-cbqHunsQWnJNE6KhVSMsMeH5H/L9EpymbzqTQ3uLwNCLZ1Q481oWaofqH7nO6V07xlXwY6PhQdQ2IedWx/ZK4Q==}
    dependencies:
      spdx-exceptions: 2.3.0
      spdx-license-ids: 3.0.12
    dev: true

  /spdx-license-ids/3.0.12:
    resolution: {integrity: sha512-rr+VVSXtRhO4OHbXUiAF7xW3Bo9DuuF6C5jH+q/x15j2jniycgKbxU09Hr0WqlSLUs4i4ltHGXqTe7VHclYWyA==}
    dev: true

  /spdy-transport/3.0.0:
    resolution: {integrity: sha512-hsLVFE5SjA6TCisWeJXFKniGGOpBgMLmerfO2aCyCU5s7nJ/rpAepqmFifv/GCbSbueEeAJJnmSQ2rKC/g8Fcw==}
    dependencies:
      debug: 4.3.4
      detect-node: 2.1.0
      hpack.js: 2.1.6
      obuf: 1.1.2
      readable-stream: 3.6.0
      wbuf: 1.7.3
    transitivePeerDependencies:
      - supports-color

  /spdy/4.0.2:
    resolution: {integrity: sha512-r46gZQZQV+Kl9oItvl1JZZqJKGr+oEkB08A6BzkiR7593/7IbtuncXHd2YoYeTsG4157ZssMu9KYvUHLcjcDoA==}
    engines: {node: '>=6.0.0'}
    dependencies:
      debug: 4.3.4
      handle-thing: 2.0.1
      http-deceiver: 1.2.7
      select-hose: 2.0.0
      spdy-transport: 3.0.0
    transitivePeerDependencies:
      - supports-color

  /sprintf-js/1.0.3:
    resolution: {integrity: sha512-D9cPgkvLlV3t3IzL0D0YLvGA9Ahk4PcvVwUbN0dSGr1aP0Nrt4AEnTUbuGvquEC0mA64Gqt1fzirlRs5ibXx8g==}

  /sshpk/1.17.0:
    resolution: {integrity: sha512-/9HIEs1ZXGhSPE8X6Ccm7Nam1z8KcoCqPdI7ecm1N33EzAetWahvQWVqLZtaZQ+IDKX4IyA2o0gBzqIMkAagHQ==}
    engines: {node: '>=0.10.0'}
    hasBin: true
    dependencies:
      asn1: 0.2.6
      assert-plus: 1.0.0
      bcrypt-pbkdf: 1.0.2
      dashdash: 1.14.1
      ecc-jsbn: 0.1.2
      getpass: 0.1.7
      jsbn: 0.1.1
      safer-buffer: 2.1.2
      tweetnacl: 0.14.5
    dev: true

  /stable/0.1.8:
    resolution: {integrity: sha512-ji9qxRnOVfcuLDySj9qzhGSEFVobyt1kIOSkj1qZzYLzq7Tos/oUUWvotUPQLlrsidqsK6tBH89Bc9kL5zHA6w==}
    deprecated: 'Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility'

  /stack-utils/2.0.5:
    resolution: {integrity: sha512-xrQcmYhOsn/1kX+Vraq+7j4oE2j/6BFscZ0etmYg81xuM8Gq0022Pxb8+IqgOFUIaxHs0KaSb7T1+OegiNrNFA==}
    engines: {node: '>=10'}
    dependencies:
      escape-string-regexp: 2.0.0
    dev: true

  /state-toggle/1.0.3:
    resolution: {integrity: sha512-d/5Z4/2iiCnHw6Xzghyhb+GcmF89bxwgXG60wjIiZaxnymbyOmI8Hk4VqHXiVVp6u2ysaskFfXg3ekCj4WNftQ==}

  /statuses/1.5.0:
    resolution: {integrity: sha512-OpZ3zP+jT1PI7I8nemJX4AKmAX070ZkYPVWV/AaKTJl+tXCTGyVdC1a4SL8RUQYEwk/f34ZX8UTykN68FwrqAA==}
    engines: {node: '>= 0.6'}

  /statuses/2.0.1:
    resolution: {integrity: sha512-RwNA9Z/7PrK06rYLIzFMlaF+l73iwpzsqRIFgbMLbTcLD6cOao82TaWefPXQvB2fOC4AjuYSEndS7N/mTCbkdQ==}
    engines: {node: '>= 0.8'}

  /std-env/3.2.1:
    resolution: {integrity: sha512-D/uYFWkI/31OrnKmXZqGAGK5GbQRPp/BWA1nuITcc6ICblhhuQUPHS5E2GSCVS7Hwhf4ciq8qsATwBUxv+lI6w==}

  /stdout-stream/1.4.1:
    resolution: {integrity: sha512-j4emi03KXqJWcIeF8eIXkjMFN1Cmb8gUlDYGeBALLPo5qdyTfA9bOtl8m33lRoC+vFMkP3gl0WsDr6+gzxbbTA==}
    dependencies:
      readable-stream: 2.3.7
    dev: true

  /string-argv/0.3.1:
    resolution: {integrity: sha512-a1uQGz7IyVy9YwhqjZIZu1c8JO8dNIe20xBmSS6qu9kv++k3JGzCVmprbNN5Kn+BgzD5E7YYwg1CcjuJMRNsvg==}
    engines: {node: '>=0.6.19'}

  /string-hash/1.1.3:
    resolution: {integrity: sha512-kJUvRUFK49aub+a7T1nNE66EJbZBMnBgoC1UbCZ5n6bsZKBRga4KgBRTMn/pFkeCZSYtNeSyMxPDM0AXWELk2A==}
    dev: true

  /string-length/4.0.2:
    resolution: {integrity: sha512-+l6rNN5fYHNhZZy41RXsYptCjA2Igmq4EG7kZAYFQI1E1VTXarr6ZPXBg6eq7Y6eK4FEhY6AJlyuFIb/v/S0VQ==}
    engines: {node: '>=10'}
    dependencies:
      char-regex: 1.0.2
      strip-ansi: 6.0.1
    dev: true

  /string-width/1.0.2:
    resolution: {integrity: sha512-0XsVpQLnVCXHJfyEs8tC0zpTVIr5PKKsQtkT29IwupnPTjtPmQ3xT/4yCREF9hYkV/3M3kzcUTSAZT6a6h81tw==}
    engines: {node: '>=0.10.0'}
    dependencies:
      code-point-at: 1.1.0
      is-fullwidth-code-point: 1.0.0
      strip-ansi: 3.0.1
    dev: true

  /string-width/3.1.0:
    resolution: {integrity: sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==}
    engines: {node: '>=6'}
    dependencies:
      emoji-regex: 7.0.3
      is-fullwidth-code-point: 2.0.0
      strip-ansi: 5.2.0
    dev: true

  /string-width/4.2.3:
    resolution: {integrity: sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==}
    engines: {node: '>=8'}
    dependencies:
      emoji-regex: 8.0.0
      is-fullwidth-code-point: 3.0.0
      strip-ansi: 6.0.1

  /string-width/5.1.2:
    resolution: {integrity: sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==}
    engines: {node: '>=12'}
    dependencies:
      eastasianwidth: 0.2.0
      emoji-regex: 9.2.2
      strip-ansi: 7.0.1

  /string.prototype.matchall/4.0.7:
    resolution: {integrity: sha512-f48okCX7JiwVi1NXCVWcFnZgADDC/n2vePlQ/KUCNqCikLLilQvwjMO8+BHVKvgzH0JB0J9LEPgxOGT02RoETg==}
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.4
      es-abstract: 1.20.2
      get-intrinsic: 1.1.3
      has-symbols: 1.0.3
      internal-slot: 1.0.3
      regexp.prototype.flags: 1.4.3
      side-channel: 1.0.4
    dev: true

  /string.prototype.trimend/1.0.5:
    resolution: {integrity: sha512-I7RGvmjV4pJ7O3kdf+LXFpVfdNOxtCW/2C8f6jNiW4+PQchwxkCDzlk1/7p+Wl4bqFIZeF47qAHXLuHHWKAxog==}
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.4
      es-abstract: 1.20.2
    dev: true

  /string.prototype.trimstart/1.0.5:
    resolution: {integrity: sha512-THx16TJCGlsN0o6dl2o6ncWUsdgnLRSA23rRE5pyGBw/mLr3Ej/R2LaqCtgP8VNMGZsvMWnf9ooZPyY2bHvUFg==}
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.4
      es-abstract: 1.20.2
    dev: true

  /string_decoder/1.1.1:
    resolution: {integrity: sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==}
    dependencies:
      safe-buffer: 5.1.2

  /string_decoder/1.3.0:
    resolution: {integrity: sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==}
    dependencies:
      safe-buffer: 5.2.1

  /stringify-object/3.3.0:
    resolution: {integrity: sha512-rHqiFh1elqCQ9WPLIC8I0Q/g/wj5J1eMkyoiD6eoQApWHP0FtlK7rqnhmabL5VUY9JQCcqwwvlOaSuutekgyrw==}
    engines: {node: '>=4'}
    dependencies:
      get-own-enumerable-property-symbols: 3.0.2
      is-obj: 1.0.1
      is-regexp: 1.0.0

  /strip-ansi/3.0.1:
    resolution: {integrity: sha512-VhumSSbBqDTP8p2ZLKj40UjBCV4+v8bUSEpUb4KjRgWk9pbqGF4REFj6KEagidb2f/M6AzC0EmFyDNGaw9OCzg==}
    engines: {node: '>=0.10.0'}
    dependencies:
      ansi-regex: 2.1.1
    dev: true

  /strip-ansi/5.2.0:
    resolution: {integrity: sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==}
    engines: {node: '>=6'}
    dependencies:
      ansi-regex: 4.1.1
    dev: true

  /strip-ansi/6.0.1:
    resolution: {integrity: sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==}
    engines: {node: '>=8'}
    dependencies:
      ansi-regex: 5.0.1

  /strip-ansi/7.0.1:
    resolution: {integrity: sha512-cXNxvT8dFNRVfhVME3JAe98mkXDYN2O1l7jmcwMnOslDeESg1rF/OZMtK0nRAhiari1unG5cD4jG3rapUAkLbw==}
    engines: {node: '>=12'}
    dependencies:
      ansi-regex: 6.0.1

  /strip-bom-string/1.0.0:
    resolution: {integrity: sha512-uCC2VHvQRYu+lMh4My/sFNmF2klFymLX1wHJeXnbEJERpV/ZsVuonzerjfrGpIGF7LBVa1O7i9kjiWvJiFck8g==}
    engines: {node: '>=0.10.0'}

  /strip-bom/4.0.0:
    resolution: {integrity: sha512-3xurFv5tEgii33Zi8Jtp55wEIILR9eh34FAW00PZf+JnSsTmV/ioewSgQl97JHvgjoRGwPShsWm+IdrxB35d0w==}
    engines: {node: '>=8'}
    dev: true

  /strip-final-newline/2.0.0:
    resolution: {integrity: sha512-BrpvfNAE3dcvq7ll3xVumzjKjZQ5tI1sEUIKr3Uoks0XUl45St3FlatVqef9prk4jRDzhW6WZg+3bk93y6pLjA==}
    engines: {node: '>=6'}

  /strip-indent/3.0.0:
    resolution: {integrity: sha512-laJTa3Jb+VQpaC6DseHhF7dXVqHTfJPCRDaEbid/drOhgitgYku/letMUqOXFoWV0zIIUbjpdH2t+tYj4bQMRQ==}
    engines: {node: '>=8'}
    dependencies:
      min-indent: 1.0.1
    dev: true

  /strip-json-comments/2.0.1:
    resolution: {integrity: sha512-4gB8na07fecVVkOI6Rs4e7T6NOTki5EmL7TUduTs6bu3EdnSycntVJ4re8kgZA+wx9IueI2Y11bfbgwtzuE0KQ==}
    engines: {node: '>=0.10.0'}

  /strip-json-comments/3.1.1:
    resolution: {integrity: sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==}
    engines: {node: '>=8'}

  /style-loader/3.3.1_webpack@5.68.0:
    resolution: {integrity: sha512-GPcQ+LDJbrcxHORTRes6Jy2sfvK2kS6hpSfI/fXhPt+spVzxF6LJ1dHLN9zIGmVaaP044YKaIatFaufENRiDoQ==}
    engines: {node: '>= 12.13.0'}
    peerDependencies:
      webpack: ^5.0.0
    dependencies:
      webpack: 5.68.0
    dev: true

  /style-to-object/0.3.0:
    resolution: {integrity: sha512-CzFnRRXhzWIdItT3OmF8SQfWyahHhjq3HwcMNCNLn+N7klOOqPjMeG/4JSu77D7ypZdGvSzvkrbyeTMizz2VrA==}
    dependencies:
      inline-style-parser: 0.1.1

  /stylehacks/5.1.0_postcss@8.4.16:
    resolution: {integrity: sha512-SzLmvHQTrIWfSgljkQCw2++C9+Ne91d/6Sp92I8c5uHTcy/PgeHamwITIbBW9wnFTY/3ZfSXR9HIL6Ikqmcu6Q==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      browserslist: 4.21.4
      postcss: 8.4.16
      postcss-selector-parser: 6.0.10

  /supports-color/2.0.0:
    resolution: {integrity: sha512-KKNVtd6pCYgPIKU4cp2733HWYCpplQhddZLBUryaAHou723x+FRzQ5Df824Fj+IyyuiQTRoub4SnIFfIcrp70g==}
    engines: {node: '>=0.8.0'}
    dev: true

  /supports-color/3.2.3:
    resolution: {integrity: sha512-Jds2VIYDrlp5ui7t8abHN2bjAu4LV/q4N2KivFPpGH0lrka0BMq/33AmECUXlKPcHigkNaqfXRENFju+rlcy+A==}
    engines: {node: '>=0.8.0'}
    dependencies:
      has-flag: 1.0.0
    dev: true

  /supports-color/5.5.0:
    resolution: {integrity: sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==}
    engines: {node: '>=4'}
    dependencies:
      has-flag: 3.0.0

  /supports-color/7.2.0:
    resolution: {integrity: sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==}
    engines: {node: '>=8'}
    dependencies:
      has-flag: 4.0.0

  /supports-color/8.1.1:
    resolution: {integrity: sha512-MpUEN2OodtUzxvKQl72cUF7RQ5EiHsGvSsVG0ia9c5RbWGL2CI4C7EpPS8UTBIplnlzZiNuV56w+FuNxy3ty2Q==}
    engines: {node: '>=10'}
    dependencies:
      has-flag: 4.0.0

  /supports-hyperlinks/2.3.0:
    resolution: {integrity: sha512-RpsAZlpWcDwOPQA22aCH4J0t7L8JmAvsCxfOSEwm7cQs3LshN36QaTkwd70DnBOXDWGssw2eUoc8CaRWT0XunA==}
    engines: {node: '>=8'}
    dependencies:
      has-flag: 4.0.0
      supports-color: 7.2.0
    dev: true

  /supports-preserve-symlinks-flag/1.0.0:
    resolution: {integrity: sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==}
    engines: {node: '>= 0.4'}

  /svg-parser/2.0.4:
    resolution: {integrity: sha512-e4hG1hRwoOdRb37cIMSgzNsxyzKfayW6VOflrwvR+/bzrkyxY/31WkbgnQpgtrNp1SdpJvpUAGTa/ZoiPNDuRQ==}

  /svgo/2.8.0:
    resolution: {integrity: sha512-+N/Q9kV1+F+UeWYoSiULYo4xYSDQlTgb+ayMobAXPwMnLvop7oxKMo9OzIrX5x3eS4L4f2UHhc9axXwY8DpChg==}
    engines: {node: '>=10.13.0'}
    hasBin: true
    dependencies:
      '@trysound/sax': 0.2.0
      commander: 7.2.0
      css-select: 4.3.0
      css-tree: 1.1.3
      csso: 4.2.0
      picocolors: 1.0.0
      stable: 0.1.8

  /symbol-tree/3.2.4:
    resolution: {integrity: sha512-9QNk5KwDF+Bvz+PyObkmSYjI5ksVUYtjW7AU22r2NKcfLJcXp96hkDWU3+XndOsUb+AQ9QhfzfCT2O+CNWT5Tw==}
    dev: true

  /tapable/1.1.3:
    resolution: {integrity: sha512-4WK/bYZmj8xLr+HUCODHGF1ZFzsYffasLUgEiMBY4fgtltdO6B4WJtlSbPaDTLpYTcGVwM2qLnFTICEcNxs3kA==}
    engines: {node: '>=6'}

  /tapable/2.2.1:
    resolution: {integrity: sha512-GNzQvQTOIP6RyTfE2Qxb8ZVlNmw0n88vp1szwWRimP02mnTsx3Wtn5qRdqY9w2XduFNUgvOwhNnQsjwCp+kqaQ==}
    engines: {node: '>=6'}

  /tar/6.1.11:
    resolution: {integrity: sha512-an/KZQzQUkZCkuoAA64hM92X0Urb6VpRhAFllDzz44U2mcD5scmT3zBc4VgVpkugF580+DQn8eAFSyoQt0tznA==}
    engines: {node: '>= 10'}
    dependencies:
      chownr: 2.0.0
      fs-minipass: 2.1.0
      minipass: 3.3.4
      minizlib: 2.1.2
      mkdirp: 1.0.4
      yallist: 4.0.0
    dev: true

  /terminal-link/2.1.1:
    resolution: {integrity: sha512-un0FmiRUQNr5PJqy9kP7c40F5BOfpGlYTrxonDChEZB7pzZxRNp/bt+ymiy9/npwXya9KH99nJ/GXFIiUkYGFQ==}
    engines: {node: '>=8'}
    dependencies:
      ansi-escapes: 4.3.2
      supports-hyperlinks: 2.3.0
    dev: true

  /terser-webpack-plugin/5.3.6_webpack@5.68.0:
    resolution: {integrity: sha512-kfLFk+PoLUQIbLmB1+PZDMRSZS99Mp+/MHqDNmMA6tOItzRt+Npe3E+fsMs5mfcM0wCtrrdU387UnV+vnSffXQ==}
    engines: {node: '>= 10.13.0'}
    peerDependencies:
      '@swc/core': '*'
      esbuild: '*'
      uglify-js: '*'
      webpack: ^5.1.0
    peerDependenciesMeta:
      '@swc/core':
        optional: true
      esbuild:
        optional: true
      uglify-js:
        optional: true
    dependencies:
      '@jridgewell/trace-mapping': 0.3.15
      jest-worker: 27.5.1
      schema-utils: 3.1.1
      serialize-javascript: 6.0.0
      terser: 5.15.0
      webpack: 5.68.0
    dev: true

  /terser-webpack-plugin/5.3.6_webpack@5.72.1:
    resolution: {integrity: sha512-kfLFk+PoLUQIbLmB1+PZDMRSZS99Mp+/MHqDNmMA6tOItzRt+Npe3E+fsMs5mfcM0wCtrrdU387UnV+vnSffXQ==}
    engines: {node: '>= 10.13.0'}
    peerDependencies:
      '@swc/core': '*'
      esbuild: '*'
      uglify-js: '*'
      webpack: ^5.1.0
    peerDependenciesMeta:
      '@swc/core':
        optional: true
      esbuild:
        optional: true
      uglify-js:
        optional: true
    dependencies:
      '@jridgewell/trace-mapping': 0.3.15
      jest-worker: 27.5.1
      schema-utils: 3.1.1
      serialize-javascript: 6.0.0
      terser: 5.15.0
      webpack: 5.72.1

  /terser-webpack-plugin/5.3.6_webpack@5.74.0:
    resolution: {integrity: sha512-kfLFk+PoLUQIbLmB1+PZDMRSZS99Mp+/MHqDNmMA6tOItzRt+Npe3E+fsMs5mfcM0wCtrrdU387UnV+vnSffXQ==}
    engines: {node: '>= 10.13.0'}
    peerDependencies:
      '@swc/core': '*'
      esbuild: '*'
      uglify-js: '*'
      webpack: ^5.1.0
    peerDependenciesMeta:
      '@swc/core':
        optional: true
      esbuild:
        optional: true
      uglify-js:
        optional: true
    dependencies:
      '@jridgewell/trace-mapping': 0.3.15
      jest-worker: 27.5.1
      schema-utils: 3.1.1
      serialize-javascript: 6.0.0
      terser: 5.15.0
      webpack: 5.74.0

  /terser/5.15.0:
    resolution: {integrity: sha512-L1BJiXVmheAQQy+as0oF3Pwtlo4s3Wi1X2zNZ2NxOB4wx9bdS9Vk67XQENLFdLYGCK/Z2di53mTj/hBafR+dTA==}
    engines: {node: '>=10'}
    hasBin: true
    dependencies:
      '@jridgewell/source-map': 0.3.2
      acorn: 8.8.0
      commander: 2.20.3
      source-map-support: 0.5.21

  /test-exclude/6.0.0:
    resolution: {integrity: sha512-cAGWPIyOHU6zlmg88jwm7VRyXnMN7iV68OGAbYDk/Mh/xC/pzVPlQtY6ngoIH/5/tciuhGfvESU8GrHrcxD56w==}
    engines: {node: '>=8'}
    dependencies:
      '@istanbuljs/schema': 0.1.3
      glob: 7.2.3
      minimatch: 3.1.2
    dev: true

  /text-table/0.2.0:
    resolution: {integrity: sha512-N+8UisAXDGk8PFXP4HAzVR9nbfmVJ3zYLAWiTIoqC5v5isinhr+r5uaO8+7r3BMfuNIufIsA7RdpVgacC2cSpw==}

  /throat/6.0.1:
    resolution: {integrity: sha512-8hmiGIJMDlwjg7dlJ4yKGLK8EsYqKgPWbG3b4wjJddKNwc7N7Dpn08Df4szr/sZdMVeOstrdYSsqzX6BYbcB+w==}
    dev: true

  /thunky/1.1.0:
    resolution: {integrity: sha512-eHY7nBftgThBqOyHGVN+l8gF0BucP09fMo0oO/Lb0w1OF80dJv+lDVpXG60WMQvkcxAkNybKsrEIE3ZtKGmPrA==}

  /timsort/0.3.0:
    resolution: {integrity: sha512-qsdtZH+vMoCARQtyod4imc2nIJwg9Cc7lPRrw9CzF8ZKR0khdr8+2nX80PBhET3tcyTtJDxAffGh2rXH4tyU8A==}

  /tiny-invariant/1.2.0:
    resolution: {integrity: sha512-1Uhn/aqw5C6RI4KejVeTg6mIS7IqxnLJ8Mv2tV5rTc0qWobay7pDUz6Wi392Cnc8ak1H0F2cjoRzb2/AW4+Fvg==}

  /tiny-warning/1.0.3:
    resolution: {integrity: sha512-lBN9zLN/oAf68o3zNXYrdCt1kP8WsiGW8Oo2ka41b2IM5JL/S1CTyX1rW0mb/zSuJun0ZUrDxx4sqvYS2FWzPA==}

  /tmpl/1.0.5:
    resolution: {integrity: sha512-3f0uOEAQwIqGuWW2MVzYg8fV/QNnc/IpuJNG837rLuczAaLVHslWHZQj4IGiEl5Hs3kkbhwL9Ab7Hrsmuj+Smw==}
    dev: true

  /to-fast-properties/2.0.0:
    resolution: {integrity: sha512-/OaKK0xYrs3DmxRYqL/yDc+FxFUVYhDlXMhRmv3z915w2HF1tnN1omB354j8VUGO/hbRzyD6Y3sA7v7GS/ceog==}
    engines: {node: '>=4'}

  /to-readable-stream/1.0.0:
    resolution: {integrity: sha512-Iq25XBt6zD5npPhlLVXGFN3/gyR2/qODcKNNyTMd4vbm39HUaOiAM4PMq0eMVC/Tkxz+Zjdsc55g9yyz+Yq00Q==}
    engines: {node: '>=6'}

  /to-regex-range/5.0.1:
    resolution: {integrity: sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==}
    engines: {node: '>=8.0'}
    dependencies:
      is-number: 7.0.0

  /toidentifier/1.0.1:
    resolution: {integrity: sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==}
    engines: {node: '>=0.6'}

  /totalist/1.1.0:
    resolution: {integrity: sha512-gduQwd1rOdDMGxFG1gEvhV88Oirdo2p+KjoYFU7k2g+i7n6AFFbDQ5kMPUsW0pNbfQsB/cwXvT1i4Bue0s9g5g==}
    engines: {node: '>=6'}

  /tough-cookie/2.5.0:
    resolution: {integrity: sha512-nlLsUzgm1kfLXSXfRZMc1KLAugd4hqJHDTvc2hDIwS3mZAfMEuMbc03SujMF+GEcpaX/qboeycw6iO8JwVv2+g==}
    engines: {node: '>=0.8'}
    dependencies:
      psl: 1.9.0
      punycode: 2.1.1
    dev: true

  /tough-cookie/4.1.2:
    resolution: {integrity: sha512-G9fqXWoYFZgTc2z8Q5zaHy/vJMjm+WV0AkAeHxVCQiEB1b+dGvWzFW6QV07cY5jQ5gRkeid2qIkzkxUnmoQZUQ==}
    engines: {node: '>=6'}
    dependencies:
      psl: 1.9.0
      punycode: 2.1.1
      universalify: 0.2.0
      url-parse: 1.5.10
    dev: true

  /tr46/0.0.3:
    resolution: {integrity: sha512-N3WMsuqV66lT30CrXNbEjx4GEwlow3v6rr4mCcv6prnfwhS01rkgyFdjPNBYd9br7LpXV1+Emh01fHnq2Gdgrw==}
    dev: false

  /tr46/2.1.0:
    resolution: {integrity: sha512-15Ih7phfcdP5YxqiB+iDtLoaTz4Nd35+IiAv0kQ5FNKHzXgdWqPoTIqEDDJmXceQt4JZk6lVPT8lnDlPpGDppw==}
    engines: {node: '>=8'}
    dependencies:
      punycode: 2.1.1
    dev: true

  /trim-newlines/3.0.1:
    resolution: {integrity: sha512-c1PTsA3tYrIsLGkJkzHF+w9F2EyxfXGo4UyJc4pFL++FMjnq0HJS69T3M7d//gKrFKwy429bouPescbjecU+Zw==}
    engines: {node: '>=8'}
    dev: true

  /trim-trailing-lines/1.1.4:
    resolution: {integrity: sha512-rjUWSqnfTNrjbB9NQWfPMH/xRK1deHeGsHoVfpxJ++XeYXE0d6B1En37AHfw3jtfTU7dzMzZL2jjpe8Qb5gLIQ==}

  /trim/1.0.1:
    resolution: {integrity: sha512-3JVP2YVqITUisXblCDq/Bi4P9457G/sdEamInkyvCsjbTcXLXIiG7XCb4kGMFWh6JGXesS3TKxOPtrncN/xe8w==}

  /trough/1.0.5:
    resolution: {integrity: sha512-rvuRbTarPXmMb79SmzEp8aqXNKcK+y0XaB298IXueQ8I2PsrATcPBCSPyK/dDNa2iWOhKlfNnOjdAOTBU/nkFA==}

  /true-case-path/1.0.3:
    resolution: {integrity: sha512-m6s2OdQe5wgpFMC+pAJ+q9djG82O2jcHPOI6RNg1yy9rCYR+WD6Nbpl32fDpfC56nirdRy+opFa/Vk7HYhqaew==}
    dependencies:
      glob: 7.2.3
    dev: true

  /true-case-path/2.2.1:
    resolution: {integrity: sha512-0z3j8R7MCjy10kc/g+qg7Ln3alJTodw9aDuVWZa3uiWqfuBMKeAeP2ocWcxoyM3D73yz3Jt/Pu4qPr4wHSdB/Q==}
    dev: true

  /tslib/1.14.1:
    resolution: {integrity: sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg==}
    dev: true

  /tslib/2.4.0:
    resolution: {integrity: sha512-d6xOpEDfsi2CZVlPQzGeux8XMwLT9hssAsaPYExaQMuYskwb+x1x7J371tWlbBdWHroy99KnVB6qIkUbs5X3UQ==}

  /tsutils/3.21.0_typescript@4.7.4:
    resolution: {integrity: sha512-mHKK3iUXL+3UF6xL5k0PEhKRUBKPBCv/+RkEOpjRWxxx27KKRBmmA60A9pgOUvMi8GKhRMPEmjBRPzs2W7O1OA==}
    engines: {node: '>= 6'}
    peerDependencies:
      typescript: '>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta'
    dependencies:
      tslib: 1.14.1
      typescript: 4.7.4
    dev: true

  /tunnel-agent/0.6.0:
    resolution: {integrity: sha512-McnNiV1l8RYeY8tBgEpuodCC1mLUdbSN+CYBL7kJsJNInOP8UjDDEwdk6Mw60vdLLrr5NHKZhMAOSrR2NZuQ+w==}
    dependencies:
      safe-buffer: 5.2.1
    dev: true

  /tweetnacl/0.14.5:
    resolution: {integrity: sha512-KXXFFdAbFXY4geFIwoyNK+f5Z1b7swfXABfL7HXCmoIWMKU3dmS26672A4EeQtDzLKy7SXmfBu51JolvEKwtGA==}
    dev: true

  /type-check/0.3.2:
    resolution: {integrity: sha512-ZCmOJdvOWDBYJlzAoFkC+Q0+bUyEOS1ltgp1MGU03fqHG+dbi9tBFU2Rd9QKiDZFAYrhPh2JUf7rZRIuHRKtOg==}
    engines: {node: '>= 0.8.0'}
    dependencies:
      prelude-ls: 1.1.2
    dev: true

  /type-check/0.4.0:
    resolution: {integrity: sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==}
    engines: {node: '>= 0.8.0'}
    dependencies:
      prelude-ls: 1.2.1
    dev: true

  /type-detect/4.0.8:
    resolution: {integrity: sha512-0fr/mIH1dlO+x7TlcMy+bIDqKPsw/70tVyeHW787goQjhmqaZe10uwLujubK9q9Lg6Fiho1KUKDYz0Z7k7g5/g==}
    engines: {node: '>=4'}
    dev: true

  /type-fest/0.18.1:
    resolution: {integrity: sha512-OIAYXk8+ISY+qTOwkHtKqzAuxchoMiD9Udx+FSGQDuiRR+PJKJHc2NJAXlbhkGwTt/4/nKZxELY1w3ReWOL8mw==}
    engines: {node: '>=10'}
    dev: true

  /type-fest/0.20.2:
    resolution: {integrity: sha512-Ne+eE4r0/iWnpAxD852z3A+N0Bt5RN//NjJwRd2VFHEmrywxf5vsZlh4R6lixl6B+wz/8d+maTSAkN1FIkI3LQ==}
    engines: {node: '>=10'}

  /type-fest/0.21.3:
    resolution: {integrity: sha512-t0rzBq87m3fVcduHDUFhKmyyX+9eo6WQjZvf51Ea/M0Q7+T374Jp1aUiyUl0GKxp8M/OETVHSDvmkyPgvX+X2w==}
    engines: {node: '>=10'}
    dev: true

  /type-fest/0.6.0:
    resolution: {integrity: sha512-q+MB8nYR1KDLrgr4G5yemftpMC7/QLqVndBmEEdqzmNj5dcFOO4Oo8qlwZE3ULT3+Zim1F8Kq4cBnikNhlCMlg==}
    engines: {node: '>=8'}
    dev: true

  /type-fest/0.8.1:
    resolution: {integrity: sha512-4dbzIzqvjtgiM5rw1k5rEHtBANKmdudhGyBEajN01fEyhaAIhsoKNy6y7+IN93IfpFtwY9iqi7kD+xwKhQsNJA==}
    engines: {node: '>=8'}
    dev: true

  /type-fest/2.19.0:
    resolution: {integrity: sha512-RAH822pAdBgcNMAfWnCBU3CFZcfZ/i1eZjwFU/dsLKumyuuP3niueg2UAukXYF0E2AAoc82ZSSf9J0WQBinzHA==}
    engines: {node: '>=12.20'}

  /type-is/1.6.18:
    resolution: {integrity: sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==}
    engines: {node: '>= 0.6'}
    dependencies:
      media-typer: 0.3.0
      mime-types: 2.1.35

  /typedarray-to-buffer/3.1.5:
    resolution: {integrity: sha512-zdu8XMNEDepKKR+XYOXAVPtWui0ly0NtohUscw+UmaHiAWT8hrV1rr//H6V+0DvJ3OQ19S979M0laLfX8rm82Q==}
    dependencies:
      is-typedarray: 1.0.0

  /typescript/4.7.4:
    resolution: {integrity: sha512-C0WQT0gezHuw6AdY1M2jxUO83Rjf0HP7Sk1DtXj6j1EwkQNZrHAg2XPWlq62oqEhYvONq5pkC2Y9oPljWToLmQ==}
    engines: {node: '>=4.2.0'}
    hasBin: true

  /typesense-docsearch-css/0.3.0:
    resolution: {integrity: sha512-+/t9Jz5dwH52Xpk9ikpJaQZs+McX/a4aY+8Iw+IiD9yu9+JJddEA5RYjBgkcQ140gUtp9L213z/V0g2bC3B/hw==}
    dev: false

  /typesense-docsearch-react/0.2.3_32250b37d44278fed90b18adb1b20f49:
    resolution: {integrity: sha512-2eODhYFk3KLhwEF+shzcTsiB0zU8GefPFZGzNlGdwdUJiUxjh8SgS7VtylXGdKQZxh33wbWN4wr94CG2WxcIIw==}
    peerDependencies:
      '@types/react': '>= 16.8.0 < 19.0.0'
      react: '>= 16.8.0 < 19.0.0'
      react-dom: '>= 16.8.0 < 19.0.0'
    dependencies:
      '@algolia/autocomplete-core': 1.7.1
      '@algolia/autocomplete-preset-algolia': 1.7.1_84bcb575a7c193a76ce9e48bebb63fd7
      '@types/react': 17.0.50
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
      typesense: 1.4.0_@babel+runtime@7.17.9
      typesense-docsearch-css: 0.3.0
      typesense-instantsearch-adapter: 2.4.2-1_@babel+runtime@7.17.9
    transitivePeerDependencies:
      - '@algolia/client-search'
      - '@babel/runtime'
      - algoliasearch
      - debug
    dev: false

  /typesense-instantsearch-adapter/2.4.2-1_@babel+runtime@7.17.9:
    resolution: {integrity: sha512-reo1riIstYeHmg0g4amaZNY2wcBPORDIuanMsbIca3G6kMUxr1KyG+4pv8/qt4b+o/cp6AX72aoV6zbcdrhpYg==}
    requiresBuild: true
    peerDependencies:
      '@babel/runtime': ^7.17.2
    dependencies:
      '@babel/runtime': 7.17.9
      typesense: 1.4.0_@babel+runtime@7.17.9
    transitivePeerDependencies:
      - debug
    dev: false

  /typesense/1.4.0_@babel+runtime@7.17.9:
    resolution: {integrity: sha512-+Y6WYNB3+z5bR1/F5AfHQyqdeKGOZW0k2l0HSFgCFl+3wo6oY42lAhJG2JZk6k8ux3j4866IyruKsCG5NtlHMQ==}
    peerDependencies:
      '@babel/runtime': ^7.17.2
    dependencies:
      '@babel/runtime': 7.17.9
      axios: 0.26.1
      loglevel: 1.8.0
    transitivePeerDependencies:
      - debug
    dev: false

  /ua-parser-js/0.7.31:
    resolution: {integrity: sha512-qLK/Xe9E2uzmYI3qLeOmI0tEOt+TBBQyUIAh4aAgU05FVYzeZrKUdkAZfBNVGRaHVgV0TDkdEngJSw/SyQchkQ==}
    dev: false

  /unbox-primitive/1.0.2:
    resolution: {integrity: sha512-61pPlCD9h51VoreyJ0BReideM3MDKMKnh6+V9L08331ipq6Q8OFXZYiqP6n/tbHx4s5I9uRhcye6BrbkizkBDw==}
    dependencies:
      call-bind: 1.0.2
      has-bigints: 1.0.2
      has-symbols: 1.0.3
      which-boxed-primitive: 1.0.2
    dev: true

  /unherit/1.1.3:
    resolution: {integrity: sha512-Ft16BJcnapDKp0+J/rqFC3Rrk6Y/Ng4nzsC028k2jdDII/rdZ7Wd3pPT/6+vIIxRagwRc9K0IUX0Ra4fKvw+WQ==}
    dependencies:
      inherits: 2.0.4
      xtend: 4.0.2

  /unicode-canonical-property-names-ecmascript/2.0.0:
    resolution: {integrity: sha512-yY5PpDlfVIU5+y/BSCxAJRBIS1Zc2dDG3Ujq+sR0U+JjUevW2JhocOF+soROYDSaAezOzOKuyyixhD6mBknSmQ==}
    engines: {node: '>=4'}

  /unicode-match-property-ecmascript/2.0.0:
    resolution: {integrity: sha512-5kaZCrbp5mmbz5ulBkDkbY0SsPOjKqVS35VpL9ulMPfSl0J0Xsm+9Evphv9CoIZFwre7aJoa94AY6seMKGVN5Q==}
    engines: {node: '>=4'}
    dependencies:
      unicode-canonical-property-names-ecmascript: 2.0.0
      unicode-property-aliases-ecmascript: 2.1.0

  /unicode-match-property-value-ecmascript/2.0.0:
    resolution: {integrity: sha512-7Yhkc0Ye+t4PNYzOGKedDhXbYIBe1XEQYQxOPyhcXNMJ0WCABqqj6ckydd6pWRZTHV4GuCPKdBAUiMc60tsKVw==}
    engines: {node: '>=4'}

  /unicode-property-aliases-ecmascript/2.1.0:
    resolution: {integrity: sha512-6t3foTQI9qne+OZoVQB/8x8rk2k1eVy1gRXhV3oFQ5T6R1dqQ1xtin3XqSlx3+ATBkliTaR/hHyJBm+LVPNM8w==}
    engines: {node: '>=4'}

  /unified/9.2.0:
    resolution: {integrity: sha512-vx2Z0vY+a3YoTj8+pttM3tiJHCwY5UFbYdiWrwBEbHmK8pvsPj2rtAX2BFfgXen8T39CJWblWRDT4L5WGXtDdg==}
    dependencies:
      bail: 1.0.5
      extend: 3.0.2
      is-buffer: 2.0.5
      is-plain-obj: 2.1.0
      trough: 1.0.5
      vfile: 4.2.1

  /unified/9.2.2:
    resolution: {integrity: sha512-Sg7j110mtefBD+qunSLO1lqOEKdrwBFBrR6Qd8f4uwkhWNlbkaqwHse6e7QvD3AP/MNoJdEDLaf8OxYyoWgorQ==}
    dependencies:
      bail: 1.0.5
      extend: 3.0.2
      is-buffer: 2.0.5
      is-plain-obj: 2.1.0
      trough: 1.0.5
      vfile: 4.2.1

  /unique-string/2.0.0:
    resolution: {integrity: sha512-uNaeirEPvpZWSgzwsPGtU2zVSTrn/8L5q/IexZmH0eH6SA73CmAA5U4GwORTxQAZs95TAXLNqeLoPPNO5gZfWg==}
    engines: {node: '>=8'}
    dependencies:
      crypto-random-string: 2.0.0

  /unist-builder/2.0.3:
    resolution: {integrity: sha512-f98yt5pnlMWlzP539tPc4grGMsFaQQlP/vM396b00jngsiINumNmsY8rkXjfoi1c6QaM8nQ3vaGDuoKWbe/1Uw==}

  /unist-util-generated/1.1.6:
    resolution: {integrity: sha512-cln2Mm1/CZzN5ttGK7vkoGw+RZ8VcUH6BtGbq98DDtRGquAAOXig1mrBQYelOwMXYS8rK+vZDyyojSjp7JX+Lg==}

  /unist-util-is/4.1.0:
    resolution: {integrity: sha512-ZOQSsnce92GrxSqlnEEseX0gi7GH9zTJZ0p9dtu87WRb/37mMPO2Ilx1s/t9vBHrFhbgweUwb+t7cIn5dxPhZg==}

  /unist-util-position/3.1.0:
    resolution: {integrity: sha512-w+PkwCbYSFw8vpgWD0v7zRCl1FpY3fjDSQ3/N/wNd9Ffa4gPi8+4keqt99N3XW6F99t/mUzp2xAhNmfKWp95QA==}

  /unist-util-remove-position/2.0.1:
    resolution: {integrity: sha512-fDZsLYIe2uT+oGFnuZmy73K6ZxOPG/Qcm+w7jbEjaFcJgbQ6cqjs/eSPzXhsmGpAsWPkqZM9pYjww5QTn3LHMA==}
    dependencies:
      unist-util-visit: 2.0.3

  /unist-util-remove/2.1.0:
    resolution: {integrity: sha512-J8NYPyBm4baYLdCbjmf1bhPu45Cr1MWTm77qd9istEkzWpnN6O9tMsEbB2JhNnBCqGENRqEWomQ+He6au0B27Q==}
    dependencies:
      unist-util-is: 4.1.0

  /unist-util-stringify-position/2.0.3:
    resolution: {integrity: sha512-3faScn5I+hy9VleOq/qNbAd6pAx7iH5jYBMS9I1HgQVijz/4mv5Bvw5iw1sC/90CODiKo81G/ps8AJrISn687g==}
    dependencies:
      '@types/unist': 2.0.6

  /unist-util-visit-parents/3.1.1:
    resolution: {integrity: sha512-1KROIZWo6bcMrZEwiH2UrXDyalAa0uqzWCxCJj6lPOvTve2WkfgCytoDTPaMnodXh1WrXOq0haVYHj99ynJlsg==}
    dependencies:
      '@types/unist': 2.0.6
      unist-util-is: 4.1.0

  /unist-util-visit/2.0.3:
    resolution: {integrity: sha512-iJ4/RczbJMkD0712mGktuGpm/U4By4FfDonL7N/9tATGIF4imikjOuagyMY53tnZq3NP6BcmlrHhEKAfGWjh7Q==}
    dependencies:
      '@types/unist': 2.0.6
      unist-util-is: 4.1.0
      unist-util-visit-parents: 3.1.1

  /universalify/0.1.2:
    resolution: {integrity: sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg==}
    engines: {node: '>= 4.0.0'}

  /universalify/0.2.0:
    resolution: {integrity: sha512-CJ1QgKmNg3CwvAv/kOFmtnEN05f0D/cn9QntgNOQlQF9dgvVTHj3t+8JPdjqawCHk7V/KA+fbUqzZ9XWhcqPUg==}
    engines: {node: '>= 4.0.0'}
    dev: true

  /universalify/2.0.0:
    resolution: {integrity: sha512-hAZsKq7Yy11Zu1DE0OzWjw7nnLZmJZYTDZZyEFHZdUhV8FkH5MCfoU1XMaxXovpyW5nq5scPqq0ZDP9Zyl04oQ==}
    engines: {node: '>= 10.0.0'}

  /unpipe/1.0.0:
    resolution: {integrity: sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==}
    engines: {node: '>= 0.8'}

  /update-browserslist-db/1.0.9_browserslist@4.21.4:
    resolution: {integrity: sha512-/xsqn21EGVdXI3EXSum1Yckj3ZVZugqyOZQ/CxYPBD/R+ko9NSUScf8tFF4dOKY+2pvSSJA/S+5B8s4Zr4kyvg==}
    hasBin: true
    peerDependencies:
      browserslist: '>= 4.21.0'
    dependencies:
      browserslist: 4.21.4
      escalade: 3.1.1
      picocolors: 1.0.0

  /update-notifier/5.1.0:
    resolution: {integrity: sha512-ItnICHbeMh9GqUy31hFPrD1kcuZ3rpxDZbf4KUDavXwS0bW5m7SLbDQpGX3UYr072cbrF5hFUs3r5tUsPwjfHw==}
    engines: {node: '>=10'}
    dependencies:
      boxen: 5.1.2
      chalk: 4.1.2
      configstore: 5.0.1
      has-yarn: 2.1.0
      import-lazy: 2.1.0
      is-ci: 2.0.0
      is-installed-globally: 0.4.0
      is-npm: 5.0.0
      is-yarn-global: 0.3.0
      latest-version: 5.1.0
      pupa: 2.1.1
      semver: 7.3.7
      semver-diff: 3.1.1
      xdg-basedir: 4.0.0

  /uri-js/4.4.1:
    resolution: {integrity: sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==}
    dependencies:
      punycode: 2.1.1

  /url-loader/4.1.1_file-loader@6.2.0+webpack@5.72.1:
    resolution: {integrity: sha512-3BTV812+AVHHOJQO8O5MkWgZ5aosP7GnROJwvzLS9hWDj00lZ6Z0wNak423Lp9PBZN05N+Jk/N5Si8jRAlGyWA==}
    engines: {node: '>= 10.13.0'}
    peerDependencies:
      file-loader: '*'
      webpack: ^4.0.0 || ^5.0.0
    peerDependenciesMeta:
      file-loader:
        optional: true
    dependencies:
      file-loader: 6.2.0_webpack@5.72.1
      loader-utils: 2.0.2
      mime-types: 2.1.35
      schema-utils: 3.1.1
      webpack: 5.72.1
    dev: false

  /url-loader/4.1.1_file-loader@6.2.0+webpack@5.74.0:
    resolution: {integrity: sha512-3BTV812+AVHHOJQO8O5MkWgZ5aosP7GnROJwvzLS9hWDj00lZ6Z0wNak423Lp9PBZN05N+Jk/N5Si8jRAlGyWA==}
    engines: {node: '>= 10.13.0'}
    peerDependencies:
      file-loader: '*'
      webpack: ^4.0.0 || ^5.0.0
    peerDependenciesMeta:
      file-loader:
        optional: true
    dependencies:
      file-loader: 6.2.0_webpack@5.74.0
      loader-utils: 2.0.2
      mime-types: 2.1.35
      schema-utils: 3.1.1
      webpack: 5.74.0

  /url-loader/4.1.1_webpack@5.68.0:
    resolution: {integrity: sha512-3BTV812+AVHHOJQO8O5MkWgZ5aosP7GnROJwvzLS9hWDj00lZ6Z0wNak423Lp9PBZN05N+Jk/N5Si8jRAlGyWA==}
    engines: {node: '>= 10.13.0'}
    peerDependencies:
      file-loader: '*'
      webpack: ^4.0.0 || ^5.0.0
    peerDependenciesMeta:
      file-loader:
        optional: true
    dependencies:
      loader-utils: 2.0.2
      mime-types: 2.1.35
      schema-utils: 3.1.1
      webpack: 5.68.0
    dev: true

  /url-parse-lax/3.0.0:
    resolution: {integrity: sha512-NjFKA0DidqPa5ciFcSrXnAltTtzz84ogy+NebPvfEgAck0+TNg4UJ4IN+fB7zRZfbgUf0syOo9MDxFkDSMuFaQ==}
    engines: {node: '>=4'}
    dependencies:
      prepend-http: 2.0.0

  /url-parse/1.5.10:
    resolution: {integrity: sha512-WypcfiRhfeUP9vvF0j6rw0J3hrWrw6iZv3+22h6iRMJ/8z1Tj6XfLP4DsUix5MhMPnXpiHDoKyoZ/bdCkwBCiQ==}
    dependencies:
      querystringify: 2.2.0
      requires-port: 1.0.0
    dev: true

  /use-composed-ref/1.3.0_react@17.0.2:
    resolution: {integrity: sha512-GLMG0Jc/jiKov/3Ulid1wbv3r54K9HlMW29IWcDFPEqFkSO2nS0MuefWgMJpeHQ9YJeXDL3ZUF+P3jdXlZX/cQ==}
    peerDependencies:
      react: ^16.8.0 || ^17.0.0 || ^18.0.0
    dependencies:
      react: 17.0.2
    dev: false

  /use-isomorphic-layout-effect/1.1.2_7df2e632d193aca1f14601bd0dc974c3:
    resolution: {integrity: sha512-49L8yCO3iGT/ZF9QttjwLF/ZD9Iwto5LnH5LmEdk/6cFmXddqi2ulF0edxTwjj+7mqvpVVGQWvbXZdn32wRSHA==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true
    dependencies:
      '@types/react': 17.0.50
      react: 17.0.2
    dev: false

  /use-latest/1.2.1_7df2e632d193aca1f14601bd0dc974c3:
    resolution: {integrity: sha512-xA+AVm/Wlg3e2P/JiItTziwS7FK92LWrDB0p+hgXloIMuVCeJJ8v6f0eeHyPZaJrM+usM1FkFfbNCrJGs8A/zw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true
    dependencies:
      '@types/react': 17.0.50
      react: 17.0.2
      use-isomorphic-layout-effect: 1.1.2_7df2e632d193aca1f14601bd0dc974c3
    dev: false

  /util-deprecate/1.0.2:
    resolution: {integrity: sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==}

  /utila/0.4.0:
    resolution: {integrity: sha512-Z0DbgELS9/L/75wZbro8xAnT50pBVFQZ+hUEueGDU5FN51YSCYM+jdxsfCiHjwNP/4LCDD0i/graKpeBnOXKRA==}

  /utility-types/3.10.0:
    resolution: {integrity: sha512-O11mqxmi7wMKCo6HKFt5AhO4BwY3VV68YU07tgxfz8zJTIxr4BpsezN49Ffwy9j3ZpwwJp4fkRwjRzq3uWE6Rg==}
    engines: {node: '>= 4'}

  /utils-merge/1.0.1:
    resolution: {integrity: sha1-n5VxD1CiZ5R7LMwSR0HBAoQn5xM=}
    engines: {node: '>= 0.4.0'}

  /uuid/3.4.0:
    resolution: {integrity: sha512-HjSDRw6gZE5JMggctHBcjVak08+KEVhSIiDzFnT9S9aegmp85S/bReBVTb4QTFaRNptJ9kuYaNhnbNEOkbKb/A==}
    deprecated: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
    hasBin: true
    dev: true

  /uuid/8.3.2:
    resolution: {integrity: sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg==}
    hasBin: true

  /v8-compile-cache/2.3.0:
    resolution: {integrity: sha512-l8lCEmLcLYZh4nbunNZvQCJc5pv7+RCwa8q/LdUx8u7lsWvPDKmpodJAJNwkAhJC//dFY48KuIEmjtd4RViDrA==}
    dev: true

  /v8-to-istanbul/8.1.1:
    resolution: {integrity: sha512-FGtKtv3xIpR6BYhvgH8MI/y78oT7d8Au3ww4QIxymrCtZEh5b8gCw2siywE+puhEmuWKDtmfrvF5UlB298ut3w==}
    engines: {node: '>=10.12.0'}
    dependencies:
      '@types/istanbul-lib-coverage': 2.0.4
      convert-source-map: 1.8.0
      source-map: 0.7.4
    dev: true

  /validate-npm-package-license/3.0.4:
    resolution: {integrity: sha512-DpKm2Ui/xN7/HQKCtpZxoRWBhZ9Z0kqtygG8XCgNQ8ZlDnxuQmWhj566j8fN4Cu3/JmbhsDo7fcAJq4s9h27Ew==}
    dependencies:
      spdx-correct: 3.1.1
      spdx-expression-parse: 3.0.1
    dev: true

  /validator/13.7.0:
    resolution: {integrity: sha512-nYXQLCBkpJ8X6ltALua9dRrZDHVYxjJ1wgskNt1lH9fzGjs3tgojGSCBjmEPwkWS1y29+DrizMTW19Pr9uB2nw==}
    engines: {node: '>= 0.10'}

  /value-equal/1.0.1:
    resolution: {integrity: sha512-NOJ6JZCAWr0zlxZt+xqCHNTEKOsrks2HQd4MqhP1qy4z1SkbEP467eNx6TgDKXMvUOb+OENfJCZwM+16n7fRfw==}

  /vary/1.1.2:
    resolution: {integrity: sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==}
    engines: {node: '>= 0.8'}

  /verror/1.10.0:
    resolution: {integrity: sha1-OhBcoXBTr1XW4nDB+CiGguGNpAA=}
    engines: {'0': node >=0.6.0}
    dependencies:
      assert-plus: 1.0.0
      core-util-is: 1.0.2
      extsprintf: 1.3.0
    dev: true

  /vfile-location/3.2.0:
    resolution: {integrity: sha512-aLEIZKv/oxuCDZ8lkJGhuhztf/BW4M+iHdCwglA/eWc+vtuRFJj8EtgceYFX4LRjOhCAAiNHsKGssC6onJ+jbA==}

  /vfile-message/2.0.4:
    resolution: {integrity: sha512-DjssxRGkMvifUOJre00juHoP9DPWuzjxKuMDrhNbk2TdaYYBNMStsNhEOt3idrtI12VQYM/1+iM0KOzXi4pxwQ==}
    dependencies:
      '@types/unist': 2.0.6
      unist-util-stringify-position: 2.0.3

  /vfile/4.2.1:
    resolution: {integrity: sha512-O6AE4OskCG5S1emQ/4gl8zK586RqA3srz3nfK/Viy0UPToBc5Trp9BVFb1u0CjsKrAWwnpr4ifM/KBXPWwJbCA==}
    dependencies:
      '@types/unist': 2.0.6
      is-buffer: 2.0.5
      unist-util-stringify-position: 2.0.3
      vfile-message: 2.0.4

  /w3c-hr-time/1.0.2:
    resolution: {integrity: sha512-z8P5DvDNjKDoFIHK7q8r8lackT6l+jo/Ye3HOle7l9nICP9lf1Ci25fy9vHd0JOWewkIFzXIEig3TdKT7JQ5fQ==}
    dependencies:
      browser-process-hrtime: 1.0.0
    dev: true

  /w3c-xmlserializer/2.0.0:
    resolution: {integrity: sha512-4tzD0mF8iSiMiNs30BiLO3EpfGLZUT2MSX/G+o7ZywDzliWQ3OPtTZ0PTC3B3ca1UAf4cJMHB+2Bf56EriJuRA==}
    engines: {node: '>=10'}
    dependencies:
      xml-name-validator: 3.0.0
    dev: true

  /wait-on/6.0.1:
    resolution: {integrity: sha512-zht+KASY3usTY5u2LgaNqn/Cd8MukxLGjdcZxT2ns5QzDmTFc4XoWBgC+C/na+sMRZTuVygQoMYwdcVjHnYIVw==}
    engines: {node: '>=10.0.0'}
    hasBin: true
    dependencies:
      axios: 0.25.0
      joi: 17.6.0
      lodash: 4.17.21
      minimist: 1.2.6
      rxjs: 7.5.6
    transitivePeerDependencies:
      - debug

  /walker/1.0.8:
    resolution: {integrity: sha512-ts/8E8l5b7kY0vlWLewOkDXMmPdLcVV4GmOQLyxuSswIJsweeFZtAsMF7k1Nszz+TYBQrlYRmzOnr398y1JemQ==}
    dependencies:
      makeerror: 1.0.12
    dev: true

  /watchpack/2.4.0:
    resolution: {integrity: sha512-Lcvm7MGST/4fup+ifyKi2hjyIAwcdI4HRgtvTpIUxBRhB+RFtUh8XtDOxUfctVCnhVi+QQj49i91OyvzkJl6cg==}
    engines: {node: '>=10.13.0'}
    dependencies:
      glob-to-regexp: 0.4.1
      graceful-fs: 4.2.10

  /wbuf/1.7.3:
    resolution: {integrity: sha512-O84QOnr0icsbFGLS0O3bI5FswxzRr8/gHwWkDlQFskhSPryQXvrTMxjxGP4+iWYoauLoBvfDpkrOauZ+0iZpDA==}
    dependencies:
      minimalistic-assert: 1.0.1

  /web-namespaces/1.1.4:
    resolution: {integrity: sha512-wYxSGajtmoP4WxfejAPIr4l0fVh+jeMXZb08wNc0tMg6xsfZXj3cECqIK0G7ZAqUq0PP8WlMDtaOGVBTAWztNw==}

  /webidl-conversions/3.0.1:
    resolution: {integrity: sha512-2JAn3z8AR6rjK8Sm8orRC0h/bcl/DqL7tRPdGZ4I1CjdF+EaMLmYxBHyXuKL849eucPFhvBoxMsflfOb8kxaeQ==}
    dev: false

  /webidl-conversions/5.0.0:
    resolution: {integrity: sha512-VlZwKPCkYKxQgeSbH5EyngOmRp7Ww7I9rQLERETtf5ofd9pGeswWiOtogpEO850jziPRarreGxn5QIiTqpb2wA==}
    engines: {node: '>=8'}
    dev: true

  /webidl-conversions/6.1.0:
    resolution: {integrity: sha512-qBIvFLGiBpLjfwmYAaHPXsn+ho5xZnGvyGvsarywGNc8VyQJUMHJ8OBKGGrPER0okBeMDaan4mNBlgBROxuI8w==}
    engines: {node: '>=10.4'}
    dev: true

  /webpack-bundle-analyzer/4.5.0:
    resolution: {integrity: sha512-GUMZlM3SKwS8Z+CKeIFx7CVoHn3dXFcUAjT/dcZQQmfSZGvitPfMob2ipjai7ovFFqPvTqkEZ/leL4O0YOdAYQ==}
    engines: {node: '>= 10.13.0'}
    hasBin: true
    dependencies:
      acorn: 8.8.0
      acorn-walk: 8.2.0
      chalk: 4.1.2
      commander: 7.2.0
      gzip-size: 6.0.0
      lodash: 4.17.21
      opener: 1.5.2
      sirv: 1.0.19
      ws: 7.5.9
    transitivePeerDependencies:
      - bufferutil
      - utf-8-validate
    dev: true

  /webpack-bundle-analyzer/4.6.1:
    resolution: {integrity: sha512-oKz9Oz9j3rUciLNfpGFjOb49/jEpXNmWdVH8Ls//zNcnLlQdTGXQQMsBbb/gR7Zl8WNLxVCq+0Hqbx3zv6twBw==}
    engines: {node: '>= 10.13.0'}
    hasBin: true
    dependencies:
      acorn: 8.8.0
      acorn-walk: 8.2.0
      chalk: 4.1.2
      commander: 7.2.0
      gzip-size: 6.0.0
      lodash: 4.17.21
      opener: 1.5.2
      sirv: 1.0.19
      ws: 7.5.9
    transitivePeerDependencies:
      - bufferutil
      - utf-8-validate

  /webpack-dev-middleware/5.3.3_webpack@5.68.0:
    resolution: {integrity: sha512-hj5CYrY0bZLB+eTO+x/j67Pkrquiy7kWepMHmUMoPsmcUaeEnQJqFzHJOyxgWlq746/wUuA64p9ta34Kyb01pA==}
    engines: {node: '>= 12.13.0'}
    peerDependencies:
      webpack: ^4.0.0 || ^5.0.0
    dependencies:
      colorette: 2.0.19
      memfs: 3.4.7
      mime-types: 2.1.35
      range-parser: 1.2.1
      schema-utils: 4.0.0
      webpack: 5.68.0
    dev: true

  /webpack-dev-middleware/5.3.3_webpack@5.74.0:
    resolution: {integrity: sha512-hj5CYrY0bZLB+eTO+x/j67Pkrquiy7kWepMHmUMoPsmcUaeEnQJqFzHJOyxgWlq746/wUuA64p9ta34Kyb01pA==}
    engines: {node: '>= 12.13.0'}
    peerDependencies:
      webpack: ^4.0.0 || ^5.0.0
    dependencies:
      colorette: 2.0.19
      memfs: 3.4.7
      mime-types: 2.1.35
      range-parser: 1.2.1
      schema-utils: 4.0.0
      webpack: 5.74.0

  /webpack-dev-server/4.11.0_webpack@5.74.0:
    resolution: {integrity: sha512-L5S4Q2zT57SK7tazgzjMiSMBdsw+rGYIX27MgPgx7LDhWO0lViPrHKoLS7jo5In06PWYAhlYu3PbyoC6yAThbw==}
    engines: {node: '>= 12.13.0'}
    hasBin: true
    peerDependencies:
      webpack: ^4.37.0 || ^5.0.0
      webpack-cli: '*'
    peerDependenciesMeta:
      webpack-cli:
        optional: true
    dependencies:
      '@types/bonjour': 3.5.10
      '@types/connect-history-api-fallback': 1.3.5
      '@types/express': 4.17.14
      '@types/serve-index': 1.9.1
      '@types/serve-static': 1.15.0
      '@types/sockjs': 0.3.33
      '@types/ws': 8.5.3
      ansi-html-community: 0.0.8
      bonjour-service: 1.0.14
      chokidar: 3.5.3
      colorette: 2.0.19
      compression: 1.7.4
      connect-history-api-fallback: 2.0.0
      default-gateway: 6.0.3
      express: 4.18.1
      graceful-fs: 4.2.10
      html-entities: 2.3.3
      http-proxy-middleware: 2.0.6_@types+express@4.17.14
      ipaddr.js: 2.0.1
      open: 8.4.0
      p-retry: 4.6.2
      rimraf: 3.0.2
      schema-utils: 4.0.0
      selfsigned: 2.1.1
      serve-index: 1.9.1
      sockjs: 0.3.24
      spdy: 4.0.2
      webpack: 5.74.0
      webpack-dev-middleware: 5.3.3_webpack@5.74.0
      ws: 8.8.1
    transitivePeerDependencies:
      - bufferutil
      - debug
      - supports-color
      - utf-8-validate

  /webpack-dev-server/4.9.3_webpack@5.68.0:
    resolution: {integrity: sha512-3qp/eoboZG5/6QgiZ3llN8TUzkSpYg1Ko9khWX1h40MIEUNS2mDoIa8aXsPfskER+GbTvs/IJZ1QTBBhhuetSw==}
    engines: {node: '>= 12.13.0'}
    hasBin: true
    peerDependencies:
      webpack: ^4.37.0 || ^5.0.0
      webpack-cli: '*'
    peerDependenciesMeta:
      webpack-cli:
        optional: true
    dependencies:
      '@types/bonjour': 3.5.10
      '@types/connect-history-api-fallback': 1.3.5
      '@types/express': 4.17.14
      '@types/serve-index': 1.9.1
      '@types/serve-static': 1.15.0
      '@types/sockjs': 0.3.33
      '@types/ws': 8.5.3
      ansi-html-community: 0.0.8
      bonjour-service: 1.0.14
      chokidar: 3.5.3
      colorette: 2.0.19
      compression: 1.7.4
      connect-history-api-fallback: 2.0.0
      default-gateway: 6.0.3
      express: 4.18.1
      graceful-fs: 4.2.10
      html-entities: 2.3.3
      http-proxy-middleware: 2.0.6_@types+express@4.17.14
      ipaddr.js: 2.0.1
      open: 8.4.0
      p-retry: 4.6.2
      rimraf: 3.0.2
      schema-utils: 4.0.0
      selfsigned: 2.1.1
      serve-index: 1.9.1
      sockjs: 0.3.24
      spdy: 4.0.2
      webpack: 5.68.0
      webpack-dev-middleware: 5.3.3_webpack@5.68.0
      ws: 8.8.1
    transitivePeerDependencies:
      - bufferutil
      - debug
      - supports-color
      - utf-8-validate
    dev: true

  /webpack-merge/5.8.0:
    resolution: {integrity: sha512-/SaI7xY0831XwP6kzuwhKWVKDP9t1QY1h65lAFLbZqMPIuYcD9QAW4u9STIbU9kaJbPBB/geU/gLr1wDjOhQ+Q==}
    engines: {node: '>=10.0.0'}
    dependencies:
      clone-deep: 4.0.1
      wildcard: 2.0.0

  /webpack-sources/3.2.3:
    resolution: {integrity: sha512-/DyMEOrDgLKKIG0fmvtz+4dUX/3Ghozwgm6iPp8KRhvn+eQf9+Q7GWxVNMk3+uCPWfdXYC4ExGBckIXdFEfH1w==}
    engines: {node: '>=10.13.0'}

  /webpack/5.68.0:
    resolution: {integrity: sha512-zUcqaUO0772UuuW2bzaES2Zjlm/y3kRBQDVFVCge+s2Y8mwuUTdperGaAv65/NtRL/1zanpSJOq/MD8u61vo6g==}
    engines: {node: '>=10.13.0'}
    hasBin: true
    peerDependencies:
      webpack-cli: '*'
    peerDependenciesMeta:
      webpack-cli:
        optional: true
    dependencies:
      '@types/eslint-scope': 3.7.4
      '@types/estree': 0.0.50
      '@webassemblyjs/ast': 1.11.1
      '@webassemblyjs/wasm-edit': 1.11.1
      '@webassemblyjs/wasm-parser': 1.11.1
      acorn: 8.8.0
      acorn-import-assertions: 1.8.0_acorn@8.8.0
      browserslist: 4.21.4
      chrome-trace-event: 1.0.3
      enhanced-resolve: 5.10.0
      es-module-lexer: 0.9.3
      eslint-scope: 5.1.1
      events: 3.3.0
      glob-to-regexp: 0.4.1
      graceful-fs: 4.2.10
      json-parse-better-errors: 1.0.2
      loader-runner: 4.3.0
      mime-types: 2.1.35
      neo-async: 2.6.2
      schema-utils: 3.1.1
      tapable: 2.2.1
      terser-webpack-plugin: 5.3.6_webpack@5.68.0
      watchpack: 2.4.0
      webpack-sources: 3.2.3
    transitivePeerDependencies:
      - '@swc/core'
      - esbuild
      - uglify-js
    dev: true

  /webpack/5.72.1:
    resolution: {integrity: sha512-dXG5zXCLspQR4krZVR6QgajnZOjW2K/djHvdcRaDQvsjV9z9vaW6+ja5dZOYbqBBjF6kGXka/2ZyxNdc+8Jung==}
    engines: {node: '>=10.13.0'}
    hasBin: true
    peerDependencies:
      webpack-cli: '*'
    peerDependenciesMeta:
      webpack-cli:
        optional: true
    dependencies:
      '@types/eslint-scope': 3.7.4
      '@types/estree': 0.0.51
      '@webassemblyjs/ast': 1.11.1
      '@webassemblyjs/wasm-edit': 1.11.1
      '@webassemblyjs/wasm-parser': 1.11.1
      acorn: 8.8.0
      acorn-import-assertions: 1.8.0_acorn@8.8.0
      browserslist: 4.21.4
      chrome-trace-event: 1.0.3
      enhanced-resolve: 5.10.0
      es-module-lexer: 0.9.3
      eslint-scope: 5.1.1
      events: 3.3.0
      glob-to-regexp: 0.4.1
      graceful-fs: 4.2.10
      json-parse-even-better-errors: 2.3.1
      loader-runner: 4.3.0
      mime-types: 2.1.35
      neo-async: 2.6.2
      schema-utils: 3.1.1
      tapable: 2.2.1
      terser-webpack-plugin: 5.3.6_webpack@5.72.1
      watchpack: 2.4.0
      webpack-sources: 3.2.3
    transitivePeerDependencies:
      - '@swc/core'
      - esbuild
      - uglify-js

  /webpack/5.74.0:
    resolution: {integrity: sha512-A2InDwnhhGN4LYctJj6M1JEaGL7Luj6LOmyBHjcI8529cm5p6VXiTIW2sn6ffvEAKmveLzvu4jrihwXtPojlAA==}
    engines: {node: '>=10.13.0'}
    hasBin: true
    peerDependencies:
      webpack-cli: '*'
    peerDependenciesMeta:
      webpack-cli:
        optional: true
    dependencies:
      '@types/eslint-scope': 3.7.4
      '@types/estree': 0.0.51
      '@webassemblyjs/ast': 1.11.1
      '@webassemblyjs/wasm-edit': 1.11.1
      '@webassemblyjs/wasm-parser': 1.11.1
      acorn: 8.8.0
      acorn-import-assertions: 1.8.0_acorn@8.8.0
      browserslist: 4.21.4
      chrome-trace-event: 1.0.3
      enhanced-resolve: 5.10.0
      es-module-lexer: 0.9.3
      eslint-scope: 5.1.1
      events: 3.3.0
      glob-to-regexp: 0.4.1
      graceful-fs: 4.2.10
      json-parse-even-better-errors: 2.3.1
      loader-runner: 4.3.0
      mime-types: 2.1.35
      neo-async: 2.6.2
      schema-utils: 3.1.1
      tapable: 2.2.1
      terser-webpack-plugin: 5.3.6_webpack@5.74.0
      watchpack: 2.4.0
      webpack-sources: 3.2.3
    transitivePeerDependencies:
      - '@swc/core'
      - esbuild
      - uglify-js

  /webpackbar/5.0.2_webpack@5.74.0:
    resolution: {integrity: sha512-BmFJo7veBDgQzfWXl/wwYXr/VFus0614qZ8i9znqcl9fnEdiVkdbi0TedLQ6xAK92HZHDJ0QmyQ0fmuZPAgCYQ==}
    engines: {node: '>=12'}
    peerDependencies:
      webpack: 3 || 4 || 5
    dependencies:
      chalk: 4.1.2
      consola: 2.15.3
      pretty-time: 1.1.0
      std-env: 3.2.1
      webpack: 5.74.0

  /websocket-driver/0.7.4:
    resolution: {integrity: sha512-b17KeDIQVjvb0ssuSDF2cYXSg2iztliJ4B9WdsuB6J952qCPKmnVq4DyW5motImXHDC1cBT/1UezrJVsKw5zjg==}
    engines: {node: '>=0.8.0'}
    dependencies:
      http-parser-js: 0.5.8
      safe-buffer: 5.2.1
      websocket-extensions: 0.1.4

  /websocket-extensions/0.1.4:
    resolution: {integrity: sha512-OqedPIGOfsDlo31UNwYbCFMSaO9m9G/0faIHj5/dZFDMFqPTcx6UwqyOy3COEaEOg/9VsGIpdqn62W5KhoKSpg==}
    engines: {node: '>=0.8.0'}

  /whatwg-encoding/1.0.5:
    resolution: {integrity: sha512-b5lim54JOPN9HtzvK9HFXvBma/rnfFeqsic0hSpjtDbVxR3dJKLc+KB4V6GgiGOvl7CY/KNh8rxSo9DKQrnUEw==}
    dependencies:
      iconv-lite: 0.4.24
    dev: true

  /whatwg-mimetype/2.3.0:
    resolution: {integrity: sha512-M4yMwr6mAnQz76TbJm914+gPpB/nCwvZbJU28cUD6dR004SAxDLOOSUaB1JDRqLtaOV/vi0IC5lEAGFgrjGv/g==}
    dev: true

  /whatwg-url/5.0.0:
    resolution: {integrity: sha512-saE57nupxk6v3HY35+jzBwYa0rKSy0XR8JSxZPwgLr7ys0IBzhGviA1/TUGJLmSVqs8pb9AnvICXEuOHLprYTw==}
    dependencies:
      tr46: 0.0.3
      webidl-conversions: 3.0.1
    dev: false

  /whatwg-url/8.7.0:
    resolution: {integrity: sha512-gAojqb/m9Q8a5IV96E3fHJM70AzCkgt4uXYX2O7EmuyOnLrViCQlsEBmF9UQIu3/aeAIp2U17rtbpZWNntQqdg==}
    engines: {node: '>=10'}
    dependencies:
      lodash: 4.17.21
      tr46: 2.1.0
      webidl-conversions: 6.1.0
    dev: true

  /which-boxed-primitive/1.0.2:
    resolution: {integrity: sha512-bwZdv0AKLpplFY2KZRX6TvyuN7ojjr7lwkg6ml0roIy9YeuSr7JS372qlNW18UQYzgYK9ziGcerWqZOmEn9VNg==}
    dependencies:
      is-bigint: 1.0.4
      is-boolean-object: 1.1.2
      is-number-object: 1.0.7
      is-string: 1.0.7
      is-symbol: 1.0.4
    dev: true

  /which-module/2.0.0:
    resolution: {integrity: sha512-B+enWhmw6cjfVC7kS8Pj9pCrKSc5txArRyaYGe088shv/FGWH+0Rjx/xPgtsWfsUtS27FkP697E4DDhgrgoc0Q==}
    dev: true

  /which/1.3.1:
    resolution: {integrity: sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==}
    hasBin: true
    dependencies:
      isexe: 2.0.0

  /which/2.0.2:
    resolution: {integrity: sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==}
    engines: {node: '>= 8'}
    hasBin: true
    dependencies:
      isexe: 2.0.0

  /wide-align/1.1.5:
    resolution: {integrity: sha512-eDMORYaPNZ4sQIuuYPDHdQvf4gyCF9rEEV/yPxGfwPkRodwEgiMUUXTx/dex+Me0wxx53S+NgUHaP7y3MGlDmg==}
    dependencies:
      string-width: 1.0.2
    dev: true

  /widest-line/3.1.0:
    resolution: {integrity: sha512-NsmoXalsWVDMGupxZ5R08ka9flZjjiLvHVAWYOKtiKM8ujtZWr9cRffak+uSE48+Ob8ObalXpwyeUiyDD6QFgg==}
    engines: {node: '>=8'}
    dependencies:
      string-width: 4.2.3

  /widest-line/4.0.1:
    resolution: {integrity: sha512-o0cyEG0e8GPzT4iGHphIOh0cJOV8fivsXxddQasHPHfoZf1ZexrfeA21w2NaEN1RHE+fXlfISmOE8R9N3u3Qig==}
    engines: {node: '>=12'}
    dependencies:
      string-width: 5.1.2

  /wildcard/2.0.0:
    resolution: {integrity: sha512-JcKqAHLPxcdb9KM49dufGXn2x3ssnfjbcaQdLlfZsL9rH9wgDQjUtDxbo8NE0F6SFvydeu1VhZe7hZuHsB2/pw==}

  /word-wrap/1.2.3:
    resolution: {integrity: sha512-Hz/mrNwitNRh/HUAtM/VT/5VH+ygD6DV7mYKZAtHOrbs8U7lvPS6xf7EJKMF0uW1KJCl0H701g3ZGus+muE5vQ==}
    engines: {node: '>=0.10.0'}
    dev: true

  /wrap-ansi/5.1.0:
    resolution: {integrity: sha512-QC1/iN/2/RPVJ5jYK8BGttj5z83LmSKmvbvrXPNCLZSEb32KKVDJDl/MOt2N01qU2H/FkzEa9PKto1BqDjtd7Q==}
    engines: {node: '>=6'}
    dependencies:
      ansi-styles: 3.2.1
      string-width: 3.1.0
      strip-ansi: 5.2.0
    dev: true

  /wrap-ansi/7.0.0:
    resolution: {integrity: sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==}
    engines: {node: '>=10'}
    dependencies:
      ansi-styles: 4.3.0
      string-width: 4.2.3
      strip-ansi: 6.0.1

  /wrap-ansi/8.0.1:
    resolution: {integrity: sha512-QFF+ufAqhoYHvoHdajT/Po7KoXVBPXS2bgjIam5isfWJPfIOnQZ50JtUiVvCv/sjgacf3yRrt2ZKUZ/V4itN4g==}
    engines: {node: '>=12'}
    dependencies:
      ansi-styles: 6.1.1
      string-width: 5.1.2
      strip-ansi: 7.0.1

  /wrappy/1.0.2:
    resolution: {integrity: sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==}

  /write-file-atomic/3.0.3:
    resolution: {integrity: sha512-AvHcyZ5JnSfq3ioSyjrBkH9yW4m7Ayk8/9My/DD9onKeu/94fwrMocemO2QAJFAlnnDN+ZDS+ZjAR5ua1/PV/Q==}
    dependencies:
      imurmurhash: 0.1.4
      is-typedarray: 1.0.0
      signal-exit: 3.0.7
      typedarray-to-buffer: 3.1.5

  /ws/7.5.9:
    resolution: {integrity: sha512-F+P9Jil7UiSKSkppIiD94dN07AwvFixvLIj1Og1Rl9GGMuNipJnV9JzjD6XuqmAeiswGvUmNLjr5cFuXwNS77Q==}
    engines: {node: '>=8.3.0'}
    peerDependencies:
      bufferutil: ^4.0.1
      utf-8-validate: ^5.0.2
    peerDependenciesMeta:
      bufferutil:
        optional: true
      utf-8-validate:
        optional: true

  /ws/8.8.1:
    resolution: {integrity: sha512-bGy2JzvzkPowEJV++hF07hAD6niYSr0JzBNo/J29WsB57A2r7Wlc1UFcTR9IzrPvuNVO4B8LGqF8qcpsVOhJCA==}
    engines: {node: '>=10.0.0'}
    peerDependencies:
      bufferutil: ^4.0.1
      utf-8-validate: ^5.0.2
    peerDependenciesMeta:
      bufferutil:
        optional: true
      utf-8-validate:
        optional: true

  /xdg-basedir/4.0.0:
    resolution: {integrity: sha512-PSNhEJDejZYV7h50BohL09Er9VaIefr2LMAf3OEmpCkjOi34eYyQYAXUTjEQtZJTKcF0E2UKTh+osDLsgNim9Q==}
    engines: {node: '>=8'}

  /xml-js/1.6.11:
    resolution: {integrity: sha512-7rVi2KMfwfWFl+GpPg6m80IVMWXLRjO+PxTq7V2CDhoGak0wzYzFgUY2m4XJ47OGdXd8eLE8EmwfAmdjw7lC1g==}
    hasBin: true
    dependencies:
      sax: 1.2.4
    dev: false

  /xml-name-validator/3.0.0:
    resolution: {integrity: sha512-A5CUptxDsvxKJEU3yO6DuWBSJz/qizqzJKOMIfUJHETbBw/sFaDxgd6fxm1ewUaM0jZ444Fc5vC5ROYurg/4Pw==}
    dev: true

  /xmlchars/2.2.0:
    resolution: {integrity: sha512-JZnDKK8B0RCDw84FNdDAIpZK+JuJw+s7Lz8nksI7SIuU3UXJJslUthsi+uWBUYOwPFwW7W7PRLRfUKpxjtjFCw==}
    dev: true

  /xtend/4.0.2:
    resolution: {integrity: sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==}
    engines: {node: '>=0.4'}

  /y18n/4.0.3:
    resolution: {integrity: sha512-JKhqTOwSrqNA1NY5lSztJ1GrBiUodLMmIZuLiDaMRJ+itFd+ABVE8XBjOvIWL+rSqNDC74LCSFmlb/U4UZ4hJQ==}
    dev: true

  /yallist/4.0.0:
    resolution: {integrity: sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==}

  /yaml/1.10.2:
    resolution: {integrity: sha512-r3vXyErRCYJ7wg28yvBY5VSoAF8ZvlcW9/BwUzEtUsjvX/DKs24dIkuwjtuprwJJHsbyUbLApepYTR1BN4uHrg==}
    engines: {node: '>= 6'}

  /yargs-parser/13.1.2:
    resolution: {integrity: sha512-3lbsNRf/j+A4QuSZfDRA7HRSfWrzO0YjqTJd5kjAq37Zep1CEgaYmrH9Q3GwPiB9cHyd1Y1UwggGhJGoxipbzg==}
    dependencies:
      camelcase: 5.3.1
      decamelize: 1.2.0
    dev: true

  /yargs-parser/20.2.9:
    resolution: {integrity: sha512-y11nGElTIV+CT3Zv9t7VKl+Q3hTQoT9a1Qzezhhl6Rp21gJ/IVTW7Z3y9EWXhuUBC2Shnf+DX0antecpAwSP8w==}
    engines: {node: '>=10'}
    dev: true

  /yargs/13.3.2:
    resolution: {integrity: sha512-AX3Zw5iPruN5ie6xGRIDgqkT+ZhnRlZMLMHAs8tg7nRruy2Nb+i5o9bwghAogtM08q1dpr2LVoS8KSTMYpWXUw==}
    dependencies:
      cliui: 5.0.0
      find-up: 3.0.0
      get-caller-file: 2.0.5
      require-directory: 2.1.1
      require-main-filename: 2.0.0
      set-blocking: 2.0.0
      string-width: 3.1.0
      which-module: 2.0.0
      y18n: 4.0.3
      yargs-parser: 13.1.2
    dev: true

  /yocto-queue/0.1.0:
    resolution: {integrity: sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==}
    engines: {node: '>=10'}

  /z-schema/5.0.4:
    resolution: {integrity: sha512-gm/lx3hDzJNcLwseIeQVm1UcwhWIKpSB4NqH89pTBtFns4k/HDHudsICtvG05Bvw/Mv3jMyk700y5dadueLHdA==}
    engines: {node: '>=8.0.0'}
    hasBin: true
    dependencies:
      lodash.get: 4.4.2
      lodash.isequal: 4.5.0
      validator: 13.7.0
    optionalDependencies:
      commander: 2.20.3

  /zwitch/1.0.5:
    resolution: {integrity: sha512-V50KMwwzqJV0NpZIZFwfOD5/lyny3WlSzRiXgA0G7VUnRlqttta1L6UQIHzd6EuBY/cHGfwTIck7w1yH6Q5zUw==}
`;
