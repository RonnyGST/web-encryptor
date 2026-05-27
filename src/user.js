
class User
{
    // history irá guardar o histórico de cifras do usuário juntamente com as senhas de cada uma.
    constructor(name, password, history)
    {
        this.name = name;
        this.password = password;
        this.history = history;
    }
}