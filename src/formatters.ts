function formatarData(data: Date, formato: FormatoData = FormatoData.PADRAO): string {
    if (formato === FormatoData.DIA_SEMANA_DIA_MES_ANO) {
        return data.toLocaleDateString("pt-BR", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
    } else if (formato === FormatoData.DIA_MES) {
        return data.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit"
        });
    } else {
        return data.toLocaleDateString("pt-BR");
    }
}

function formatarMoeda(valor: number): string {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}