import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import { fontSizes, spacing } from '../../utils/sizes'
import { RoundedButton } from '../../components/RoundedButton'

const HistoryItem = ({ item, index }) => {
    return (
        <Text style={styles.historyItem(item.status)}>
            {item.subject}
        </Text>
    )
}

export const FocusHistory = ({ focusHistory, onClear }) => {
    const clearHistory = () => {
        onClear()
    }

    return (
        <>
            <SafeAreaView style={{ flex: 0.5, alignItems: 'center' }}>
                {!!focusHistory.length && (
                    <>

                        <Text style={styles.title}>FocusHistory</Text>
                        <FlatList
                            style={{ flex: 1 }}
                            contentContainerStyle={{ flex: 1, alignItems: 'center' }}
                            data={focusHistory}
                            renderItem={HistoryItem}

                        />
                    </>
                )}
            </SafeAreaView>
            <View style={styles.clearContainer}>
                <RoundedButton size={75} title="Clear" onPress={() => onClear()} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    historyItem: (status) => ({
        color: status > 1 ? 'red' : 'green',
        fontSize: fontSizes.md
    }),
    title: {
        color: colors.white,
        fontSize: fontSizes.lg
    },
    clearContainer: {
        alignItems: 'center',
        padding: spacing.md
    }
})