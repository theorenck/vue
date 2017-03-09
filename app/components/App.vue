<template>
  <div id="app" class="content">
    <el-row :gutter="20">
      <el-col :span="24">
        <el-table
          :data="data"
          stripe
          highlight-current-row
          @filter-change="methods.filterChange"
          style="width: 100%">
          <el-table-column
            prop="codcliente"
            label="#"
            align="right"
            sortable
            width="80">
          </el-table-column>
          <el-table-column
            prop="pessoa"
            label="Tipo"
            align="right"
            :filters="filters.pessoa"
            :filter-method="methods.filter('pessoa')"
            sortable
            width="120">
            <template scope="scope">
              <el-tag
                :type="scope.row.pessoa === 'F' ? 'primary' : 'success'"
                close-transition>
                  {{scope.row.pessoa === 'F' ? 'Física': 'Jurídica'}}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column
            prop="nome"
            label="Nome"
            sortable>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import axios from 'axios'
  import { Loading } from 'element-ui'

  axios.defaults.baseURL = 'http://localhost:3000'
  axios.defaults.headers.common['Authorization'] = 'Basic emV0YTphMDMwbWVjeg=='

  const resource = '/api/v1/entities/zw15ecli?fields=codcliente,pessoa,nome'

  export default {
    data() {
      return {
        data: [],
        filters: {
          pessoa: [
            { value:'F', text:'Física'  },
            { value:'J', text:'Juridica'}
          ]
        },
        methods: {
          filter(column) {
            switch (column) {
              default:
                return (v, r) => r[column] === v
            }
          },
          filterChange(object) {
            console.log(object);
          }
        }
      }
    },
    beforeCreate() {
      let loading = Loading.service()
      axios.get(resource).then(res => {
        this.data = res.data
        loading.close()
      })
    }
  }
</script>
