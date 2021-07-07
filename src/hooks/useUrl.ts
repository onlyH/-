import axios from "axios";
import {ref} from "vue";

function useUrlLoader<T>(url: string) {
    const result = ref<T | null>(null)
    const loading = ref(true)
    const loaded = ref(false)
    const error = ref(null)
    axios.get(url).then(res => {
        loading.value = false
        loaded.value = true
        result.value = res.data
    }).catch(e => {
        error.value = e
        loading.value = false
    })
    return {
        result,
        loaded,
        loading,
        error
    }
}

export default useUrlLoader