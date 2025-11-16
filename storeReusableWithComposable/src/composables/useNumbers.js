import { ref } from 'vue'


const useNumbers = () => {
    const numbers = ref([1, 2, 3, 4, 5, 6, 7, 8, 9])

    const addNumbers = num => {
        numbers.value.push(num)
    }

    const filterNum = minNum => {
        return numbers.value.filter(num => num >= minNum)
    }

    return {
        numbers: numbers.value
        , addNumbers: addNumbers
        , filterNum: filterNum
    }
}

export default useNumbers