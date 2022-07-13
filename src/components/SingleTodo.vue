<template>
    <div>
        <h3>{{single}}</h3>
        <button @click="readSlotData" >Delete</button>
    </div>
</template>

<script>
export default {
    props:["single"],
    data() {
        return {
        }
    },
    methods: {
        readSlotData(){
            console.log( this.$slot.data[0].text);
        }
    },
}
</script>