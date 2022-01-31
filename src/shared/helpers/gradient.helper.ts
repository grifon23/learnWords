import { GradientColorsData, ColorsData } from "@/modules/bankAccounts/configs"

export const cardGradient = (i: number): string[] => {
    const result = i % 3
    switch (result) {
        case 0:
            return GradientColorsData[result]
        case 1: 
            return GradientColorsData[result]
        case 2:
            return GradientColorsData[result]
    
        default:
            console.log('error')
    }
}

export const cardColor = (i: number): string => {
    const result = i % 3
    switch (result) {
        case 0:
            return ColorsData[result]
        case 1: 
            return ColorsData[result]
        case 2:
            return ColorsData[result]
    
        default:
            console.log('error')
    }
}