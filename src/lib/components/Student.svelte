<script>
    export let data = {
        name : "",
        ig_name : "",
        image : "",
        ig_link : ""
    }

</script>
        <div class="flex items-center space-x-6 px-5 py-3 text-white border-2 border-[#C48E16] rounded-[28px] bg-gradient-to-r from-[rgb(72,54,14)] via-[#7F5E17] to-[#FFC851] shadow-inner-y tradewin">
            <img src="{data.image}" alt="" class="size-20 object-cover rounded-xl  border-2 border-yellow-500">
            <div class="flex flex-col gap-2">
                <p class="text-base">{data.name}</p>
                <p class="text-xl text-yellow-50 mangorn underline"><a href={data.ig_link}>{data.ig_name}</a></p>
            </div>
        </div>

<style>
    .shadow-inner-y {
        box-shadow: inset 0 -4px 6px rgba(0, 0, 0, 0.3), inset 0 4px 6px rgba(0, 0, 0, 0.3);
    }
</style>