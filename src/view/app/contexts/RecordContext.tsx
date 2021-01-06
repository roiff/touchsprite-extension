import * as React from 'react';
import { createContext, useState, useCallback } from 'react';
import { message } from 'antd';

export interface IRecord {
    coordinate: string;
    color: string;
    preview: string;
    key: string;
}

export interface IPoint {
    x: number;
    y: number;
}

export interface IRecordContext {
    records: IRecord[];
    addRecordByMouse: (x: number, y: number, c: string) => void;
    addRecordByKeyboard: (key: string, x: number, y: number, c: string) => void;
    deleteRecord: (key: string) => void;
    clearRecords: () => void;
    p1: IPoint;
    p2: IPoint;
    setPoint1: (x: number, y: number) => void;
    setPoint2: (x: number, y: number) => void;
    clearPoints: () => void;
}

export const RecordContextDefaultValue: IRecordContext = {
    records: [],
    addRecordByMouse: () => null,
    addRecordByKeyboard: () => null,
    deleteRecord: () => null,
    clearRecords: () => null,
    p1: { x: -1, y: -1 },
    p2: { x: -1, y: -1 },
    setPoint1: () => null,
    setPoint2: () => null,
    clearPoints: () => null,
};

export const RecordContext = createContext<IRecordContext>(RecordContextDefaultValue);

const RecordContextProvider = (props: { children: React.ReactNode }) => {
    const [records, setRecords] = useState<IRecord[]>([]);
    const [p1, setP1] = useState<IPoint>({ x: -1, y: -1 });
    const [p2, setP2] = useState<IPoint>({ x: -1, y: -1 });

    const addRecordByMouse = useCallback(
        (x: number, y: number, c: string) => {
            if (records.length >= 9) {
                message.warning('最大取点数为9个');
                return;
            }
            setRecords([...records, { coordinate: `${x},${y}`, color: c, preview: c, key: (records.length + 1).toString() }]);
        },
        [records]
    );

    const addRecordByKeyboard = useCallback(
        (key: string, x: number, y: number, c: string) => {
            const index = parseInt(key) - 1;
            const copy = [...records];
            for (let i = 0; i < index; i++) {
                if (!copy[i]) {
                    copy[i] = { key: (i + 1).toString(), coordinate: '', color: '', preview: '' };
                }
            }
            copy[index] = { coordinate: `${x},${y}`, color: c, preview: c, key: key };
            setRecords(copy);
        },
        [records]
    );

    const deleteRecord = useCallback(
        (key: string) => {
            const copy = records.filter(record => record.key !== key);
            const newRecords = copy.map((record: IRecord, i: number) => {
                return { ...record, key: i.toString() };
            });
            setRecords(newRecords);
        },
        [records]
    );

    const clearRecords = useCallback(() => setRecords([]), []);

    const setPoint1 = useCallback((x: number, y: number) => setP1({ x, y }), []);

    const setPoint2 = useCallback((x: number, y: number) => setP2({ x, y }), []);

    const clearPoints = useCallback(() => {
        setPoint1(-1, -1);
        setPoint2(-1, -1);
    }, [setPoint1, setPoint2]);

    return (
        <RecordContext.Provider
            value={{ records, addRecordByMouse, addRecordByKeyboard, deleteRecord, clearRecords, p1, p2, setPoint1, setPoint2, clearPoints }}
        >
            {props.children}
        </RecordContext.Provider>
    );
};

export default RecordContextProvider;
