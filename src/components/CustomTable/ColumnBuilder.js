import {
    DeleteOutlined,
    EyeInvisibleOutlined,
    EyeOutlined,
    QrcodeOutlined,
} from '@ant-design/icons';
import { Button, Dropdown, Menu, Space, Table } from 'antd';

const { Column } = Table;

const menuSelection = (props, record) => {
    const {
        t,
        handleActionButtonDeleteClick,
        handleActionButtonTurnOffClick,
        handleActionButtonTurnOnClick,
    } = props;

    const process = () => {
        let menuArr = [
            {
                label: t('app.feature.table.buttonColumn.delete'),
                key: '1',
                icon: <DeleteOutlined />,
                danger: true,
                onClick: () => handleActionButtonDeleteClick(record),
            },
        ];
        if (record.hasOwnProperty('isActive')) {
            if (record.isActive) {
                menuArr.push({
                    label: t('app.feature.table.buttonColumn.turnOff'),
                    key: '2',
                    icon: <EyeInvisibleOutlined />,
                    onClick: () => handleActionButtonTurnOffClick(record),
                });
            } else {
                menuArr.push({
                    label: t('app.feature.table.buttonColumn.turnOn'),
                    key: '2',
                    icon: <EyeOutlined />,
                    onClick: () => handleActionButtonTurnOnClick(record),
                });
            }
        }
        return menuArr;
    };

    return (
        <>
            <Menu items={process()} />
        </>
    );
};

const ActionColumn = (props) => {
    const { t, handleActionButtonEditClick } = props;
    return (
        <>
            <Column
                title={t('app.feature.table.actionColumn')}
                key='action'
                align='center'
                render={(record) => (
                    <Space>
                        <Dropdown.Button
                            type='text'
                            dropdownRender={() => menuSelection(props, record)}
                            trigger={['click']}
                            onClick={() => handleActionButtonEditClick(record)}
                        >
                            {t('app.feature.table.buttonColumn.edit')}
                        </Dropdown.Button>
                    </Space>
                )}
            />
        </>
    );
};

const ShowQrCodeColumn = (props) => {
    const { t, handleShowQrCodeClick } = props;
    return (
        <>
            <Column
                title={t('app.feature.table.tableManagement.qrCode.label')}
                key='action'
                align='center'
                render={(record) => (
                    <Button
                        type='text'
                        icon={<QrcodeOutlined style={{ fontSize: '16px', color: '#08c' }} />}
                        onClick={() => handleShowQrCodeClick(record)}
                    ></Button>
                )}
            />
        </>
    );
};

const ExtraColumnBuilder = (props, key) => {
    const { t, handleShowQrCodeClick } = props;

    switch (key) {
        case ShowQrCodeColumnKey:
            return (
                <>
                    <Column
                        title={t('app.feature.table.tableManagement.qrCode.label')}
                        key='action'
                        align='center'
                        render={(record) => (
                            <Button
                                type='text'
                                icon={
                                    <QrcodeOutlined style={{ fontSize: '16px', color: '#08c' }} />
                                }
                                onClick={() => handleShowQrCodeClick(record)}
                            ></Button>
                        )}
                    />
                </>
            );

        default:
            break;
    }
};

const ShowQrCodeColumnKey = 'showqrcode';

export const ColumnBuilderKey = { ShowQrCodeColumnKey };

export const ColumnBuilder = { ActionColumn, ExtraColumnBuilder };
