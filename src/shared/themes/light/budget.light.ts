import { IBudget } from "../interfaces/budget.interface";

export const budgetColors: IBudget = {
    budget: {
        budgetCard: {
            $bg: "#fff",
            lineIndicator: {
                $bg: 'rgba(245, 245, 245, 1)',
                $start: 'rgba(51, 201, 255, 1)',
                $end: 'rgba(255, 37, 37, 1)'
            }
        },

        categoryBtn: {
            $bg: '#fff',
            $activeBorder: '#FF3378',
            $txt: '#1C202E',
            $activeTxt: '#FF3378',
            $shadow: '#000'
        },

        transactionSelect: {
            $bg: '#FFFFFF',
            $txt: '#1C202E',
            $shadow: '#000000'
        }
    }
}