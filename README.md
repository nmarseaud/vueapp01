# vueapp01

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Tools

- vue-router
- ESLint Standart
- unit-test jest
- e2e tests Nightwatch

## Notes

To create a new component with a new route, do as follow :
 1. /src/router/index.js
   * Add import
   ``ComponentX from '@/components/ComponentX'``
   
   * Add route in routes[]
   ``{ path: '/componentx', name: 'ComponentX', component: ComponentX }``
   
 2. /src/AnyComponent.vue
   * Add the link
   ``<router-link to="/componentx">ComponentX</router-link>`` or ``<router-link :to="{ name : 'ComponentX' }">ComponentX</router-link>``
   
 3. /src/ComponentX.vue
   * Add the content to the new component
   ```
    <template>
        <div class="componentx">
        </div>
    </template>
    
    <script>
        export default {
          name: 'ComponentX'
        }
    </script>
   ```
   
To use json files in your component, simply do as folow
 1. /src/assets/path_to_json/file.json
   * Add your file in the asset folder

 2. /src/ComponentX.vue
   * Import your file under a variable name, and use it when declaring the Vue's data
   ```
    import JSONfile from '@/assets/path_to_json/file.json'
    export default {
      name: 'ComponentX',
      data: function () {
        return {
          data: JSONfile
        }
      },
   ```