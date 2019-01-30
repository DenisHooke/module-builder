# CRAM Builder
**CRAM Builder** - this's a helpder-script for [Create React App Module](https://github.com/facebook/create-react-app) boilerplate which helps to build new feature-modules.

Just build your own app with isolated structure. 

### Installation
It can be installed via `npm` using:

```bash
npm i cram-builder
```

### Running Script

```bash
node ./bin/cram-builder.js
```

### Usage

After running script you'll see a list of questions:
```
1. Put you module folder... (src/modules/) 
2. What's the name of the module? (awesome)
3. Create reducer? (Y/n) 
4. Create actions? (Y/n) 
5. Create component structure? (Y/n) 
6. Add routing? (Y/n) 

```

**1. Put you module folder... (src/modules/)** - set up you path to module folder, if you skip this step system 
will use `src/modules` dir from the root directory of the project.

**2. What's the name of the module? (awesome)** - set up name of you future module. Allowing usage naming in lower case
and dashes between words.

**3. Create reducer? (Y/n)** - configure is your module will use reducer. If set up `Yes` reducer will be automatically connected to the app.

**4. Create actions? (Y/n)** - create folder for actions of the module

**5. Create component structure? (Y/n)** - means that inside the module structure will be created `config.js`, `template.js` and `components` folder.

**6. Add routing? (Y/n)** - set up if your component suggest using routing.