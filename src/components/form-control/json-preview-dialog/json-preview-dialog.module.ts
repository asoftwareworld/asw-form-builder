/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';

import { AswJsonPreviewDialogComponent } from './json-preview-dialog.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        MatDialogModule,
        ClipboardModule
    ],
    declarations: [
        AswJsonPreviewDialogComponent
    ],
    exports: [
        AswJsonPreviewDialogComponent
    ]
})
export class AswJsonPreviewDialogModule { }
