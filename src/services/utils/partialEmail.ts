const partialEmail = (value: any) => {
    return value.replace(/(\w{1})[\w.-]+@([\w.]+\w)/, "$1***@$2")
}

export default partialEmail;