#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os
from PIL import Image
import xml.etree.ElementTree as ET
from xml.dom import minidom

def create_browserconfig_xml():
    """创建browserconfig.xml文件"""
    browserconfig = ET.Element('browserconfig')
    msapplication = ET.SubElement(browserconfig, 'msapplication')
    tile = ET.SubElement(msapplication, 'tile')
    ET.SubElement(tile, 'square150x150logo', src='/mstile-150x150.png')
    ET.SubElement(tile, 'TileColor', text='#da532c')
    
    # 美化XML格式
    rough_string = ET.tostring(browserconfig, 'unicode')
    reparsed = minidom.parseString(rough_string)
    
    with open('browserconfig.xml', 'w', encoding='utf-8') as f:
        f.write(reparsed.toprettyxml(indent="  "))
    
    print("✓ 已创建 browserconfig.xml")

def create_safari_pinned_tab_svg(size=16):
    """创建简单的SVG图标"""
    svg_content = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg width="{size}" height="{size}" viewBox="0 0 {size} {size}" xmlns="http://www.w3.org/2000/svg">
    <rect width="{size}" height="{size}" fill="black"/>
    <circle cx="{size//2}" cy="{size//2}" r="{size//3}" fill="white"/>
</svg>'''
    
    with open('safari-pinned-tab.svg', 'w', encoding='utf-8') as f:
        f.write(svg_content)
    
    print("✓ 已创建 safari-pinned-tab.svg")

def convert_images(input_image_path, output_dir='output'):
    """
    将输入图片转换为多种格式和尺寸
    
    Args:
        input_image_path (str): 输入图片路径
        output_dir (str): 输出目录
    """
    
    # 创建输出目录
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    # 定义要生成的图片规格
    image_specs = [
        ('android-chrome-192x192.png', 192, 192, 'PNG'),
        ('android-chrome-512x512.png', 512, 512, 'PNG'),
        ('apple-touch-icon.png', 180, 180, 'PNG'),  # Apple touch icon 通常是180x180
        ('favicon-16x16.png', 16, 16, 'PNG'),
        ('favicon-32x32.png', 32, 32, 'PNG'),
        ('favicon.ico', 32, 32, 'ICO'),  # ICO格式，32x32大小
        ('mstile-150x150.png', 150, 150, 'PNG'),
    ]
    
    try:
        # 打开原始图片
        with Image.open(input_image_path) as img:
            print(f"原始图片尺寸: {img.size}")
            print(f"原始图片格式: {img.format}")
            
            # 转换为RGBA模式以支持透明度
            if img.mode != 'RGBA':
                img = img.convert('RGBA')
            
            # 生成各种尺寸的图片
            for filename, width, height, format_type in image_specs:
                output_path = os.path.join(output_dir, filename)
                
                # 调整图片尺寸
                resized_img = img.resize((width, height), Image.Resampling.LANCZOS)
                
                # 特殊处理ICO格式
                if format_type == 'ICO':
                    # ICO格式需要RGB模式
                    if resized_img.mode == 'RGBA':
                        # 创建白色背景
                        background = Image.new('RGB', (width, height), (255, 255, 255))
                        background.paste(resized_img, mask=resized_img.split()[-1])  # 使用alpha通道作为mask
                        resized_img = background
                    resized_img.save(output_path, format='ICO')
                else:
                    resized_img.save(output_path, format=format_type)
                
                print(f"✓ 已生成 {filename} ({width}x{height})")
        
        # 生成额外的文件
        create_browserconfig_xml_file = os.path.join(output_dir, 'browserconfig.xml')
        create_safari_svg_file = os.path.join(output_dir, 'safari-pinned-tab.svg')
        
        # 切换到输出目录来创建文件
        original_dir = os.getcwd()
        os.chdir(output_dir)
        
        create_browserconfig_xml()
        create_safari_pinned_tab_svg()
        
        # 切换回原目录
        os.chdir(original_dir)
        
        print(f"\n🎉 所有文件已成功生成到 '{output_dir}' 目录!")
        print("\n生成的文件列表:")
        for file in os.listdir(output_dir):
            file_path = os.path.join(output_dir, file)
            if os.path.isfile(file_path):
                size = os.path.getsize(file_path)
                print(f"  📄 {file} ({size} bytes)")
                
    except FileNotFoundError:
        print(f"❌ 错误: 找不到输入文件 '{input_image_path}'")
    except Exception as e:
        print(f"❌ 转换过程中发生错误: {str(e)}")

def main():
    """主函数"""
    print("🖼️  图片格式转换器")
    print("=" * 50)
    
    # 获取用户输入
    input_path = '/Users/RUOYLIU/Desktop/Apexella/atweb/public/assets/logo.png'
    
    if not input_path:
        print("❌ 请提供有效的图片路径!")
        return
    
    # 询问输出目录
    output_path = input("请输入输出目录 (默认: output): ").strip()
    if not output_path:
        output_path = "output"
    
    print(f"\n开始转换图片...")
    convert_images(input_path, output_path)

if __name__ == "__main__":
    # 检查依赖
    try:
        import PIL
        print("✓ PIL/Pillow 已安装")
    except ImportError:
        print("❌ 请先安装 Pillow: pip install Pillow")
        exit(1)
    
    main()