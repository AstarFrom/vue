<script lang="jsx">
    import {ref} from "vue";

    export default {
        setup() {
            const counter = ref(0);
            const onclick = () => {
                counter.value++
            }
            const onClick = () => {
                counter.value++;
            };
            return () => (<>
                <div>comp</div>
                <p onclick={onclick}>{counter.value}</p>
            </>)
        }
    }
    // export default {
    //     data() {
    //         return {
    //             counter: 0
    //         }
    //     },
    //     methods: {
    //         addCounter() {
    //             this.counter++;
    //         }
    //     // },
    //     // render() {
    //         // return (
    //             // <>
    //                 // <div> comp</div>
    //                 <!--<p onClick={this.addCounter}> {this.counter}</p>-->
    //             // </>
    //         // )
    //     // }
    //
    // // }
</script>

<style scoped>

</style>