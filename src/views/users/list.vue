<template>
    <div class="app-container">
        <div class="btn-container">
            <router-link to="/users/create">
                <el-button icon="el-icon-edit" type="success">创建用户</el-button>
            </router-link>
        </div>
        <el-table v-loading="loading" :data="list" border fit highlight-current-row style="width:100%">
            <el-table-column align="center" label="账户名" prop="name">
            </el-table-column>
            <el-table-column align="center" label="年龄" prop="age">
            </el-table-column>
            <!-- 操作列 -->
            <el-table-column label="操作" align="center">
                <template v-slot="scope">
                    <el-button
                            type="primary"
                            icon="el-icon-edit"
                            @click="handleEdit(scope)"
                    >更新
                    </el-button>
                    <el-button
                            type="danger"
                            icon="el-icon-remove"
                            @click="handleDelete(scope)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <pagination
                v-show="total>0"
                :total="total"
                v-model:page="listQuery.page"
                v-model:limit="listQuery.limit"
                @pagination="getList"
        />
    </div>
</template>

<script>
    import Pagination from '../../components/Pagination.vue'
    import { Message } from "element3";
    import {useList} from "./model/userModel";
    import { toRefs } from "vue";
    import { useRouter } from "vue-router";
    export default {
        name: "UserList",
        components: {Pagination},
        setup() {
            //玩家列表数据
            const router = useRouter();
            const {state, getList, delItem} = useList();
            //用户更新
            function handleEdit({row}) {
                router.push({name:"userEdit",params:{id:row.id}})
            }
            //删除玩家
            function handleDelete(row) {
                delItem(row.id).then(()=>{
                    Message.success("删除成功！");
                })
            }
            return {
                ...toRefs(state),
                getList,
                handleDelete,
                handleEdit
            }
        }
    }
</script>

<style lang="scss" scoped>
    .btn-container {
        text-align: left;
        padding: 0px 10px 20px 0px;
    }
</style>