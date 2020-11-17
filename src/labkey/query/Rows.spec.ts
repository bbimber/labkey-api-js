/*
 * Copyright (c) 2020 LabKey Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as Ajax from '../Ajax'
import {
    deleteRows,
    insertRows,
    updateRows,
} from './Rows'

describe('Query row interfaces', () => {
    it('#deleteRows', () => {
        // Arrange
        const requestSpy = jest.spyOn(Ajax, 'request').mockImplementation();
        const schemaName = 'SSS';
        const queryName = 'QQQ';
        const rows = [{ rowId: 1 }, { rowId: 2 }];

        // Act
        deleteRows({ schemaName, queryName, rows });

        // Assert
        expect(requestSpy).toHaveBeenCalledWith(expect.objectContaining({
            method: 'POST',
            jsonData: expect.objectContaining({
                queryName,
                rows,
                schemaName,
            }),
            url: '/query/deleteRows.api',
        }));
    });
    it('#insertRows', () => {
        // Arrange
        const requestSpy = jest.spyOn(Ajax, 'request').mockImplementation();
        const schemaName = 'SSS';
        const queryName = 'QQQ';
        const rows = [{ rowId: 1 }, { rowId: 2 }];

        // Act
        insertRows({ schemaName, queryName, rows });

        // Assert
        expect(requestSpy).toHaveBeenCalledWith(expect.objectContaining({
            method: 'POST',
            jsonData: expect.objectContaining({
                queryName,
                rows,
                schemaName,
            }),
            url: '/query/insertRows.api',
        }));
    });
    it('#updateRows', () => {
        // Arrange
        const requestSpy = jest.spyOn(Ajax, 'request').mockImplementation();
        const schemaName = 'SSS';
        const queryName = 'QQQ';
        const rows = [{ rowId: 1 }, { rowId: 2 }];

        // Act
        updateRows({ schemaName, queryName, rows });

        // Assert
        expect(requestSpy).toHaveBeenCalledWith(expect.objectContaining({
            method: 'POST',
            jsonData: expect.objectContaining({
                queryName,
                rows,
                schemaName,
            }),
            url: '/query/updateRows.api',
        }));
    });
});
